/* eslint-disable import/no-anonymous-default-export */
import { Fragment } from "react";
import Navbar from "../../Navbar/Navbar";
import links from "../../Navbar/Navbar.initial";
import logo from "../../../resources/images/logo.png";
import textData from "../ProjectTextData";
import classes from "./MissionRedDot.module.css";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Fragment>
      <Helmet>
        <title>Project Red Dot</title>
        <link rel="icon" href="/GYClogo.png" type="image/icon type"></link>
      </Helmet>
      <Navbar links={links} imgSrc={logo} />
      <div className={classes.header}>
        <img src={textData.missionreddot.imgSrc} alt="MISSION RED DOT" />
        {textData.missionreddot.text.map((para) => (
          <p>{para}</p>
        ))}
      </div>
      <div className={classes.videobackground}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tjPZS6Icjsk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </Fragment>
  );
};
