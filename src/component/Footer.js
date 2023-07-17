import React from 'react'
import "./FooterStyle.css"

import {FaHome, FaPhone ,FaMailBulk, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <h4><FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    Kandy</h4>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    +94 769742518</h4>
                </div>
                <div className='mail'>
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    spasindu700@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About</h4>
                <p>I'm an undergraduate student.
                   A dedicated and passionate about discussing and developing innovative solutions.</p>
                   <div className='socials'>
                    <FaLinkedin size={30} style={{color:"#fff",marginRight: "2rem"}}/>
                    <FaInstagram size={30} style={{color:"#fff",marginRight: "2rem"}}/>
                    <FaGithub size={30} style={{color:"#fff",marginRight: "2rem"}}/>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Footer