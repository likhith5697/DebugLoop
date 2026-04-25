import React from 'react';

const About = ({ onBack }) => {
  return (
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
        ← Back
      </button>

      {/* Hero block */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '2rem',
        marginBottom: '3rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        flexWrap: 'wrap',
      }}>
        <div style={{
          width: '88px',
          height: '88px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #c9a96e 0%, #8b6f47 60%, #3a2a1a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 700,
          color: '#0a0a0c',
          fontFamily: '"Playfair Display", serif',
          flexShrink: 0,
          boxShadow: '0 0 0 1px rgba(201,169,110,0.2), 0 8px 24px rgba(0,0,0,0.4)',
        }}>
          L
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#c9a96e',
            margin: '0 0 0.5rem',
          }}>
            ✦ AI Systems Engineer
          </p>
          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            fontWeight: 700,
            color: '#f0ece4',
            margin: '0 0 0.5rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}>
            Likhith Venkata
          </h1>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.95rem',
            color: 'rgba(200,195,185,0.5)',
            margin: 0,
            lineHeight: 1.5,
          }}>
            Building intelligent systems at the intersection of AI, observability, and production engineering.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:likhith2kuv@gmail.com"
              style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(200,195,185,0.5)',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '100px',
                padding: '5px 14px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)';
                e.currentTarget.style.color = '#c9a96e';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(200,195,185,0.5)';
              }}
            >
              likhith2kuv@gmail.com ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bio sections */}
      <Section title="Hey, I'm Likhith 👋">
        <P>
          I'm an <Strong>AI Systems Engineer</Strong> who lives at the intersection of large language models,
          production infrastructure, and the hard problems that show up at 3am on-call.
        </P>
        <P>
          I started DebugLoop because most engineering content either stays too shallow
          or gets lost in theory. I wanted a place to write the post I wish existed
          when I was staring at a blank Grafana dashboard wondering why everything was on fire.
        </P>
      </Section>

      <Divider />

      <Section title="What I Work On">
        <P>My day-to-day sits across a few intersecting areas:</P>
        <Grid items={[
          { icon: '🤖', title: 'GenAI & LLMs', desc: 'Building AI agents, MCP integrations, and production-grade LLM pipelines that actually work under real load.' },
          { icon: '🔭', title: 'Observability', desc: 'OpenSearch, Grafana, APM, distributed tracing — making sense of signals when services go dark.' },
          { icon: '☁️', title: 'Cloud & Infrastructure', desc: 'AWS, Kubernetes, Docker — designing systems that scale and degrade gracefully.' },
          { icon: '⚙️', title: 'Microservices', desc: 'Service decomposition, async patterns, API design, and the operational reality of running many small things.' },
        ]} />
      </Section>

      <Divider />

      <Section title="Why DebugLoop?">
        <P>
          Every engineer has a <Strong>debug loop</Strong> — that cycle of forming a hypothesis,
          checking the evidence, and revising until something clicks. It's how we think.
        </P>
        <P>
          This blog is that loop, written down. Posts here are opinionated, grounded in
          real systems, and written for engineers who want to understand <em style={{ color: 'rgba(200,195,185,0.75)' }}>why</em> something
          works — not just copy-paste a fix.
        </P>
      </Section>

      <Divider />

      <Section title="Topics I Write About">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.5rem' }}>
          {[
            'GenAI in Production', 'LLM Agents', 'MCP Architecture',
            'Observability', 'Root Cause Analysis', 'FastAPI',
            'Kubernetes', 'AWS', 'Microservices', 'MTTR Reduction',
            'Vector Databases', 'Incident Engineering',
          ].map(tag => (
            <span key={tag} style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.68rem',
              letterSpacing: '0.06em',
              color: '#c9a96e',
              background: 'rgba(201,169,110,0.08)',
              border: '1px solid rgba(201,169,110,0.18)',
              padding: '5px 12px',
              borderRadius: '100px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </Section>

      <Divider />

      {/* CTA */}
      <div style={{
        background: 'rgba(201,169,110,0.05)',
        border: '1px solid rgba(201,169,110,0.15)',
        borderRadius: '12px',
        padding: '2.5rem 2rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.3rem',
          color: '#f0ece4',
          margin: '0 0 0.5rem',
          fontWeight: 700,
        }}>
          Want to connect?
        </p>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.95rem',
          color: 'rgba(200,195,185,0.5)',
          margin: '0 0 1.5rem',
        }}>
          Always happy to talk AI systems, production debugging, or anything observability.
          Drop me an email — I read everything.
        </p>
        <a
          href="mailto:likhith2kuv@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(201,169,110,0.15)',
            border: '1px solid rgba(201,169,110,0.3)',
            borderRadius: '100px',
            color: '#c9a96e',
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '11px 24px',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(201,169,110,0.25)';
            e.currentTarget.style.borderColor = 'rgba(201,169,110,0.55)';
            e.currentTarget.style.color = '#e8c97e';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(201,169,110,0.15)';
            e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)';
            e.currentTarget.style.color = '#c9a96e';
          }}
        >
          ✉ likhith2kuv@gmail.com
        </a>
      </div>

    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '1.35rem',
      fontWeight: 700,
      color: '#f0ece4',
      margin: '0 0 1rem',
      letterSpacing: '-0.01em',
    }}>
      {title}
    </h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: 'rgba(220,215,205,0.78)',
    margin: '0 0 1rem',
  }}>
    {children}
  </p>
);

const Strong = ({ children }) => (
  <strong style={{ color: '#f0ece4', fontWeight: 600 }}>{children}</strong>
);

const Divider = () => (
  <hr style={{
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.07)',
    margin: '2.5rem 0',
  }} />
);

const Grid = ({ items }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  }}>
    {items.map(({ icon, title, desc }) => (
      <div key={title} style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '10px',
        padding: '1.25rem',
      }}>
        <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{icon}</div>
        <div style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.72rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#c9a96e',
          marginBottom: '0.4rem',
        }}>
          {title}
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.88rem',
          color: 'rgba(200,195,185,0.5)',
          lineHeight: 1.6,
        }}>
          {desc}
        </div>
      </div>
    ))}
  </div>
);

export default About;