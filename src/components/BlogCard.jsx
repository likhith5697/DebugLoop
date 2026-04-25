import React, { useState } from 'react';

const BlogCard = ({ post, onClick, index = 0 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '2.5rem 0',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        position: 'relative',
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Post number */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
      }}>
        <span style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.7rem',
          color: 'rgba(201,169,110,0.5)',
          letterSpacing: '0.1em',
          paddingTop: '4px',
          minWidth: '2rem',
          userSelect: 'none',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div style={{ flex: 1 }}>
          {/* Tag/category pill */}
          <div style={{ marginBottom: '0.75rem' }}>
            <span style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#c9a96e',
              background: 'rgba(201,169,110,0.1)',
              border: '1px solid rgba(201,169,110,0.2)',
              padding: '3px 10px',
              borderRadius: '100px',
            }}>
              {post.category || 'Article'}
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
            fontWeight: 700,
            color: hovered ? '#f0ece4' : '#d4cfc6',
            margin: '0 0 0.75rem 0',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            transition: 'color 0.2s',
          }}>
            {post.title}
          </h2>

          {/* Preview */}
          <p style={{
            color: 'rgba(200,195,185,0.55)',
            fontSize: '1rem',
            lineHeight: 1.65,
            margin: '0 0 1.25rem 0',
            maxWidth: '560px',
            fontFamily: '"DM Sans", sans-serif',
          }}>
            {post.preview}
          </p>

          {/* Meta row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}>
            {/* Author avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c9a96e, #8b6f47)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                fontWeight: 700,
                color: '#0a0a0c',
                fontFamily: '"DM Mono", monospace',
                flexShrink: 0,
              }}>
                {(post.author || 'A').charAt(0).toUpperCase()}
              </div>
              <span style={{
                fontSize: '0.85rem',
                color: 'rgba(200,195,185,0.6)',
                fontFamily: '"DM Sans", sans-serif',
              }}>
                {post.author}
              </span>
            </div>

            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>·</span>

            <span style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.72rem',
              color: 'rgba(200,195,185,0.4)',
              letterSpacing: '0.04em',
            }}>
              {post.date}
            </span>

            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.7rem' }}>·</span>

            <span style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.72rem',
              color: 'rgba(200,195,185,0.4)',
            }}>
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: '4px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 0.25s ease',
          color: '#c9a96e',
          fontSize: '1.1rem',
          flexShrink: 0,
        }}>
          →
        </div>
      </div>
    </article>
  );
};

export default BlogCard;