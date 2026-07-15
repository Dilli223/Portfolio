import React, { useState, useEffect } from 'react';
import { Mail, Phone, FileText, ArrowRight } from 'lucide-react';

const WORDS = [
  'Electronics & Communication Engineer',
  'Python Developer',
  'SQL & Database Enthusiast',
  'AI & Deep Learning Builder',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  // Typing effect
  useEffect(() => {
    if (subIndex === WORDS[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500); // Wait before backspacing
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(WORDS[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--header-height)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, hsl(var(--hue), 85%, 55%, 0.15) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} className="animate-float" />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, hsl(var(--hue), 85%, 55%, 0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'center',
        }} className="hero-grid">
          
          {/* Hero Left Content */}
          <div className="animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              alignSelf: 'flex-start',
            }}>
              <span className="tag" style={{ fontSize: '0.85rem' }}>👋 Welcome to my Portfolio</span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              Hi, I am <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, hsl(var(--hue), 85%, 40%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Dilli Babu A
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span>I'm a&nbsp;</span>
              <span style={{ color: 'var(--primary)', borderRight: '2px solid var(--primary)', paddingRight: '4px', animation: 'blink 0.75s step-end infinite' }}>
                {text}
              </span>
            </div>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '550px',
            }}>
              Motivated Electronics and Communication Engineering student passionate about Software Development. 
              I design embedded IoT systems and build secure software solutions with Java and database technologies.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              margin: '0.5rem 0 1rem',
            }}>
              <a href="#projects" className="btn btn-primary">
                View My Projects <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" download="Dilli_Babu_Resume.pdf" className="btn btn-secondary">
                <FileText size={18} /> Download Resume
              </a>
            </div>

            {/* Social / Contact Links */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              marginTop: '0.5rem',
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Connect With Me
              </span>
              <div style={{
                height: '1px',
                width: '40px',
                backgroundColor: 'var(--border-color)',
              }} />
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a
                  href="mailto:dillibabu22032005@gmail.com"
                  className="social-icon"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="tel:+919841494347"
                  className="social-icon"
                  title="Phone"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dilli-babu-1085802a2"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a
                  href="https://github.com/Dilli223"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Hero Right Graphic */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }} className="hero-right">
            <div style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary) 0%, hsl(var(--hue), 85%, 35%) 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'var(--shadow-xl)',
            }} className="profile-wrapper">
              <img
                src="/profile.jpeg"
                alt="Dilli Babu A"
                style={{
                  width: '304px',
                  height: '304px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '6px solid var(--bg-card)',
                  backgroundColor: '#f1f5f9',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '5%',
                left: '2%',
                backgroundColor: 'var(--bg-card)',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid var(--border-color)',
              }} className="floating-badge-1">
                <span style={{ fontSize: '1.1rem' }}>🐍</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>Python</span>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '12%',
                right: '-5%',
                backgroundColor: 'var(--bg-card)',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid var(--border-color)',
              }} className="floating-badge-2">
                <span style={{ fontSize: '1.1rem' }}>🗄️</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>SQL</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          50% { border-color: transparent }
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: var(--bg-card);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }
        .social-icon:hover {
          color: #ffffff;
          background-color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 4rem;
          }
          .hero-right {
            order: -1;
          }
          .animate-fade-in-up {
            align-items: center;
          }
        }
        .floating-badge-1 {
          animation: float 5s ease-in-out infinite;
        }
        .floating-badge-2 {
          animation: float 4.5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </section>
  );
}
