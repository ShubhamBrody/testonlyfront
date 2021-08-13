/* eslint-disable import/no-anonymous-default-export */
import links from "../Navbar/Navbar.initial";
import Navbar from "../Navbar/Navbar";
import logo from "../../resources/images/logo.png";
import classes from "./SignIn.module.css";
import Form from "./FormSignIn";
import ForgotPass from "./ForgotPass";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default () => {
  const [isForgotPass, setIsForgotPass] = useState(false);

  const forgotPassword = (val) => {
    setIsForgotPass(val);
  };

  return (
    <div className={classes.background}>
      <Helmet>
        <title>Sign In [ADMIN-ONLY]</title>
        <link rel="icon" href='GYClogo.png' type="image/icon type"></link>
      </Helmet>
      <Navbar links={links} imgSrc={logo} />
      <div className={classes.warning}>
        <h4 style={{fontSize: '1.125rem'}}>The Sign-In option is only for the Admin of the website.</h4>
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
