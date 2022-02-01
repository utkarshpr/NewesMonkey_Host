import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
import Spinner from "./Spinner";
import "../index.css";
import { articles } from "../general";
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "",
    articles: { articles },
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      //articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handlePrevClick = async () => {
    this.props.setProgress(0);
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
      this.state.page - 1
    }&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);
  };

  handleNextClick = async () => {
    this.props.setProgress(0);
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
        this.state.page + 1
      }&pageSize=20`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
    this.props.setProgress(100);
  };

  render() {
    let { background, color } = this.props;
    return (
      <>
        <h1
          className="  text-center py-1 "
          style={{ color: color, background: background, fontSize: "4rem" }}
        >
          NewsMonkey - {this.props.title}
        </h1>
        {this.state.loading && <Spinner background={background} />}
        <div style={{ background: background, height: "100%" }}>
          <div className="container py-3" style={{ background: background }}>
            <>
              <Flex style={{ height: "100%" }}>
                {!this.state.loading &&
                  articles.map((element) => {
                    return (
                      <div style={{ width: "100%", margin: "13px 2px" }}>
                        <NewsItem
                          background={background}
                          color={color}
                          title={element.title ? element.title : ""}
                          description={
                            element.description ? element.description : ""
                          }
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          source={element.source.name}
                          author={element.author}
                          date={element.publishedAt.slice(0, 10)}
                        />
                      </div>
                    );
                  })}
              </Flex>
            </>
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-warning"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              }
              type="button"
              className="btn btn-warning"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
const Flex = styled.div`
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 765px) {
    flex-direction: column;
  }
`;
