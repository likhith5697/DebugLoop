import React from 'react';
import posts from '../posts/postsIndex';
import BlogCard from '../components/BlogCard';

const Home = ({ onSelectPost }) => {
  return (
    <div>
      <section style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '5rem 2rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ maxWidth: '620px' }}>
          <p style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#c9a96e',
            margin: '0 0 1.5rem 0',
          }}>
            ✦ Engineering Blog by Likhith Venkata
          </p>

          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 700,
            color: '#f0ece4',
            margin: '0 0 1.25rem 0',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            Where bugs get{' '}
            <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>explained.</em>
          </h1>

          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.65,
            color: 'rgba(200,195,185,0.55)',
            margin: '0',
            maxWidth: '460px',
          }}>
            Deep dives into production systems, GenAI in engineering, observability, and the craft of building software that survives the real world.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem' }}>
          {[
            { label: 'Articles', value: posts.length },
            { label: 'Est.', value: '2026' },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#f0ece4',
                lineHeight: 1,
                marginBottom: '4px',
              }}>{value}</div>
              <div style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.65rem',
                color: 'rgba(200,195,185,0.4)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 6rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 0 0',
        }}>
          <span style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(200,195,185,0.35)',
          }}>All Writing</span>
          <span style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.65rem',
            color: 'rgba(200,195,185,0.35)',
          }}>{posts.length} {posts.length === 1 ? 'post' : 'posts'}</span>
        </div>

        <div>
          {posts.map((post, idx) => (
            <BlogCard
              key={post.slug || idx}
              post={post}
              index={idx}
              onClick={() => onSelectPost(post)}
            />
          ))}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '2rem 0 0',
          opacity: 0.25,
        }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.65rem', color: '#c9a96e' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
        </div>
      </section>
    </div>
  );
};

export default Home;