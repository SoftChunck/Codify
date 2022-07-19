import React from 'react';
import {Navbar} from '../../components';
import './Header.css';
const Header = () => {
    React.useEffect(()=>{
        let img_animate = document.querySelector('.mobile-img3');
        let img_1 = document.querySelector('.mobile-img1');
        let img_2 = document.querySelector('.mobile-img2');
        img_animate.addEventListener('click',()=>{
            img_1.setAttribute('style','transform: scale(75%,75%) translateX(60%) translateY(2%);');
            img_2.setAttribute('style','transform: scale(75%,75%) translateX(-60%) translateY(2%);');
        })
    })
    return (         
        <div>
            <Navbar></Navbar>
            <section className='header my-5'>
                <div className='container d-flex flex-column text-center align-items-center mb-5'>
                    <img src='assets/images/logo.webp' className='row'></img>
                    <p className='fs-4 row col-8 text-center mb-3'>Get your Bussiness Ideas implemented in latest technologies!</p>
                    <div className='d-flex flex-row justify-content-center'>                                        
                        <img src='assets/images/iphone-3.webp' className='mobile-img1'></img>
                        <img src='assets/images/iphone-2.webp' className='mobile-img3'></img>
                        <img src='assets/images/iphone-3.webp' className='mobile-img2'></img>
                    </div>
                </div>                
            </section>
        </div>
     );
}
 
export default Header;