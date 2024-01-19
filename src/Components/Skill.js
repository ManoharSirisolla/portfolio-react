import "./SkillsCard.css";
import SkillsCard from "./SkillsCard";
import SkillData from "./SkillData";


import React from 'react';


const Skill = () => {
  return (
    <div className="container">
        <h1 className="skills-heading">Skills</h1>
        <div className="container1">
          {SkillData.map((val, ind) =>{
            return (
              <SkillsCard 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view= {val.view}
              />
            );
          })}
        </div>
    </div>
  )
}

export default Skill
