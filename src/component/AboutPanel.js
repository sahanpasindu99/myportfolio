import React from 'react';
import './AboutPanelStyle.css';

import { Link, NavLink } from 'react-router-dom';
import wall1 from '../assets/wall1.jpg'
import wall2 from '../assets/wall2.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>Hello I'm Sahan</h2>
        <p>I'm a dedicated and self-oriented undergraduate student that can develop front-end web application with React Js and etc.</p>
        <button className="about-btns"><NavLink  to="/contact" >Contact Me</NavLink></button>
        
      </div>
      <div className="right">
        <div className='img-container'>
          <div className='img-stack top'>
            <img className='img1' alt='true' src={wall1}></img>

          </div>
          <div className='img-stack bottom'>
            <img className='img1' alt='true' src={wall2}></img>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
