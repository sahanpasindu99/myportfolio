import React from 'react';
import './AboutPanelStyle.css';
import Intro from '../assets/Intro.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-details">
        <h2>I'm Sahan</h2>
        <p>I'm a dedicated and self-oriented undergraduate student that can develop web application with React js
            , android application development and can work with databases like firebase.
        </p>
      </div>
      <div className="about-image">
        <img src={Intro}>
        </img>
      </div>
    </div>
  );
};

export default About;
