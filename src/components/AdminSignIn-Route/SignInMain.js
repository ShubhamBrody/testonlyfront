/* eslint-disable import/no-anonymous-default-export */
import links from "../Navbar/Navbar.initial";
import Navbar from "../Navbar/Navbar";
import logo from "../../resources/images/logo.png";
import classes from "./SignIn.module.css";
import Form from "./FormSignIn";
import ForgotPass from "./ForgotPass";
import { useState } from "react";

export default () => {
  const [isForgotPass, setIsForgotPass] = useState(false);

  const forgotPassword = (val) => {
    setIsForgotPass(val);
  };

  return (
    <div className={classes.background}>
      <Navbar links={links} imgSrc={logo} />
      <div className={classes.warning}>
        <h4>The Sign-In option is only for the Admin of the website.</h4>
      </div>
      <div className={classes.signInContainer}>
        {!isForgotPass ? (
          <Form wrongCreds={forgotPassword} />
        ) : (
          <ForgotPass wrongCreds={forgotPassword} />
        )}
      </div>
    </div>
  );
};
