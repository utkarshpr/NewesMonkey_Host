import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import styled from "styled-components";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import LoadingBar from "react-top-loading-bar";
import { articles } from "./general";

function App() {
  const apikey = "a6f30bf16cc241dda6f2810d1c019a02";
  const [text, setText] = useState("Enable");
  const [state, setstate] = useState({
    background: "white",
    color: "black",
  });
  console.log("original", state);
  const handleColor = () => {
    if (state.background === "black") {
      setText("Enable");
      setstate({
        background: "white",
        color: "black",
      });
    } else {
      setText("Disable");
      setstate({
        background: "black",
        color: "white",
      });
    }
    console.log(state);
  };
  const [prg, setprg] = useState(0);
  const setProgress = (prg) => {
    setprg(prg);
  };

  return (
    <>
      <Router>
        <Container>
          <div className="App">
            <NavBar background={state.background} color={state.color} />
            <LoadingBar color="#f11946" progress={prg} />
            <Dark style={{ background: state.background }}>
              <DarkItems
                style={{ background: state.background, color: state.color }}
              >
                <div class="form-check form-switch" onClick={handleColor}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault">
                    {text} Dark Mode
                  </label>
                </div>
              </DarkItems>
            </Dark>

            <Switch>
              <Route exact path="/">
                <Home background={state.background} color={state.color} />
              </Route>
              <Route exact path="/topnews">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"gene"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/sport">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"sports"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/technology">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"tech"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="technology"
                />
              </Route>
              <Route exact path="/business">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"busi"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="business"
                />
              </Route>
              <Route exact path="/entertainment">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"en"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/general">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"gen"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="general"
                  articles={articles}
                />
              </Route>
              <Route exact path="/health">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"health"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/science">
                <News
                  apikey={apikey}
                  setProgress={setProgress}
                  key={"sci"}
                  background={state.background}
                  color={state.color}
                  country="in"
                  category="science"
                />
              </Route>
            </Switch>
          </div>
          <FooterBox>
            <Footer background={state.background} color={state.color} />
          </FooterBox>
        </Container>
      </Router>
    </>
  );
}

export default App;
const FooterBox = styled.div``;
const Container = styled.div`
  display: grid;

  width: 100%;
  height: 150%;
  margin: 0px;
`;
const Dark = styled.div`
  padding-top: 3.4rem;
  display: flex;
  justify-content: flex-end;

  align-items: right;
`;
const DarkItems = styled.div``;
