// src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#00000f', // match your dark theme

      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          padding: '2rem',
          backgroundColor: '#00000f', // match your dark theme
          overflowy: 'auto',
          marginLeft: '200px',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
