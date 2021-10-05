import React from "react";

const Modal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        // tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header py-1">
              <h5 className="modal-title ">Update user</h5>
            </div>
            <div className="modal-body">
              <form action="">
                Name:{" "}
                <input
                  className="border-top border-start border-end"
                  type="text"
                  name="userName"
                  placeholder="Update Name"
                  required="required"
                />{" "}
                <br />
                Mail-Id:{" "}
                <input
                  className="border-top border-start border-end"
                  type="text"
                  name="mailId"
                  placeholder="Update e-mail"
                  required="required"
                />
                <br />
                Phone:{" "}
                <input
                  className="border-top border-start border-end"
                  type="text"
                  name="phone"
                  placeholder="Update phone"
                  required="required"
                />
              </form>
            </div>
            <div className="modal-footer py-1">
              <button type="button" className="btn btn-primary btn-sm">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
