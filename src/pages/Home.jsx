import React from 'react';
import '../styles/home.css'
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import Computer from '../components/computer.jsx';
import Desktop from '../components/desktop.jsx';
// src/pages/Home.jsx

function Home() {
  return (
    
    <div className="Home page">
    <div className="Home">
       <Desktop/>
      <h1>Hello my name is <span className="name">Manal</span></h1>
        <p>I'm a <span className="diff"> fullstack developer </span> <FaLaptopCode size={24}/></p>
        <p>skilled in Python, Java, and C++.</p>
        <p>I love tackling complex challenges by breaking them down into efficient, structured code solutions.</p>

        <p>My work combines creative front-end development with strong back-end logic to build responsive web applications.</p>
    
        <p>As I continue my academic and professional journey i am eager to explore new technologies.</p>
        <p>I'm driven by a love for clean code and continuous learning.</p>
        <a href='#about'>
          <button className="btn-about">About Me</button>
        </a>

    </div>
    </div>
  );
}

export default Home;
