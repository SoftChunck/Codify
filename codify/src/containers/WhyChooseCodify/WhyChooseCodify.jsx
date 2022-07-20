import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseCodify.css';

const WhyChooseCodify = () => {
    return ( 
        <div className='ms-5 p-5 row justify-content-between g-4'>
            <div className='col-md-6'>
                <p>the fact</p>
                <h1 className='display-4'>Why Choose Codify?</h1>
                <h3 className='fs-5'>Why Choose Us!</h3>
                <button className='btn bg-warning btn-lg col-md-4 btn-watch fs-6'>Watch Our Video <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></button>
            </div>
            <div className='col-md-6'>
                <img src='assets/images/iphone-3.webp' className='iphone-img-2 col-5' data-aos="slide-left"/>
                <img src='assets/images/iphone-2.webp' className='iphone-img col-5' />
            </div>
        </div>
     );
}
 
export default WhyChooseCodify;