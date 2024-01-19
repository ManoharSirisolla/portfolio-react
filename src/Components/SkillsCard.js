import "./SkillsCard.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const SkillsCard = (props) => {
  return (
    <div className="container">
        
        <div className="container1">
            <div className="card">
              <img src={props.imgsrc} alt="html" />
              <h2 className="skill-name">{props.title}</h2>
              <div className="skill-details">
                <p>{props.text}</p>
                <div className="skl-btns">
                  <NavLink to={props.view} className="btn">View</NavLink>
                </div>
              </div>           
            </div>
        </div>        
    </div>   
    
  )
}

export default SkillsCard
