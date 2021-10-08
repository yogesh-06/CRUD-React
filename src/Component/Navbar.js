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

          <a className="navbar-brand" href="/">
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
            <form className="d-flex border-bottom border-warning px-1">
              <input
                className="form-control m-0 bg-transparent border-0 rounded-0 p-0  "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fa fa-search btn text-light" type="submit"></i>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
