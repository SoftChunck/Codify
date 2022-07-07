import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg  align-items">
            <div class="container-fluid">
                <img src='/assets/images/logo.webp' className='nav-logo'></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menu">
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