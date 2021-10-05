import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        onSubmit={(values) => {
          console.log("Logging in", values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <div className="container">
            <div className="row py-5 mt-3 align-items-center">
              <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                  alt=""
                  className="img-fluid mb-3 d-none d-md-block"
                />
                <h1>Create an Account</h1>
                <p className="font-italic text-muted mb-0"></p>
                <p className="font-italic text">
                  Snippet By {"WEOTO TECHLABS "}
                  <a href="https://weoto.in/home" className="text-muted">
                    <u> Go now..</u>
                  </a>
                </p>
              </div>

              <div className="col-md-7 col-lg-6 ml-auto">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-group col-lg-6 mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                          <i className="fa fa-user text-muted"></i>
                        </span>
                      </div>
                      <input
                        id="firstName"
                        type="text"
                        name="firstname"
                        required="Required"
                        placeholder="First Name"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control bg-white border-left-0 border-md"
                      />
                      <input
                        id="lastName"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control bg-white border-left-0 border-md"
                      />
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                          <i className="fa fa-envelope text-muted"></i>
                        </span>
                      </div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control bg-white border-left-0 border-md"
                      />
                    </div>
                    <div className="input-group col-lg-12 mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                          <i className="fa fa-phone-square text-muted"></i>
                        </span>
                      </div>
                      <select
                        id="countryCode"
                        name="countryCode"
                        style={{ maxWidth: "80px" }}
                        className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                      >
                        <option value="">+91</option>
                        <option value="">+10</option>
                        <option value="">+15</option>
                        <option value="">+18</option>
                      </select>
                      <input
                        id="phoneNumber"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control bg-white border-md border-left-0 pl-3"
                      />
                    </div>
                    {/* <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-black-tie text-muted"></i>
                    </span>
                  </div>

                  <select
                    id="job"
                    name="jobtitle"
                    className="form-control custom-select bg-white border-left-0 border-md"
                  >
                    <option value="">Choose your job</option>
                    <option value="">Designer</option>
                    <option value="">Developer</option>
                    <option value="">Manager</option>
                    <option value="">Accountant</option>
                  </select>
                </div> */}
                    <div className="input-group col-lg-6 mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                          <i className="fa fa-lock text-muted"></i>
                        </span>
                      </div>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control bg-white border-left-0 border-md"
                      />
                    </div>
                    <div className="input-group col-lg-6 mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                          <i className="fa fa-lock text-muted"></i>
                        </span>
                      </div>
                      <input
                        id="confirmpassword"
                        type="Password"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control bg-white border-left-0 border-md"
                      />
                    </div>
                    <div className="form-group col-lg-12 mx-auto mb-0 text-end">
                      <button
                        // href="/"
                        // onClick={handleSubmit}
                        // disabled={isSubmitting}
                        className="btn btn-sm btn-danger btn-block py-2"
                      >
                        <span className="font-weight-bold">
                          Create your account
                        </span>
                      </button>
                    </div>
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center mt-4">
                      <div className="border-bottom w-100 ml-5"></div>
                      <span className="px-2   font-weight-bold">OR</span>
                      <div className="border-bottom w-100 mr-5"></div>
                    </div>

                    <div className="form-group col-lg-12 mx-auto ">
                      <div className="text-center w-100">
                        <p
                          className=" font-weight-bold mb-4"
                          style={{ color: "white" }}
                        >
                          Already Registered? Then Log-In Here..!
                        </p>
                      </div>
                      <a
                        href="https://en-gb.facebook.com/login/"
                        className="btn btn-primary btn-block py-2 btn-facebook"
                      >
                        <i className="fa fa-facebook-f mr-2"></i>
                        <span className="font-weight-bold">
                          {" "}
                          Continue with Facebook
                        </span>
                      </a>
                      <Link
                        to="/"
                        className="btn btn-primary btn-block py-2 btn-twitter ms-1"
                      >
                        <i className="fa fa-twitter mr-2"></i>
                        <span className="font-weight-bold">
                          {" "}
                          Continue with Twitter
                        </span>
                      </Link>
                      <Link
                        to="/LoginPage"
                        className="btn btn-primary btn-block py-2  ms-1"
                      >
                        <i className="fas fa-envelope mr-2"></i>
                        <span className="font-weight-bold"> With E-mail</span>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignupPage;
