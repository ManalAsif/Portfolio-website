import React from 'react';
import '../styles/contact.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";  
import { MdEmail } from "react-icons/md";
import Computer from '../components/computer.jsx';
function Contact() {
  return (
    <div className='contact'>
      <Computer/>
      <h1>Contact Me</h1>
      <p>Get in Touch</p>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      <h2><MdEmail /> Email:</h2>
      <a href='mailto:manalasif.paracha@gmail.com' target="_blank" rel="noopener noreferrer" className='contact-all'> manalasif.paracha@gmail.com</a>
      <h2><CiLinkedin /> LinkedIn:</h2>
      <a href='https://www.linkedin.com/in/manal-asif/' target="_blank" rel="noopener noreferrer" className='contact-all'>https://www.linkedin.com/in/manal-asif/</a>
      <h2><FaGithub /> GitHub:</h2>
      <a href='https://github.com/ManalAsif' target="_blank" rel="noopener noreferrer" className='contact-all'>https://github.com/ManalAsif</a>
    </div>
  );
}

export default Contact;
