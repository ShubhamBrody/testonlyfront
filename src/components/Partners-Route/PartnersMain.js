/* eslint-disable import/no-anonymous-default-export */
import {Fragment} from 'react';
import links from '../Navbar/Navbar.initial';
import Navbar from '../Navbar/Navbar'
import logo from '../../resources/images/logo.png';
import Partnercomponent from './PartnersNew';
import Footer from '../Footer/Footer';
import {Helmet} from 'react-helmet';

export default () => {
  return (
    <Fragment>
      <Helmet>
        <title>Partners</title>
        <link rel="icon" href="/GYClogo.png" type="image/icon type"></link>
      </Helmet>
      <Navbar links={links} imgSrc={logo}/>
      <Partnercomponent />
      <Footer />
    </Fragment>
  );
};