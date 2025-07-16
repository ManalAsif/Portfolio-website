// src/components/Layout.jsx
import React from 'react';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        margin: 0,
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          margin: 0, // Match sidebar width if Sidebar is fixed
          padding: 0,
          overflowX: "hidden",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
