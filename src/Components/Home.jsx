import React from "react";
import "../index.css";
import Bounce from "react-reveal/Bounce";
import Flash from "react-reveal/Flash";

function Home(props) {
  return (
    <>
      <div style={{ background: `${props.background}`, height: "90vh" }}>
        <h1 class="black-lives-matter">News Monkey </h1>
        <Bounce>
          <div className="container  " style={{ paddingTop: "2rem" }}>
            <code style={{ fontSize: "1.5rem" }}>
              It's amazing that the amount of news that happens in the world
              every day always just exactly fits the newspaper.
            </code>
          </div>
        </Bounce>
        <Flash>
          <div
            style={{
              fontSize: "1.4rem",
              padding: "2rem",
              color: `${props.color}`,
            }}
          >
            <strong>
              𝔉𝔯𝔢𝔢 𝔑𝔢𝔴𝔰 𝔇𝔞𝔦𝔩𝔶 ,{" "}
              <span style={{ textDecoration: "line-through" }}>
                𝔫𝔬 𝔰𝔦𝔤𝔫𝔲𝔭 𝔫𝔬 𝔞𝔡𝔡𝔰
              </span>{" "}
              😎
            </strong>
          </div>
        </Flash>
        <div
          style={{
            fontSize: "1.4rem",
            position: "fixed",

            bottom: "12%",
            right: "34%",

            color: `${props.color}`,
          }}
        >
          <div> 𝕸𝖆𝖉𝖊 𝖜𝖎𝖙𝖍 𝕷𝖔𝖛𝖊 💖</div>
          <div style={{ color: "red" }}>
            * as it is a free api so it cannot be use other than localhost{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
