import React from 'react';

import Navbar from '../Components/Navbar';
import Img2 from '../Components/Img2';
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="Contact." text="Let's have a Chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
