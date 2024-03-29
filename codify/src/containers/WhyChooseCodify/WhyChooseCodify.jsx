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
          if((reacttop >= react_pos.top || reacttop==0) && (tx<=80 && tx>60.3))
          {
            tx = tx-0.3;
            image_1.setAttribute('style',`transform: translateX(${tx}%);`)
          }
          else if((reacttop <= react_pos.top)&&(tx>60 && tx<80)){
            tx = tx+0.3;
            image_1.setAttribute('style',`transform: translateX(${tx}%);`)    
          }
          reacttop = react_pos.top;          
        })
    })
    return ( 
        <div className='continer-md ms-5 p-5 row justify-content-around'>
            <div className='col-md-3'>
                <p>the fact</p>
                <h1 className='display-4'>Why Choose Codify?</h1>
                <h3 className='fs-5'>Why Choose Us!</h3>
                <button className='btn bg-warning btn-lg col-md-4 btn-watch fs-6'>Watch Our Video <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></button>
            </div>
            <div className='col-md-4 justify-content-end why-imgs'>                
                <img src='assets/images/iphone-3.webp' className='iphone-img-2 col-5'/>
                <img src='assets/images/iphone-2.webp' className='iphone-img-1 col-5'/>
            </div>
        </div>
     );
}
 
export default WhyChooseCodify;