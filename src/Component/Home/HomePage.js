import React from "react";
import Timeline from "./Timeline";

function HomePage({ text, setText }) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleSaveText = () => {};
  return (
    <>
      <div className="d-flex ">
        <textarea
          className="form-control mt-2 w-75"
          id="myBox"
          rows="8"
          cols=""
          onChange={handleOnChange}
          value={text}
        ></textarea>

        <div className="mt-3 ms-2 d-grid col-1 ">
          <button type="button" className="btn btn-primary mt-2">
            Copy Text
          </button>

          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={handleSaveText}
          >
            Paste Text
          </button>
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-success mt-2"
            onClick={handleSaveText}
          >
            Save Text
          </button>

          <br />
        </div>
      </div>
      <Timeline />
    </>
  );
}
export default HomePage;
