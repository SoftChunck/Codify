import React from 'react';
import './TeamMembers.css';
const TeamMembers = (props) => {
    return ( 
        <dvi>
            <div className=''>               
                <img src='assets/images/team/team-shape.png' className='team-img'></img>            
                <img src={props.data.image} className='rounded-circle team-img'></img>
            </div>
            <h1 className='fs-3'>{props.data.name}</h1>
            <p>{props.data.desc}</p>
        </dvi>
     );
}
 
export default TeamMembers;