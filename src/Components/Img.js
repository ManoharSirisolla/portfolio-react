import "./Img.css";

import React from 'react';
import IntroImg from "../source/home.jpg";
import { Link } from "react-router-dom";

const img = () => {
  return <div className="img">
     <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
    <div className="content">
        <p>HI,I'M MANOHAR</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/skills" className="btn">Skills</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
    
   
  </div>
}

export default img
