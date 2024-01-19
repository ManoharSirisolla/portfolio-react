import "./Footer.css";

import React from 'react';
import { FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color : "fff", marginRight:"2rem" }} />
                    <div>
                      <p>2-138d,Medinaraopalem</p>
                      <p>Andhra Pradesh</p>
                      <p>India.</p>
                      <div className="phone">
                      <h4><FaPhone size={20} style={{ color:"fff", marginRight: "2rem" }} />
                      +91 7981728624</h4>                      
                    </div>
                    <div className="email">
                      <h4><FaMailBulk size={20} style={{ color:"fff", marginRight: "2rem" }} />
                      manoharsirisolla345@gmail.com</h4>                      
                    </div>
                    </div>                    
                </div>
            </div>
            <div className="right">
              <h4>About Me</h4>
              <p>This is me Manohar Sirisolla.
                Job seeker & accept new challenges and ready to face complex situations.</p>
                <div className="social">
                <NavLink to="https://www.facebook.com/manohar.sirisolla/"><FaFacebook size={30} style={{ color:"fff", marginRight: "1rem" }} /></NavLink>
                <NavLink to="https://www.instagram.com/manoharberu/"><FaInstagram size={30} style={{ color:"fff", marginRight: "1rem" }} /></NavLink>
                <NavLink to="https://linkedin.com/in/manohar-siri-40084a190/"><FaLinkedin size={30} style={{ color:"fff", marginRight: "1rem" }} /></NavLink>
                </div>
            </div>
        </div>      
    </div>
  )}

export default Footer
