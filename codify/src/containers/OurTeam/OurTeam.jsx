import React from 'react';
import { useState } from 'react';
import { TeamMembers } from '../../components';
import './OurTeam.css';
const OurTeam = () => {
    const [TeamMember,setTeamMembers] = useState([
        {image:'assets/images/team/usama-munir.webp',name:'Usama Munir',desc:'Senior Developer & CEO'},
        {image:'assets/images/team/huzaifa-munir.webp',name:'Huzaifa Munir',desc:'Senior Developer'},
        {image:'assets/images/team/zaid-munir.webp',name:'Zaid Munir',desc:'Senior Full-Stack Developer'},
        {image:'assets/images/team/umair-younas-2.webp',name:'Umair Younas',desc:'UI UX Designer'},
        {image:'assets/images/team/faizan.webp',name:'Faizan Ali',desc:'Front-End Developer'},
        {image:'assets/images/team/ali-hassan.webp',name:'Ali Hassan',desc:'React Native Developer'},
        {image:'assets/images/team/hamza.webp',name:'Hamza Tariq',desc:'Junior React Js Developer'},
        {image:'assets/images/team/haider.webp',name:'Haider Ali',desc:'Junior React Js Developer'}
    ])
    return ( 
        <div>
            <h1 className='text-center'>Our Team</h1>
            <div className='container'>
                <div className='row justify-content-center my-5 py-5'>
                    <TeamMembers data={TeamMember[0]}></TeamMembers>
                </div>
                <div className='row justify-content-center my-5 py-5'>
                    <TeamMembers data={TeamMember[1]}></TeamMembers>
                    <TeamMembers data={TeamMember[2]}></TeamMembers>
                </div>
                <div className='row justify-content-center my-5 py-5'>
                    <TeamMembers data={TeamMember[3]}></TeamMembers>
                    <TeamMembers data={TeamMember[4]}></TeamMembers>
                    <TeamMembers data={TeamMember[5]}></TeamMembers>                    
                    <TeamMembers data={TeamMember[6]}></TeamMembers>
                    <TeamMembers data={TeamMember[7]}></TeamMembers>
                </div>
            </div>
        </div>
     );
}
 
export default OurTeam;