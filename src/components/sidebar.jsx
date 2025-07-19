import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { FiHome } from 'react-icons/fi';
import { PiProjectorScreenChart } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import logo from '../assets/logo.png';
import { SiPython ,SiCplusplus,SiNodedotjs,SiMysql } from "react-icons/si";


// This is a simple sidebar component for a portfolio website
const Sidebar = () => {
  return (
    <div className="sidebar">  
    <img src={logo} alt="Decorative shape" className='logo' />  
    <div className="sidebar-skills">
        <h3>Skills</h3>
        <div className="icon-row">
          <SiPython title="Python" style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 8 }}/>
          <SiCplusplus title="C++" style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 8 }}/>
          <SiNodedotjs title="Node.js" style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 8 }}/>
          <SiMysql title="MySQL" style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 8 }}/>
        </div>
      </div>
    <div className="sidebar-content">
      <ul>
        <li><a href="#home"><FiHome size={20} style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 10 }} />Home</a></li>
        <li><a href="#about"><FaRegUser size={20} style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 10 }} />About</a></li>
        <li><a href="#projects"><PiProjectorScreenChart size={20} style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 10 }} />Projects</a></li>
        <li><a href="#contact"><MdConnectWithoutContact size={20} style={{ verticalAlign: 'middle', color: '#c6a315', marginRight: 10 }} />Contact</a></li>
     
      </ul>
    </div>
    
      
  
    
    </div>
  
  );
};

export default Sidebar;