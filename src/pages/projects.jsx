// src/pages/About.jsx
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { LuCandy } from "react-icons/lu";
import { FaProjectDiagram } from "react-icons/fa";

import '../styles/project.css';
function Projects() {
  return (
    <div className='project'>
      <h1><FaProjectDiagram size={30}/> Projects</h1>
      <div className='grid-container'>
        <div className='project-list'>
          <h1> <FaInstagram size={20}/> Social media app</h1>
          <p>•	Designed a social media app in C++ with an object-oriented architecture.</p>
          <p>•	Implemented user authentication, profile management, and social interactions.</p>
          <p>•	Applied OOP concepts (inheritance, encapsulation, polymorphism) for scalability.</p>
        <p>•	Enabled personalized feeds, post interactions (like/comment), and friend/page engagement.</p>
        <a className='project.a' href="https://github.com/ManalAsif/project-oop" target="_blank" rel="noopener noreferrer">
          <button className='btn-projects'>View Project</button>
        </a>
      </div>
      <div className='project-list'>
        <h1> <IoFastFood size={20}/> Food Management System </h1>
        <p>•	A Full-Stack Web Application Developed with a responsive web interface using React, HTML, and CSS, and integrated it with a Node.js backend API.</p>
        <p>•	Implemented data validation, error handling, and seamless front-end to back-end communication to enhance user experience.</p>
        <p>•	Implemented user authentication, role-based access control, and secure data handling.</p>
        <a className='project.a' href="https://github.com/Razansid786/FastFood" target="_blank" rel="noopener noreferrer    ">
          <button className='btn-projects'>View Project</button>
        </a>
      </div>
      <div className='project-list'>
        <h1> <LuCandy size={20}/>   Candy Crush Game Clone</h1>
        <p>•	Built a functional Candy Crush clone using Python and OOP principles Implementing core mechanics: matching candies, special candies (e.g., Colour Bomb).</p>
        <p>•	Added features like cascading effects and real-time score calculation.</p>
        <p>•	Simulated authentic gameplay dynamics for an engaging user experience.</p>
        <p>•	Implemented a scoring system.</p>
        <a className='project.a' href="https://github.com/ManalAsif/candycrush" target="_blank" rel="noopener noreferrer">
          <button className='btn-projects'>View Project</button>
        </a>
      </div>
      </div>
      </div>

  );
}

export default Projects;
