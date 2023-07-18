import React from 'react'
import "./HeImgStyle.css";
import IntroImg from '../assets/Intro.jpg'
import { Link } from 'react-router-dom';
import dpimg from '../assets/whatsapp-dp.jpeg'
import TypewriterEffect from "typewriter-effect";
import { Typewriter } from 'react-simple-typewriter'


const HeImg = () => {
  
  return (
    <div className='hero'>
      <div className='mask'>
        <img src={IntroImg} alt="IntroImg" className='intro-img'/>

      </div>
      <div className='content'>
        <div>
          <img className='dp-img' src={dpimg}></img>
        </div>
        <p>Hi, I'm Sahan</p>
        <h2 class="typewriter-text"><Typewriter
            words={['REACT DEV', 'MOBILE DEV', 'FRONT-END DEV']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
          />
          </h2>
        
         
        <div className='btndiv'>
        <button className="btn-d"><Link  to="/project" >Projects</Link></button>
        <button className="btn-light"> <Link  to="/contact">Contact</Link></button>
       
        </div>
      </div>
      
    </div>
  )
}
export default HeImg