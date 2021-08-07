/* eslint-disable import/no-anonymous-default-export */

import { Fragment } from 'react';
import Information from './Information/Information';
import AboutUs from './AboutUs/AboutUs';
import links from "../Navbar/Navbar.initial";
import Navbar from "../Navbar/Navbar";
import logo from "../../resources/images/logo.png";
import Footer from '../Footer/Footer';
import Welcome from './WelcomeContent/WelcomeContent';

export default () => {
    return (
        <Fragment>
            <Navbar links={links} imgSrc={logo}/>
            <Welcome/>
            <AboutUs/>
            <Information/>
            <Footer/>
        </Fragment>
    )
}