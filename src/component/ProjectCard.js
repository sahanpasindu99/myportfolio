import React from 'react'
import freelance from "../assets/freelancer.jpg"
import { NavLink } from 'react-router-dom'
import "./ProjectCardStyles.css";

const ProjectCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>PROJECTS</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={freelance} alt='freelance'/>
                <h2 className='project-title'>FREELANCING PLATFORM</h2>
                <div className='pro-details'>
                    <p>A freelancing website for freelancers that can buy and sell services around SriLanka.</p>
                    <div className='pro-btns'>
                        <NavLink to="https://www.github.com" className='btn'>View</NavLink>
                    </div>

                </div>
                
        </div>        
    </div>
    </div>
  )
}

export default ProjectCard;