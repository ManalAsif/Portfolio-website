// src/pages/About.jsx
import React from 'react';
import '../styles/about.css';
import { TbTimelineEventText } from "react-icons/tb";

function About() {
  return <div className="about">
    <h1> <TbTimelineEventText size={24} />2023 - 2027</h1>
    <h2> Bachelor's in Computer Science </h2>
    <p>During my BSCS, I mastered SQL and OS principles,</p>
    <p>developed applications in Python and C++, and</p>
    <p>completed a capstone integrating UI, backend, and performance optimizations.</p>
    <h1> <TbTimelineEventText size={24} />2021 - 2023</h1>
    <h2>A-level </h2>
    <p>I Completed my A-level with 2 As, in which I focused on advanced mathematics, physics, and computer science.</p>
    <p>Developed a strong foundation in programming and problem-solving skills.</p>
    <p>Participated in various coding competitions and hackathons.</p>
    <h1> <TbTimelineEventText size={24} />2019 - 2023</h1>
    <h2>O-level </h2>
    <p>Completed my O-level with 10 A/A*, I focused on core subjects like mathematics, physics, and computer science.</p>
    <p>Developed a strong foundation in programming and problem-solving skills.</p>
    <p>Participated in various coding competitions and hackathons.</p>
</div>;

}

export default About;
