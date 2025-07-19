import React from 'react';
import Lottie from 'lottie-react';
import desktop from '../animations/dpt.json';

const Desktop = () => {
  return (
    <div className="Desktop" style={{
      position: 'relative',
      width: '100%',
      height: '0px', // smaller height to prevent extra space
      overflow: 'visible',
      backgroundColor: '#00000f',
    }}>
      <div className="Desktop-animation" style={{
        position: 'absolute',
        top: '-200px',  // 👈 pushes animation up out of the screen
        left: '80%',
        transform: 'translateX(-50%)',
        width: '450px',
        height: '300px',
        overflow: 'visible',
      }}>
        <Lottie animationData={desktop} loop autoplay />
      </div>
    </div>
  );
};

export default Desktop;
