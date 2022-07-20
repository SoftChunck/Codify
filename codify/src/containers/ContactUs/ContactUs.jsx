import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';
const ContactUs = () => {
    return ( 
        <div className='contact-us-section justify-content-center d-flex'>
           <div className='content-contact container mx-5 p-5'>
                <p className='m-0 p-0'>contact now</p>
                <h1 className='p-0 mx-0 mb-5 mt-2'>Hurry up, get your quotation!</h1>
                <form className='col-lg-8'>
                    <input type="text" className='input-filed p-3 mx-0 my-2' placeholder='Name' />
                    <input type="text" className='input-filed p-3 mx-0 my-2' placeholder='Email' />
                    <input type="text" className='input-filed p-3 mx-0 my-2' placeholder='Cell.No' />
                    <textarea  className='input-filed p-3 mx-0 my-2' placeholder='What you want to ask..' rows={10}></textarea>
                </form>
                <button className='btn bg-warning btn-lg watch-btn mt-3'>Contact Now<FontAwesomeIcon icon={faCheckDouble} className='ms-3 bg-warning play-icon' /></button>
                <pre className='bg-transparent  p py-5 fs-5 d-flex flex-row align-content-center'> Want to apply for <p className='text-warning bg-transparent '>job</p> or <p className='text-warning'>internship</p> ? </pre>
           </div>           
        </div>
     );
}
 
export default ContactUs;