import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import classes from './Footer.module.css';
import { FaLinkedin } from 'react-icons/fa';


class Footer extends React.Component {
    render() {
        return <div>
            <div className={classes.bg}>
                <p className={classes.contact}> CONTACT US </p>
                    <div className="row">
                        <div className="col-md-3 col-2" style={{ marginRight: '6.5%' }}></div>
                        <div className="col-md-1 col-1.6">
                            <a href="https://www.facebook.com/geolifeyouthclub/" target="_blank" rel="noreferrer" className={classes.fb} ><FaFacebookSquare /></a>
                        </div>
                        <div className="col-md-1 col-1.6">
                            <a href="https://www.instagram.com/geolifeyouthclub/" target="_blank" rel="noreferrer" className={classes.insta}><FaInstagram /></a>
                        </div>
                        <div className="col-md-1 col-1.6">
                            <a href="https://www.youtube.com/channel/UCdiFM3sTqJ45w4czkmK-tiA" target="_blank" rel="noreferrer" className={classes.youtube}><FaYoutube /></a>
                        </div>
                        <div className="col-md-1 col-1.6">
                            <a href="https://twitter.com/GYC_mumbai?s=08" target="_blank" rel="noreferrer" className={classes.twitter}><FaTwitter /></a>
                        </div>
                        <div className="col-md-1 col-1.6">
                            <a href="https://www.linkedin.com/company/geolife-youth-club/" target="_blank" rel="noreferrer" className={classes.linkedin}><FaLinkedin /></a>
                         </div>   
                        <div className="col-md-3 col-2" style={{padding: '0'}}></div>
                    </div>
                <p className={classes.number}> Whatsapp: +91 9136091369 </p>
                <div className={classes.c1}> 
                    <span className={classes.copyright}>Copyright @ 2021 Geolife Youth Club | </span>
                    <span  className={classes.by}>Designed by Bugata Abhiram</span>
                </div>
            </div>
        </div>
    }
}
export default Footer;