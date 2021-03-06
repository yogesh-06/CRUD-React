import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
// import { useHistory } from "react-router";
import * as yup from "yup";

let LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(3).max(10),
});

const LoginPage = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log("Logging in", values);
        }}
        validationSchema={LoginSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <div className="container">
            <div className="row py-5 mt-4 align-items-center">
              <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                  alt=""
                  className="img-fluid mb-3 d-none d-md-block"
                />

                <h1>Welcome Once Again</h1>
                <p className="font-italic text-muted mb-0"></p>
                <p className="font-italic text">
                  Snippet By {"WEOTO TECHLABS  "}
                  <a href="https://weoto.in/home" className="text-muted">
                    <u> Go now..</u>
                  </a>
                </p>
              </div>

              <div className="col-md-7 col-lg-6 ml-auto">
                <form onSubmit={handleSubmit}>
                  <div className="row">
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
                          errors.email ? "border-danger border-2" : ""
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <div className=" text-warning">
                        {errors.email}
                        <i class="fa fa-exclamation-circle"></i>
                      </div>
                    )}

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
                          errors.password ? "border-danger border-2" : ""
                        }`}
                      />
                    </div>
                    {errors.password && (
                      <div className=" text-warning">
                        {errors.password}
                        <i class="fa fa-exclamation-circle"></i>
                      </div>
                    )}

                    <div className="form-group col-lg-12 mx-auto mt-4 text-end">
                      <button
                        // onClick={handleSubmit}
                        // disabled={isSubmitting}
                        type="submit"
                        className="btn btn-sm btn-danger btn-block py-2"
                      >
                        <span className="font-weight-bold">
                          Log-in your account
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
                          Not Registered Yet? Then Sign-up Here..!
                        </p>
                      </div>
                      <Link
                        to="/"
                        className="btn btn-primary btn-block py-2 btn-facebook"
                      >
                        <i className="fa fa-facebook-f mr-2"></i>
                        <span className="font-weight-bold">
                          {" "}
                          Continue with Facebook
                        </span>
                      </Link>
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
                        to="/SignupPage"
                        className="btn btn-primary btn-block py-2 btn-twitter ms-1"
                      >
                        <i className="fa   fa-envelope mr-2"></i>
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
export default LoginPage;
