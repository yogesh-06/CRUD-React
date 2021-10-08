import React, { useState } from "react";
import HomePage from "./HomePage";

const Navbar2 = () => {
  const [text, setText] = useState("Enter Text here");

  const handleUpCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  return (
    <>
      <div className="row">
        <div>
          <div
            className=" navbar navbarexpand-lg border-bottom"
            style={{ background: "rgb(0 79 255 / 34%) " }}
          >
            <div className="container-fluid">
              <select
                className="form-select form-select-sm me-1"
                style={{ width: "150px" }}
                aria-label=".form-select-sm example"
              >
                <option value="0">Font-family</option>
                <option value="1">Sans</option>
                <option value="2">Sans-Serif</option>
                <option value="3">Serif</option>
                <option value="3">Verdana</option>
                <option value="3">Arial</option>
                <option value="3">Free-Sans</option>
                <option value="3">Compact</option>
                <option value="3">Courier</option>
              </select>
              <select
                className="form-select form-select-sm p-1 me-1 "
                style={{ width: "70px" }}
                aria-label=".form-select-sm example"
              >
                <option value="0">Size</option>
                <option value="1">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="24">24</option>
                <option value="26">26</option>
                <option value="28">28</option>
                <option value="30">30</option>
                <option value="32">32</option>
                <option value="34">34</option>
                <option value="36">36</option>
                <option value="38">38</option>
                <option value="40">40</option>
              </select>

              <button
                type="button"
                className="btn btn-outline-light col-2 ms-auto"
              >
                Sign-Up
              </button>
            </div>

            <div
              className="btn-group ms-4 mt-1"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-light py-0">
                <b>B</b>
              </button>
              <button type="button" className="btn btn-outline-light py-0">
                <i>I</i>
              </button>
              <button type="button" className="btn btn-outline-light py-0">
                <u>U</u>
              </button>

              <button
                type="button"
                className="btn btn-outline-light py-0 ms-2"
                onClick={handleUpCase}
              >
                A
              </button>
              <button
                type="button"
                className="btn btn-outline-light py-0 "
                onClick={handleLowerCase}
                style={{ fontSize: "18px" }}
              >
                a
              </button>
            </div>
          </div>

          {/* <h1 className="my-2">Enter text to anylize below!</h1> */}

          <HomePage text={text} setText={setText} />
        </div>
      </div>
    </>
  );
};

export default Navbar2;
