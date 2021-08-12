/* eslint-disable import/no-anonymous-default-export */
import { Fragment } from "react";
import Form from "./FormComponent/FormBooks";
import HeaderContent from "./HeaderComponent/Header";
import Navbar from "../../Navbar/Navbar";
import links from "../../Navbar/Navbar.initial";
import logo from "../../../resources/images/logo.png";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet";
export default () => {
  return (
    <Fragment>
      <Navbar links={links} imgSrc={logo} />
      <Helmet>
        <title>Mission Million Books</title>
        <link rel="icon" href="/GYClogo.png" type="image/icon type"></link>
      </Helmet>
      <HeaderContent />
      <Form />
      <Footer />
    </Fragment>
  );
};
