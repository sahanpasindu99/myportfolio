import React from 'react'
import Navbar from '../component/Navbar';
import HeImg from '../component/HeImg';
import Footer from '../component/Footer';
import Project from './Project';
import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeImg/>
      <Project/>
      <About/>
      
      
    </div>
  )
}

export default Home