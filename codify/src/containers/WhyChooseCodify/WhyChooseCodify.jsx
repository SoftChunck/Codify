import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseCodify.css';

const WhyChooseCodify = () => {
    return ( 
        <div className='container p-5 d-flex flex-row justify-content-between'>
            <div className=''>
                <p>the fact</p>
                <h1 className='display-3'>Why Choose Codify?</h1>
                <h3 className='fs-5'>Why Choose Us!</h3>
                <button className='btn bg-warning btn-lg watch-btn'>Watch Our Video<FontAwesomeIcon icon={faPlay} className='ms-3 bg-warning play-icon' /></button>
            </div>
            <div className=''>
                <img src='assets/images/iphone-3.webp' className='iphone-img' />
            </div>
        </div>
     );
}
 
export default WhyChooseCodify;