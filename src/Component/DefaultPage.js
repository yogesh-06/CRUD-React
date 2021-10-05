import React from "react";
import { Link } from "react-router-dom";

// import "./LoginForm.css";
// import img from "./Defaultimg.png";

const DefaultPage = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("https://wpforms.com/wp-content/uploads/2020/08/newsletter-signup-form.png")`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        {/* <img
          src="https://wpforms.com/wp-content/uploads/2020/08/newsletter-signup-form.png"
          className="w-100 "
          style={{
            height: "667px",
            position: "absolute",
            left: "0px",
            top: "0px",
            zIndex: "-1",
          }}
          alt=""
        /> */}
        <Link
          to="/SignupPage"
          className="btn btn-primary col-2 ms-5 position-absolute top-50 start-0 translate-middle-y fixed-top"
        >
          <span className="font-weight-bold"> Sign-up</span>
        </Link>
      </div>

      {/* <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light py-3">
          <div class="container">
            {" "}
            <a href="/" class="navbar-brand">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1571398888/Group_1514_tjekh3_zkts1c.svg"
                alt="logo"
                width="150"
              />
            </a>
          </div>
        </nav>
      </header> */}
    </>
  );
};
export default DefaultPage;
