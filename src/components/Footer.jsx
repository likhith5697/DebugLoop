import React from 'react';

const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '2.5rem 2rem',
    marginTop: 'auto',
  }}>
    <div style={{
      maxWidth: '860px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      {/* Left: Logo text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M10 10 L6 16 L10 22" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
          <path d="M22 10 L26 16 L22 22" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
          <path d="M18 9 L14 23" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        </svg>
        <span style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.7rem',
          color: 'rgba(200,195,185,0.3)',
          letterSpacing: '0.06em',
        }}>
          © {new Date().getFullYear()} My Tech Blog
        </span>
      </div>

      {/* Right: Tech stack */}
      <span style={{
        fontFamily: '"DM Mono", monospace',
        fontSize: '0.65rem',
        color: 'rgba(200,195,185,0.2)',
        letterSpacing: '0.04em',
      }}>
        Built with React + Vite
      </span>
    </div>
  </footer>
);

export default Footer;