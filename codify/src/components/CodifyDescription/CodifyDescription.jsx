import React from 'react';
import './CodifyDescription.css';
const CodifyDescription = (props) => {
    return ( 
        <div className='col-10 col-md-4 col-lg-4 mb-3'>
            <h1 className='h5'>{props.data.heading}</h1>
            <p className='fs-5 p-body'>{props.data.body}</p>
        </div>
     );
}
export default CodifyDescription;