import React from 'react';
import './TeamMembers.css';
const TeamMembers = (props) => {
    return ( 
        <div className='col-7 col-md-4 col-lg-2 d-flex justify-content-center flex-column text-center '>
            <div className='team-member'>               
                <img src='assets/images/team/team-shape.png' className='team-img'></img>            
                <img src={props.data.image} className='rounded-circle member-img'></img>
            </div>
            <h1 className='fs-5 m-0 p-0'>{props.data.name}</h1>
            <p className='Pdesc m-0 p-0'>{props.data.desc}</p>
        </div>
     );
}
 
export default TeamMembers;