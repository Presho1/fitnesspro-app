import React from 'react'
import './navbar.css'
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
   <nav className='nav'>
        <div className='first'>
            <img src="./assets/logo.svg" alt="" className='logo'/>
        </div>

        <div className='second'>
            <a href="" className='navLinks'>Features</a>
            <a href="" className='navLinks'>Pricing</a>
            <a href="" className='navLinks'>Download</a>
            <a href="" className='navLinks'>Class</a>
            <a href="" className='navLinks'>Lifestyle</a>
        </div>

        <div className='third'>
            <BsFacebook className='navIcons'/>
            <FaTwitter className='navIcons'/>
            <FaInstagram className='navIcons' />

            <button className='navButton'>Get free trial</button>
        </div>
   </nav>
  )
}

export default Navbar