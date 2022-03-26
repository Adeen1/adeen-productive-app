import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  var username = window.localStorage.getItem("username");
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link to="/">
          <a className="navbar-brand ml-5" href="#">
            {username ? username : "Adeen."}
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-5">
            <li className="nav-item ml-3 mr-3">
              <a className="nav-link" href="#container-to">
                To-Do List <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ml-3 mr-3">
              <a className="nav-link" href="#pomodoro-container">
                Pomodoro Timer <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item ml-3 mr-3">
              <Link to="/SignUp">
                <a className="nav-link" href="#">
                  Sign Up<span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item ml-3 mr-3">
              <Link to="/Login">
                <a className="nav-link" href="#">
                  Log In<span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
