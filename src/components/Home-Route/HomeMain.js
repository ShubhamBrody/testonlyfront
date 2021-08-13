/* eslint-disable import/no-anonymous-default-export */

import { Fragment } from "react";
import Information from "./Information/Information";
import AboutUs from "./AboutUs/AboutUs";
import links from "../Navbar/Navbar.initial";
import Navbar from "../Navbar/Navbar";
import logo from "../../resources/images/logo.png";
import Footer from "../Footer/Footer";
import Welcome from "./WelcomeContent/WelcomeContent";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Fragment>
      <Helmet>
        <title>Welcome to Geo Youth Club</title>
        <link rel="icon" href="/GYClogo.png" type="image/icon type"></link>
      </Helmet>
      <Navbar links={links} imgSrc={logo} />
      <Welcome />
      <AboutUs />
      <Information />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};
