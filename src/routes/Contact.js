import React from 'react'
import Footer from '../component/Footer';
import HeImgContact from '../component/HeImgContact';
import Navbar from '../component/Navbar';
import ContactForm from '../component/ContactForm';

export const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeImgContact/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
export default Contact
