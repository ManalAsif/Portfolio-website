import React from 'react';
import Lottie from 'lottie-react';
import computer from '../animations/computer.json';

const Computer = () => {
  return (
    <div className="Computer" style={{
      position: 'relative',
      width: '100%',
      height: '0px', // smaller height to prevent extra space
      overflow: 'visible',
      backgroundColor: '#00000f',
    }}>
      <div className="Computer-animation" style={{
        position: 'absolute',
        top: '0px',  // 👈 pushes animation up out of the screen
        left: '80%',
        transform: 'translateX(-50%)',
        width: '450px',
        height: '300px',
        overflow: 'visible',
      }}>
        <Lottie animationData={computer} loop autoplay />
      </div>
    </div>
  );
};

export default Computer;
