import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaLinkedinIn} from 'react-icons/fa';
import { FaMapMarked } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className='container'>
            <div className='p-5'>
                <img src='assets/images/logo.webp' className='footer-logo row pb-3' />
                <div className='row'>
                    <p className='col-md-3 col-12'>Get your Bussiness Ideas Implemented in latest techonologies!!</p>
                    <div className='col-md-2 col-12 d-flex flex-column'>
                        <a className='footer-a'>Apply for Job</a>
                        <a className='footer-a'>Apply for Internship</a>
                        <a className='footer-a'>Contact Us</a>
                    </div>
                    <div className='col-md-4 col-12 d-flex flex-column'>
                        <a className='footer-a'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> info@codify.pk</a>
                        <a className='footer-a'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +92-51-84 67 825</a>
                        <div className='d-flex flex-row justify-content-between col-2'>
                            <a className='footer-a'><FaFacebookF /></a>
                            <a className='footer-a'> <FaInstagram /></a>
                            <a className='footer-a'> <FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className='col-md-3 col-12 d-flex flex-row'>
                        <a className='footer-a pe-2'><FaMapMarked /></a>
                        <a className='footer-a'>Codify, First Floor, Midway Mall, Satellite Town, Rawalpindi, Punjab 46000</a>
                    </div>
                </div>
                <div className='d-flex justify-content-between flex-row align-items-end pt-4'>
                    <div className='d-flex flex-row justify-content-between align-items-center col-md-4'>
                        <p className='m-0'>Copyright © 2021 <a className='m-0 footer-a'>Codify ®</a></p>
                        <p className='m-0'>| Registered With</p>
                        <img src='assets/images/secp.png' className='footer-secp-img col-md-4 col-12'/>
                    </div>
                    <p>Codify (PVT) Limited</p>                    
                </div>
            </div>

        </div>
     );
}
 
export default Footer;