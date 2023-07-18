import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import AboutPanel from '../component/AboutPanel';
import HeroAbout from '../component/HeroAbout'

export const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroAbout/>
      <AboutPanel/>
      <Footer/>
    </div>
  )
}
export default About;
