import React from 'react';
import { useState } from 'react';
import { Services } from '../../components';
import './OurServices.css';
const OurServices = () => {
    const [services,setservices] = useState([
        {imagePath:'assets/images/icons/responsive.png',heading:'Web Development',body:'Websites developed are always fully-responsive, and cross browser compatible.'},
        {imagePath:'assets/images/icons/brush-line.png',heading:'Graphic Designing',body:'Defining the requirements, visualizing and creating graphics including illustrations, logos, layouts and photos'},
        {imagePath:'assets/images/icons/wordpress.png',heading:'Wordpress Sites',body:'Full wordpress site development including custom plugins and website customizations.'},
        {imagePath:'assets/images/icons/iphone-reverse.png',heading:'IOS Apps',body:'IOS apps developement using Objective-C and Swift.'},
        {imagePath:'assets/images/icons/android.png',heading:'Android Apps',body:'Android apps development using Java and Kotlin.'},
        {imagePath:'assets/images/icons/hybrid.png',heading:'Hybrid Apps',body:'We do develope hybrid apps using React Native, Flutter and Xamarin.'},
        {imagePath:'assets/images/icons/seo.png',heading:'SEO',body:'SEO optimization such as met tags, backlinks, keywords research, boosting.'},
        {imagePath:'assets/images/icons/monitor.png',heading:'Desktop Softwares',body:'CAD, Billing, invoicing, VoIP softwares and Management Systems.'},
        {imagePath:'assets/images/icons/shopping-cart-fill.png',heading:'E-Commerce Services',body:'Online bussiness management services for stores.'},
        {imagePath:'assets/images/icons/monitor.png',heading:'Hosting',body:'Hosting to your websites on cheap rates.'}
    ])
    return ( 
        <section className='Services my-5 p-5'>
            <div className='container text-center justify-content-center d-flex flex-column align-items-center'>
                    <p className='row subhead'>the package</p>
                    <h1 className='row'>Our Services</h1>                    
                    <p className='fs-4 row mb-5 col-8'>We work on different latest techonologies in Web-Developement and Mobile applications development.</p>
                    
                    <div className='row mt-5 justify-content-center'> 
                        <div className='element' data-aos="slide-up"><Services service={services[0]}/></div>
                        <div className='element'><Services service={services[1]}/></div>
                        <div className='element' data-aos="slide-up"><Services service={services[2]}/></div>
                        <div className='element'><Services service={services[3]}/></div>
                        <div className='element' data-aos="slide-up"><Services service={services[4]}/></div>
                        <div className='element'><Services service={services[5]}/></div>
                        <div className='element' data-aos="slide-up"><Services service={services[6]}/></div>
                        <div className='element'><Services service={services[7]}/></div>
                        <div className='element' data-aos="slide-up"><Services service={services[8]}/></div>
                        <div className='element' data-aos="slide-up"><Services service={services[9]}/></div>
                    </div>          
            </div>
        </section>
     );
}
 
export default OurServices;