import React from 'react'
import "./ContactFormStyle.css"

const ContactForm = () => {
  return (
    <div  className='form'>
     <form>
        <label>Your Name </label>
        <input type='text'></input>
        <label>Your E-mail </label>
        <input type='email'></input>
        <label>Message </label>
       <textarea rows='6' placeholder='Enter your message here'></textarea>
       <button className='btnSubmit'>Submit</button>
     </form>

    </div>
  )
}

export default ContactForm