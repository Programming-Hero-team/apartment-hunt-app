import React from 'react';
import './Footer.scss'
import { FaFacebookSquare,FaInstagramSquare,FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import {BiCopyright} from 'react-icons/bi';
const Footer = () => {
    return (
        <div  className="footer-container" id="contact">
            <br/>
            <br/>
            <br/>
            <br/>
            <div  className="row ml-5" >
            <div className="col-md-4">
                <p><strong>H#340(4th Floor),Road #24</strong></p>
                <p><strong>New DOHS, Mohakhali,Dhaka,Bangladesh</strong></p>
                <p><strong>Phone:015xxxxxxxx</strong></p>
                <p><strong>E-mail:info@company.com</strong></p>
            </div>
            <div className="col-md-2">
                <h5 className="mb-3"><strong>Company</strong></h5>
                <p>About</p>
                <p>Site Map</p>
                <p>Support Center</p>
                <p>Terms Conditions</p>
                <p>Submit Listing</p>
            </div>
            <div className="col-md-2">
            <h6 className="mb-2">Quick Links</h6>
                <p>Quick Links</p>
                <p>Rentals</p>
                <p>Sales</p>
                <p>Contact</p>
                <p>Terms Conditions</p>
                <p>Our blog</p>
            </div>
            <div className="col-md-4">
            <h6 className="mb-2">About Us</h6>
                <p>We are the top real estate <br/> agency in Sydney, with agents <br/> available to answer any <br/> question 24/7</p>
                <div className="social-network-container d-flex">
                <a href="http://facebook.com/md.muktarulkhanakash" target="_blank"><FaFacebookSquare size="2rem" className="mr-3" /></a>
                <a href=""><FaInstagramSquare  size="2rem" className="mr-3" target="_blank"/></a>
                <a href="https://www.linkedin.com/in/muktarul-khan-akash-r/" target="_blank"><FaLinkedinIn  size="2rem" className="mr-3" /></a>
                <a href="http://youtube.com"> <FaYoutube  size="2rem" className="mr-3" target="_blank"/></a>
                </div>
            </div>
            </div>

                <div className="copy-right">
                    <footer>
                        <p><small><BiCopyright/> Copyright 2020. All rights reserved.</small></p>
                    </footer>
                </div>
            </div>
       
    );
};

export default Footer;