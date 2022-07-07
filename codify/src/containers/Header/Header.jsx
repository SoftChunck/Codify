import React from 'react';
import {Navbar} from '../../components';
import './Header.css';
const Header = () => {
    return (         
        <div>
            <Navbar></Navbar>
            <section className='header mt-5'>
                <div className='container d-flex flex-column text-center align-items-center mb-5'>
                    <img src='assets/images/logo.webp' className='row'></img>
                    <p className='fs-4 row col-8 text-center mb-3'>Get your Bussiness Ideas implemented in latest technologies!</p>
                    <img src='assets/images/iphone-2.webp' className='row mobile-img1'></img>
                    <img src='assets/images/iphone-3.webp' className='row mobile-img2'></img>
                    <img src='assets/images/iphone-3.webp' className='row mobile-img2'></img>
                </div>                
            </section>
        </div>
     );
}
 
export default Header;