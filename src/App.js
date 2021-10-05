import React from "react";
import "./App.css";
// import LeftSideBar from "./Component/Home/LeftSideBar";
import Navbar from "./Component/Navbar";
import Navbar2 from "./Component/Home/Navbar2";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultPage from "./Component/DefaultPage";
import LoginPage from "./Component/LoginPage";
import Modal from "./Component/Members/Modal";
import SignupPage from "./Component/SignupPage";
import Members from "./Component/Members/Members";
import UpdateUser from "./Component/Members/UpdateUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/DefaultPage">
          <DefaultPage />
        </Route>
        <Switch>
          <Route path="/SignupPage">
            <SignupPage />
          </Route>
          <Route path="/Home/Navbar2">
            <Navbar2 />
          </Route>
          <Route path="/Members">
            <Modal />

            <Members />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>{" "}
          <Route path="/AboutUs">
            <AboutUs />
          </Route>{" "}
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/AddUser"></Route>
          <Route path="/Members/UpdateUser">
            <UpdateUser />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
