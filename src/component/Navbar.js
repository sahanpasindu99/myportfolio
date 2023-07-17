
import { Link } from 'react-router-dom';
import React ,{useState} from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import "./NavibarStyle.css";
import { click } from '@testing-library/user-event/dist/click';


const Navbar = () => {
    const [click,setClick]= useState(false);
    const handleClick= ()=> 
    {
        setClick(!click);
     }
     
    const[color,setColor]=useState(false);

    const changeColor= () => {
    if(window.scrollY >=100){
        setColor(true)
    }
    else{
        setColor(false);
    }};

    window.addEventListener("scroll",changeColor);

     return (
    <div class={color ? "header header-bg" : "header"}>
    <Link to={'/'}>
        <h2 className='Nav-Title'>Sahan's</h2>
    </Link>
    <ul class= {click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link className='link' to={"/"}>Home</Link>
        </li>
        <li>
            <Link className='link' to={"/Project"}>Projects</Link>
        </li>
        <li>
            <Link className='link' to={"/Contact"}>Contact</Link>
        </li>
        <li>
            <Link className='link' to={"/About"}>About</Link>
        </li>
    </ul>

    <div class="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}}/> ): 
            ( <FaBars size={20} style={{color:"#fff"}}/> )
        }

    </div>
</div>
  )
}

export default Navbar