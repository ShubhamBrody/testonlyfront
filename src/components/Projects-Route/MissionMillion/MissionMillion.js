/* eslint-disable import/no-anonymous-default-export */
import {Fragment} from 'react';
import Form from './FormComponent/FormBooks';
import HeaderContent from './HeaderComponent/Header';
import Navbar from '../../Navbar/Navbar';
import links from '../../Navbar/Navbar.initial';
import logo from '../../../resources/images/logo.png';
import Footer from '../../Footer/Footer';

export default () => {
    return (
        <Fragment>
            <Navbar links={links} imgSrc={logo}/>
            <HeaderContent />
            <Form />
            <Footer />
        </Fragment>
    );
}