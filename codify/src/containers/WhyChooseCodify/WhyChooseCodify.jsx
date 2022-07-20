import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseCodify.css';

const WhyChooseCodify = () => {
    React.useEffect(()=>{
        let tx = 80;
        let reacttop = 0;
        window.addEventListener('scroll',()=>{            
          let images_header = document.querySelector('.why-imgs');
          let image_1 = document.querySelector('.iphone-img-2');
          let react_pos = images_header.getBoundingClientRect();
          if(tx < 60)
            {
                tx= 60;
            }
          if((reacttop >= react_pos.top || reacttop==0) && (tx<=800 && tx>60.5))
          {
            tx = tx-0.5;
            image_1.setAttribute('style',`translateX(${tx}%);`)
          }
          else if((reacttop <= react_pos.top)(tx>5 && tx<100)){
            tx = tx+0.5;
            image_1.setAttribute('style',`translateX(${tx}%);`)    
          }
          reacttop = react_pos.top;          
        })
    })
    return ( 
        <div className='ms-5 p-5 row justify-content-between g-4'>
            <div className='col-md-6'>
                <p>the fact</p>
                <h1 className='display-4'>Why Choose Codify?</h1>
                <h3 className='fs-5'>Why Choose Us!</h3>
                <button className='btn bg-warning btn-lg col-md-4 btn-watch fs-6'>Watch Our Video <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></button>
            </div>
            <div className='col-md-6 justify-content-end d-flex flex-row why-imgs'>                
                <img src='assets/images/iphone-3.webp' className='iphone-img-2 col-5'/>
                <img src='assets/images/iphone-2.webp' className='iphone-img-1 col-5'/>
            </div>
        </div>
     );
}
 
export default WhyChooseCodify;