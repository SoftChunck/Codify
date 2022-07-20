import React from 'react';
import './Services.css';
const Services = (props) => {
    return ( 
        <div className='col-md-4 mb-3 justify-content-between align-content-center' data-aos="slide-up">
            <img src={props.service.imagePath} className='mb-3 service-img' />
            <h1 className='h5'>{props.service.heading}</h1>
            <p className='fs-5 p-body'>{props.service.body}</p>
        </div>
     );
}
 
export default Services;