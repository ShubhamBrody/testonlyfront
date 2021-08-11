/* eslint-disable import/no-anonymous-default-export */
import {Fragment} from 'react';
import links from '../Navbar/Navbar.initial';
import Navbar from '../Navbar/Navbar'
import logo from '../../resources/images/logo.png';
import Events from './Events';
import Footer from '../Footer/Footer';
import {Helmet} from 'react-helmet';

export default () => {
  return (
    <Fragment>
      <Helmet>
        <title>Events</title>
        <link rel="icon" href='/GYClogo.png' type="image/icon type"></link>
      </Helmet>
      <Navbar links={links} imgSrc={logo}/>
      <Events />
      <Footer />
    </Fragment>
  );
};
