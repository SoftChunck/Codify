import React from 'react';
import { useState } from 'react';
import { Services,Included_desc } from '../../components';
import './WhatIsIncluded.css';
const WhatIsIncluded = () => {
    const [services,setservices] = useState([
        {imagePath:'assets/images/icons/customer-service-line.png',heading:'24/7 Support',body:'We have our experts available 24/7 on request to work on your projects and to maintain it.'},
        {imagePath:'assets/images/icons/newspaper-line.png',heading:'Documentation',body:'We do provide documentation wherever it is required and is requested by the client.'},
        {imagePath:'assets/images/icons/stack-fill.png',heading:'Future Updates',body:'Experts available for any future update in the design, content or the working of your app.'},
        {imagePath:'assets/images/icons/heart-2-line.png',heading:'Hybrid Apps',body:'We do develope hybrid apps using React Native, Flutter and Xamarin.'},
        {imagePath:'assets/images/icons/command-line.png',heading:'Cross-Platform',body:'Websites developed are always fully-responsive, and cross browser compatible.'},
        {imagePath:'assets/images/icons/group-line.png',heading:'User Friendly',body:'Apps and websites developed are always user-friendly and attractive in designs.'}
    ]);
    const [IncludedDesc,setIncludedDesc] = useState([
        {heading:'Happy Customers',value:'200+',desc:'Customer satisfaction is our first priority!'},
        {heading:'Employes',value:'15+',desc:'Long term support after completion of projects!'},
        {heading:'Weekly hours',value:'40+',desc:'We are flexible with working hours as well!'},
        {heading:'Completed Projects',value:'300+',desc:'Customer satisfaction is our first priority!'},
        {heading:'Internees',value:'30+',desc:'We also have paid internees enrolled in learning programs!'},
        {heading:'Customer Rating',value:'4.9/5',desc:'Customer satisfaction is our utmost priority!'}
    ]);
    return ( 
        <section className='Services my-5 p-5'>
            <div className='container text-center justify-content-center d-flex flex-column align-items-center'>
                    <p className='row subhead'>the package</p>
                    <h1 className='row'>What is Included?</h1>                    
                    <p className='fs-4 row mb-5 col-8'>We work on different latest techonologies in Web-Developement and Mobile applications development.</p>
                    <div className='row my-5 justify-content-center'> 
                        <div className='element' data-aos="slide-up"><Services service={services[0]}/></div>
                        <div className='element'><Services service={services[1]}/></div>
                        <div className='element' data-aos="slide-up"><Services service={services[2]}/></div>
                        <div className='element'><Services service={services[3]}/></div>
                        <div className='element' data-aos="slide-up"><Services service={services[4]}/></div>
                        <div className='element'><Services service={services[5]}/></div>
                    </div>     
                    <div className='container-md d-flex flex-row align-items-center justify-content-center row'>
                        <div className='d-flex flex-column text-end col-md-3 col-12'>
                            <Included_desc data = {IncludedDesc[0]}></Included_desc>
                            <Included_desc data = {IncludedDesc[1]}></Included_desc>
                            <Included_desc data = {IncludedDesc[2]}></Included_desc>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center col-md-6 col-12'>
                            <img src='assets/images/iphone-11.webp' className='iphone-img-include1' />
                            <img src='assets/images/iphone-12.webp' className='iphone-img-include2' data-aos="slide-up" />
                        </div>
                        <div className='d-flex flex-column text-start col-md-3 col-12'>
                            <Included_desc data = {IncludedDesc[3]}></Included_desc>
                            <Included_desc data = {IncludedDesc[4]}></Included_desc>
                            <Included_desc data = {IncludedDesc[5]}></Included_desc>
                        </div>
                    </div>     
            </div>
        </section>
     );
}
 
export default WhatIsIncluded;