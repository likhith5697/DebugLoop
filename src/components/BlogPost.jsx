import React from 'react';

const BlogPost = ({ post, onBack }) => (
  <div style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 2rem 6rem' }}>
    {/* Back button */}
    <button
      onClick={onBack}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '100px',
        color: 'rgba(200,195,185,0.55)',
        fontSize: '0.75rem',
        fontFamily: '"DM Mono", monospace',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '7px 16px',
        cursor: 'pointer',
        marginBottom: '3.5rem',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)';
        e.currentTarget.style.color = '#c9a96e';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = 'rgba(200,195,185,0.55)';
      }}
    >
      ← All posts
    </button>

    {/* Post header */}
    <header style={{ marginBottom: '3rem' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <span style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#c9a96e',
          background: 'rgba(201,169,110,0.1)',
          border: '1px solid rgba(201,169,110,0.2)',
          padding: '4px 12px',
          borderRadius: '100px',
        }}>
          {post.category || 'Article'}
        </span>
      </div>

      <h1 style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
        fontWeight: 700,
        color: '#f0ece4',
        margin: '0 0 1.5rem 0',
        lineHeight: 1.25,
        letterSpacing: '-0.02em',
      }}>
        {post.title}
      </h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #c9a96e, #8b6f47)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: '#0a0a0c',
            fontFamily: '"DM Mono", monospace',
            flexShrink: 0,
          }}>
            {(post.author || 'A').charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: '#d4cfc6', fontWeight: 500 }}>{post.author}</div>
            <div style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.7rem',
              color: 'rgba(200,195,185,0.4)',
            }}>
              {post.date} · {post.readTime}
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Post body */}
    <MarkdownRenderer content={post.content} />
  </div>
);

function MarkdownRenderer({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // HR
    if (line.trim() === '---') {
      elements.push(
        <hr key={i} style={{
          border: 'none',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          margin: '2.5rem 0',
        }} />
      );
      i++;
      continue;
    }

    // H1
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '2rem',
          fontWeight: 700,
          color: '#f0ece4',
          margin: '3rem 0 1rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
        }}>
          {inline(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#f0ece4',
          margin: '2.5rem 0 0.75rem',
          letterSpacing: '-0.015em',
          lineHeight: 1.3,
        }}>
          {inline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#f0ece4',
          margin: '2rem 0 0.5rem',
        }}>
          {inline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} style={{
          borderLeft: '2px solid #c9a96e',
          margin: '1.75rem 0',
          padding: '0.25rem 0 0.25rem 1.25rem',
          color: 'rgba(200,195,185,0.65)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
        }}>
          {inline(line.slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // Bullet list
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} style={{
          margin: '1rem 0 1.5rem',
          paddingLeft: '1.5rem',
          color: 'rgba(220,215,205,0.8)',
          lineHeight: 1.8,
        }}>
          {items.map((item, j) => (
            <li key={j} style={{ marginBottom: '0.35rem' }}>{inline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={i} style={{
          margin: '1rem 0 1.5rem',
          paddingLeft: '1.5rem',
          color: 'rgba(220,215,205,0.8)',
          lineHeight: 1.8,
        }}>
          {items.map((item, j) => (
            <li key={j} style={{ marginBottom: '0.35rem' }}>{inline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Code block
    if (line.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} style={{
          background: 'rgba(201,169,110,0.06)',
          border: '1px solid rgba(201,169,110,0.15)',
          borderRadius: '8px',
          padding: '1.25rem 1.5rem',
          overflowX: 'auto',
          margin: '1.5rem 0',
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.875rem',
          color: '#c9a96e',
          lineHeight: 1.7,
        }}>
          {codeLines.join('\n')}
        </pre>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} style={{
        margin: '0 0 1.4rem',
        color: 'rgba(220,215,205,0.82)',
        fontSize: '1.08rem',
        lineHeight: 1.8,
        fontFamily: '"DM Sans", sans-serif',
      }}>
        {inline(line)}
      </p>
    );
    i++;
  }

  return <div>{elements}</div>;
}

// Inline formatting: bold, italic, inline code
function inline(text) {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`([^`]+)`)/g;
  let last = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));

    if (match[1]) {
      parts.push(<strong key={match.index} style={{ color: '#f0ece4', fontWeight: 600 }}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={match.index}>{match[4]}</em>);
    } else if (match[5]) {
      parts.push(
        <code key={match.index} style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.875em',
          background: 'rgba(201,169,110,0.1)',
          border: '1px solid rgba(201,169,110,0.2)',
          color: '#c9a96e',
          padding: '2px 7px',
          borderRadius: '4px',
        }}>
          {match[6]}
        </code>
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
}

export default BlogPost;