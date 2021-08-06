/* eslint-disable import/no-anonymous-default-export */
import {Fragment} from 'react';
import links from '../Navbar/Navbar.initial';
import Navbar from '../Navbar/Navbar'
import MissionMillions from './MissionMillion/MissionMillion';
import logo from '../../resources/images/logo.png';

export default () => {
  return (
    <Fragment>
      <Navbar links={links} imgSrc={logo}/>
      <MissionMillions />
      <p>I am projects page</p>
    </Fragment>
  );
};