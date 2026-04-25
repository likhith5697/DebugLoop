import React from 'react';

const Layout = ({ children }) => (
  <div style={{
    minHeight: '100vh',
    background: '#0a0a0c',
    color: '#f0ece4',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    display: 'flex',
    flexDirection: 'column',
  }}>
    {children}
  </div>
);

export default Layout;