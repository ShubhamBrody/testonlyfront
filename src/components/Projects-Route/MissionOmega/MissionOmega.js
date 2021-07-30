/* eslint-disable import/no-anonymous-default-export */
import {Fragment} from 'react';
import HeaderContent from './HeaderComponent/Header';
import MiddleComponent from './MiddleComponent/MiddleComponent';
import BottomComponent from './BottomComponents/BottomComponents';
import Navbar from '../../Navbar/Navbar';
import links from '../../Navbar/Navbar.initial';
import logo from '../../../resources/images/logo.png';

export default () => {
    return (
        <Fragment>
            <Navbar links={links} imgSrc={logo}/>
            <HeaderContent />
            <MiddleComponent />
            <BottomComponent />
        </Fragment>
    );
}