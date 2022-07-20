import React from 'react';
import { useState } from 'react';
import {motion} from 'framer-motion';
import { CodifyDescription } from '../../components';
import './WhatIsCodify.css';
const WhatIsCodify = () => {
    const [codify_des,setCodify_des] = useState([
        {heading:'Analysis',body:'Conducted by the senior team members with inputs from all the stakeholders.'},
        {heading:'Planning',body:'Determination of cost and resources required for implementing the analyzed requirements.'},
        {heading:'Designing',body:'Turning the specification into multiple design approaches for the final development.'},
        {heading:'Development',body:'Quality development according to the proposed design and techonologies.'},
        {heading:'Testing',body:'White Box and Black Box testing after the development.'},
        {heading:'Deployment',body:'Final deployment after fixing of all the bugs and errors.'}
    ])
    return ( 
        <section className='WhatIsCodify my-5'>
            <div className='container text-center justify-content-center d-flex flex-column align-items-center'>
                    <p className='row subhead'>the nische</p>
                    <h1 className='row'>What is Codify?</h1>                    
                    <p className='fs-5 row mb-5 col-md-8'>Codify started its journey in 2019 with remotely working employees. Soon it became one of the trusted IT company for its quality work!</p>
                    <div className='row mt-5 justify-content-center'>
                        <CodifyDescription data ={codify_des[0] } />
                        <CodifyDescription data ={codify_des[1]} />
                        <CodifyDescription data ={codify_des[2]} />
                    </div> 
                    <div className='row mt-5 justify-content-center'>
                        <CodifyDescription data ={codify_des[3]} />
                        <CodifyDescription data ={codify_des[4]} />
                        <CodifyDescription data ={codify_des[5]} />
                    </div>
            </div>
        </section>
     );
}
 
export default WhatIsCodify;