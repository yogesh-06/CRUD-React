import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

let SignUpSchema = yup.object().shape({
  firstName: yup.string().required("Name is a required field"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required().min(10),
  password: yup.string().required().min(3).max(10),
  confirmPassword: yup
    .string()
    .required()
    .min(3)
    .max(10)
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignupPage = () => {
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  const history = useHistory();

  // const { firstName, lastName, email, phone, password, confirmPassword } = user;

  // const handleChange = (e) => {
  //   console.log(e.target.value);

  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await axios.post("http://localhost:3003/users", user);
  //   history.push("Members");
  // };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          axios.post("http://localhost:3003/users", values);
          history.push("Members");
        }}
        validationSchema={SignUpSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
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
                    Go Now
                  </a>
                </p>
              </div>

              <div className="col-md-7 col-lg-6 ml-auto">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="input-group col-lg-6 ">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted"></i>
                      </span>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control bg-white border-left-0 border-md ${
                          errors.firstName ? "border-danger border-1" : ""
                        }`}
                      />
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control bg-white border-left-0 border-md ${
                          errors.firstName ? "border-danger border-1" : ""
                        }`}
                      />
                    </div>
                    {errors.firstName && (
                      <div className="text-warning">
                        {errors.firstName}{" "}
                        <i className="fa fa-exclamation-circle"></i>
                      </div>
                    )}
                    <div className="input-group col-lg-12 mt-4">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-envelope text-muted"></i>
                      </span>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control bg-white border-left-0 border-md ${
                          errors.firstName ? "border-danger border-1" : ""
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <div className=" text-warning">
                        {errors.email}{" "}
                        <i className="fa fa-exclamation-circle"></i>{" "}
                      </div>
                    )}
                    <div className="input-group col-lg-12 mt-4">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-phone-square text-muted"></i>
                      </span>
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
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength="11"
                        className={`form-control bg-white border-left-0 border-md ${
                          errors.firstName ? "border-danger border-1" : ""
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <div className=" text-warning">
                        {errors.phone}{" "}
                        <i className="fa fa-exclamation-circle"></i>{" "}
                      </div>
                    )}
                    {/* <div className="input-group col-lg-12 mt-4">
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
                    <div className="input-group col-lg-6 mt-4">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-lock text-muted"></i>
                      </span>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control bg-white border-left-0 border-md ${
                          errors.firstName ? "border-danger border-1" : ""
                        }`}
                      />
                    </div>
                    {errors.password && (
                      <div className=" text-warning">
                        {errors.password}{" "}
                        <i className="fa fa-exclamation-circle"></i>{" "}
                      </div>
                    )}
                    <div className="input-group col-lg-6 mt-4">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-lock text-muted"></i>
                      </span>
                      <input
                        id="confirmPassword"
                        type="Password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control bg-white border-left-0 border-md ${
                          errors.firstName ? "border-danger border-1" : ""
                        }`}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <div className=" text-warning">
                        {errors.confirmPassword}{" "}
                        <i className="fa fa-exclamation-circle"></i>{" "}
                      </div>
                    )}
                    <div className="form-group col-lg-12 mx-auto mt-4 text-end">
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
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center mt-2">
                      <div className="border-bottom w-100 ml-5"></div>
                      <span className="px-2   font-weight-bold">OR</span>
                      <div className="border-bottom w-100 mr-5"></div>
                    </div>
                    <div className="form-group col-lg-12 mx-auto ">
                      <div className="text-center w-100">
                        <p
                          className=" font-weight-bold mt-4"
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
                      <a
                        href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                        className="btn btn-primary btn-block py-2 btn-twitter ms-1"
                      >
                        <i className="fa fa-twitter mr-2"></i>
                        <span className="font-weight-bold">
                          {" "}
                          Continue with Twitter
                        </span>
                      </a>
                      <Link
                        to="/LoginPage"
                        className="btn btn-primary btn-block py-2  ms-1"
                      >
                        <i className="fa fa-envelope mr-2"></i>
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
