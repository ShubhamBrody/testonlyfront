import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import classes from './Footer.module.css';

class Footer extends React.Component {
    render() {
        return <div className="container-fluid">
            <div className={classes.bg}>
                <p className={classes.contact}> CONTACT US </p>
                    <div className="row">
                        <div className="col-md-4 col-2"></div>
                        <div className="col-md-1 col-2">
                            <div className={classes.fb} ><FaFacebookSquare /></div>
                        </div>
                        <div className="col-md-1 col-2">
                            <div className={classes.insta}><FaInstagram /></div>
                        </div>
                        <div className="col-md-1 col-2">
                            <div className={classes.youtube}><FaYoutube /></div>
                        </div>
                        <div className="col-md-1 col-2">
                            <div className={classes.twitter}><FaTwitter /></div>
                        </div>
                        <div className="col-md-4 col-2"></div>
                    </div>
                <p className={classes.number}> Whatsapp:+91 9136091369 </p>
                <div className={classes.c1}> 
                    <span className={classes.copyright}>Copyright @ 2021 Geolife Youth Club |</span>
                    <span  className={classes.by}>Designed by Bugata Abhiram</span>
                </div>
            </div>
        </div>
    }
}
export default Footer;