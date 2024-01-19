import React from 'react';

import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';
import Img2 from '../Components/Img2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="About." text="I'm a React Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
