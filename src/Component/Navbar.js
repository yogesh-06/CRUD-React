import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* 1st Navbar */}
      <nav
        className="navbar navbar-expand-lg  navbar-light   sticky-top "
        style={{ opacity: "1" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="/DefaultPage">
            WEOTO
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/Home/Navbar2"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Members">
                  Members
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">
                  Contact
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  About Us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 bg-transparent border-0 border border-warning border-bottom rounded-0 py-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
