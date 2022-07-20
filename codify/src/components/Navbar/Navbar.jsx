import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
const Navbar = () => {
    React.useEffect(()=>{
        var navbtn = document.querySelector('.navbar-toggler');
        var navlist = document.querySelector('.navbar-collapse')
        let show = false;
        navbtn.addEventListener('click',()=>{
            if(!show)
            {
                show = true;
                navlist.classList.add('show');
            }
            else
            {
                show = false;
                navlist.classList.remove('show');
            }
        })
    })
    return ( 
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <img src='/assets/images/logo.webp' className='nav-logo'></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} className="text-light"></FontAwesomeIcon>
                </button>
                <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link menu-item" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link menu-item" href="#">Apply for Job</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link menu-item" href="#" tabindex="-1" aria-disabled="true">Apply for Internship</a>
                    </li>
                    <li className='nav-item'>
                        <button className='menu-button border-0' href='#'>Contact Us</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;