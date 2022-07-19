import React from 'react';
import {Navbar} from '../../components';
import './Header.css';
const Header = () => {
    React.useEffect(()=>{
        let s = 85;
        let tx = 65;
        let ty = 8;
        let reacttop = 0;
        window.addEventListener('scroll',()=>{
          let images_header = document.querySelector('.header-imgs');
          let image_1 = document.querySelector('.mobile-img1');
          let image_2 = document.querySelector('.mobile-img2');
          let react_pos = images_header.getBoundingClientRect();
          console.log(react_pos.top)
          if(reacttop > react_pos.top && tx<80 && ty>0 && tx>65 && ty>8)
          {
            ty = ty-0.1;
            tx = tx-0.3;
            image_1.setAttribute('style',`transform: scale(${s}%,${s}%) translateX(${tx}%) translateY(${ty}%);`)
            image_2.setAttribute('style',`transform: scale(${s}%,${s}%) translateX(${-tx}%) translateY(${ty}%);`)
          }
          else{
            ty = ty+0.1;
            tx = tx+0.3;
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
                    <img src='assets/images/logo.webp' className='row'></img>
                    <p className='fs-4 row col-8 text-center mb-3'>Get your Bussiness Ideas implemented in latest technologies!</p>
                    <div className='header-imgs d-flex flex-row'>
                        <img src='assets/images/iphone-3.webp' className='row mobile-img1'></img>
                        <img src='assets/images/iphone-2.webp' className='row mobile-img3'></img>
                        <img src='assets/images/iphone-3.webp' className='row mobile-img2'></img>
                    </div>
                </div>                
            </section>
        </div>
     );
}
 
export default Header;