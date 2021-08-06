/* eslint-disable import/no-anonymous-default-export */

import { Fragment } from 'react';
import Information from './Information/Information';
import AboutUs from './AboutUs/AboutUs';
import links from "../Navbar/Navbar.initial";
import Navbar from "../Navbar/Navbar";
import logo from "../../resources/images/logo.png";
import Footer from '../Footer/Footer';

export default () => {
    return (
        <Fragment>
            <Navbar links={links} imgSrc={logo}/>
            <AboutUs/>
            <Information/>
            <Footer />
        </Fragment>
    )
}