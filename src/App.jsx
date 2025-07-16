// src/App.jsx
import React from 'react';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/projects';
import Contact from './pages/contact';

import './App.css';

function App() {
  return (
    <Layout>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </Layout>
  );
}

export default App;
