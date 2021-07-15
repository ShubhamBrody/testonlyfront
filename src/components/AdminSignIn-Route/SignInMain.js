/* eslint-disable import/no-anonymous-default-export */
import {Fragment} from 'react';
import links from '../Navbar/Navbar.initial';
import Navbar from '../Navbar/Navbar'
import logo from '../../resources/images/logo.png';

export default () => {
  return (
    <Fragment>
      <Navbar links={links} imgSrc={logo}/>
      <p>I am sign In page</p>
    </Fragment>
  );
};
