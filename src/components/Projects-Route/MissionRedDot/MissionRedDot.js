/* eslint-disable import/no-anonymous-default-export */
import {Fragment} from 'react';
import Navbar from '../../Navbar/Navbar';
import links from '../../Navbar/Navbar.initial';
import logo from '../../../resources/images/logo.png';

export default () => {
    return (
        <Fragment>
            <Navbar links={links} imgSrc={logo}/>
        </Fragment>
    );
}