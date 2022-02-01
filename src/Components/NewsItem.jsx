import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
import "../index.css";
function NewsItem(props) {
  return (
    <Zoom top cascade>
      <Div
        className="px-3 py-3 holo "
        style={{
          background: props.background,
          border: `2px solid ${props.color}`,
          width: "100%",
          padding: "2px 2px",
        }}
      >
        <div
          className="card "
          style={{
            flex: "30%",
            padding: "3px 3px",
            border: "3px solid",
          }}
        >
          <div
            style={{
              padding: "3px 3px",
              //border: "3px solid yellow",
            }}
          >
            <img
              src={
                !props.imageUrl
                  ? "https://lh3.googleusercontent.com//J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=rj-w300-h300-l95-c0xffffff"
                  : props.imageUrl
              }
              className="card-img-top"
              alt="Sorry! no image to display 😢"
              style={{ height: "10rem", width: "10rem" }}
            />
            <div>
              <code>Published at :{props.date}</code>
            </div>
          </div>
        </div>
        <div
          className="card-body"
          style={{ background: props.background, color: props.color }}
        >
          <h5 className="card-title">
            {props.title}...
            <span
              class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {props.source}
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <hr />
          <p className="card-text">{props.description}...</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a
              href={props.newsUrl}
              target="_blank"
              className="btn btn-outline-danger"
              style={{ cursor: "pointer" }}
            >
              Read More...
            </a>
          </div>
        </div>
      </Div>
    </Zoom>
  );
}

export default NewsItem;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
