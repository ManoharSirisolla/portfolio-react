import "./Form.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sacedb9',
     'template_0w00sgr',
      form.current,
       'j1QbZjSjeHjqLJAUF')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="btn" type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Form
