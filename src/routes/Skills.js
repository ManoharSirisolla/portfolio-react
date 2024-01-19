import React from 'react';
import Footer from "../Components/Footer";
import Img2 from "../Components/Img2";
import Navbar from '../Components/Navbar';
import Skill from '../Components/Skill';


const Skills = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="Skills." text="My Skills" />
      <Skill />
      <Footer />
    </div>
  )
}

export default Skills
