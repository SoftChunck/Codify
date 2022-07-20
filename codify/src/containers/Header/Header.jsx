import React from 'react';
import {Navbar} from '../../components';
import './Header.css';
const Header = () => {
    React.useEffect(()=>{
        let s = 85;
        let tx = 100;
        let ty = 8;
        let reacttop = 0;
        window.addEventListener('scroll',()=>{
          let images_header = document.querySelector('.header-imgs');
          let image_1 = document.querySelector('.mobile-img1');
          let image_2 = document.querySelector('.mobile-img2');
          let react_pos = images_header.getBoundingClientRect();
          if(tx < 50 || ty<2)
            {
                tx= 50;
                ty =2;
            }
          if((reacttop >= react_pos.top || reacttop==0) && (ty<=8 && ty>2.2) && (tx<=100 && tx>51))
          {
            ty = ty-0.2;
            tx = tx-1;
            image_1.setAttribute('style',`transform: scale(${s}%,${s}%) translateX(${tx}%) translateY(${ty}%);`)
            image_2.setAttribute('style',`transform: scale(${s}%,${s}%) translateX(${-tx}%) translateY(${ty}%);`)
          }
          else if((reacttop <= react_pos.top) && (ty>2 && ty<8) && (tx>5 && tx<100)){
            ty = ty+0.2;
            tx = tx+1;
            image_1.setAttribute('style',`transform: scale(${s}%,${s}%) translateX(${tx}%) translateY(${ty}%);`)
            image_2.setAttribute('style',`transform: scale(${s}%,${s}%) translateX(${-tx}%) translateY(${ty}%);`)     
          }
          reacttop = react_pos.top;          
        })
    })
    return (         
        <div>
            <Navbar></Navbar>
            <section className='header my-5'>
                <div className='container d-flex flex-column text-center align-items-center mb-5'>
                    <img src='assets/images/logo.webp' className='col-9'></img>
                    <p className='fs-5 row col-8 text-center mb-3'>Get your Bussiness Ideas implemented in latest technologies!</p>
                    <div className='row justify-content-center header-imgs'>                                        
                        <img src='assets/images/iphone-3.webp' className='col-4 mobile-img1' data-aos="shift-left"></img>
                        <img src='assets/images/iphone-2.webp' className='col-4 mobile-img3'></img>
                        <img src='assets/images/iphone-3.webp' className='col-4 mobile-img2' data-aos="shift-right"></img>
                    </div>
                </div>                
            </section>
        </div>
     );
}
 
export default Header;