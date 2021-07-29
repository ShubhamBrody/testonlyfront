/* eslint-disable import/no-anonymous-default-export */

import { Fragment } from 'react';
import Information from './Information/Information';
import AboutUs from './AboutUs/AboutUs';

export default () => {
    return (
        <Fragment>
            <AboutUs/>
            <Information/>
        </Fragment>
    )
}