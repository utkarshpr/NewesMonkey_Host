import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            NewsMonkey
          </Link>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link to="/topnews" className="nav-item nav-link">
                TopHeadLines
              </Link>
              <Link to="/business" className="nav-item nav-link">
                Business
              </Link>
              <Link to="/entertainment" className="nav-item nav-link">
                Entertainment
              </Link>

              <Link to="/health" className="nav-item nav-link">
                Health
              </Link>
              <Link to="/science" className="nav-item nav-link">
                Science
              </Link>
              <Link to="/sport" className="nav-item nav-link">
                Sport
              </Link>
              <Link to="/technology" className="nav-item nav-link">
                Technology
              </Link>
            </div>

            {/* <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link">Login</Link>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
