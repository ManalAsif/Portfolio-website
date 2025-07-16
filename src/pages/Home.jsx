import React from 'react';
import '../styles/home.css'
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";

// src/pages/Home.jsx

function Home() {
  return (
    <div className="Home">
      <h1>Hello my name is <span className="name">Manal</span></h1>
        <p>I'm a <span className="diff"> fullstack developer </span> <FaLaptopCode size={24}/></p>
        <p>skilled in Python, Java, and C++.</p>
        <p>I build scalable web apps and solve complex problems efficiently.</p>
        <p>My work spans both intuitive front-end design and robust back-end logic.</p>
        <p>Driven by a love for clean code and continuous learning.</p>
        <a href='#about'>
          <button className="btn-about">About Me</button>
        </a>
    </div>
  );
}

export default Home;
