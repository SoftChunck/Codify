import React from 'react';
import './Included_desc.css';
const Included_desc = (props) => {
    return ( 
        <div>
            <p className='fs-6 m-0 p-0 include-heading'>{props.data.heading}</p>
            <h1 className='display-3 m-0 p-0 include-value'>{props.data.value}</h1>
            <p className='include-desc'>{props.data.desc}</p>
        </div>
     );
}
 
export default Included_desc;