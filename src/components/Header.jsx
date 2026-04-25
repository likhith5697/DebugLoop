import React, { useEffect, useState } from 'react';

const Header = ({ onLogoClick, onAbout, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(10, 10, 12, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={onLogoClick}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <LogoMark />
          <div>
            <div style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#f0ece4',
              letterSpacing: '0.01em',
              lineHeight: 1,
              marginBottom: '3px',
            }}>
              DebugLoop
            </div>
            <div style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.58rem',
              color: 'rgba(201,169,110,0.6)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>
              by Likhith Venkata
            </div>
          </div>
        </div>

        {/* Nav — just About */}
        <nav>
          <a
            href="#"
            onClick={e => { e.preventDefault(); onAbout && onAbout(); }}
            style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.72rem',
              color: currentPage === 'about' ? '#c9a96e' : 'rgba(240,236,228,0.45)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
              borderBottom: currentPage === 'about' ? '1px solid rgba(201,169,110,0.5)' : '1px solid transparent',
              paddingBottom: '2px',
            }}
            onMouseEnter={e => { if (currentPage !== 'about') e.currentTarget.style.color = '#c9a96e'; }}
            onMouseLeave={e => { if (currentPage !== 'about') e.currentTarget.style.color = 'rgba(240,236,228,0.45)'; }}
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

const LogoMark = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="9" fill="#c9a96e" fillOpacity="0.12" />
    <rect x="0.5" y="0.5" width="35" height="35" rx="8.5" stroke="#c9a96e" strokeOpacity="0.35" strokeWidth="0.75" />
    <path d="M11 12 L11 24" stroke="#c9a96e" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M11 12 Q20 12 20 18 Q20 24 11 24" stroke="#c9a96e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M23 15 L26 18 L23 21" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55"/>
    <path d="M26 18 Q26 18 22 18" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
  </svg>
);

export default Header;