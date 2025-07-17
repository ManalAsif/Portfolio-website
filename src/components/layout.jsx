// src/components/Layout.jsx
import React from 'react';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          marginLeft: "13%", // Match sidebar width if Sidebar is fixed
          padding: 0,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
