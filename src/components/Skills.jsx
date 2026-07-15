import React from 'react';
import { Cpu, Code2, Heart, Award } from 'lucide-react';

export default function Skills() {
  const technical = [
    { name: 'Python Programming', level: 85, icon: '🐍' },
    { name: 'SQL & DBMS', level: 80, icon: '🗄️' },
    { name: 'NI LabVIEW', level: 75, icon: '📈' },
    { name: 'Digital Electronics', level: 70, icon: '⚡' },
  ];


  const soft = [
    'Strong Communication',
    'Quick Learner',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Team Collaboration'
  ];

  const interests = [
    { title: 'Software Development', desc: 'Building responsive web and desktop solutions using clean architectures.' },
    { title: 'Network & Security', desc: 'Familiarity with network topologies, simulation tools, and protocol architectures.' },
    { title: 'AI & Machine Learning', desc: 'Analyzing and modeling datasets using medical imaging and deep networks.' },
    { title: 'Embedded Systems & IoT', desc: 'Developing automated hardware integrations with microcontrollers and myDAQ.' },
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-title-wrapper">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-subtitle">A showcase of my technical abilities, domains of interest, and core strengths</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }} className="skills-grid">
          
          {/* Technical Skills Column */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '0.75rem',
            }}>
              <Code2 size={20} color="var(--primary)" /> Technical Skills
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {technical.map((tech) => (
                <div key={tech.name}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.4rem',
                  }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span>{tech.icon}</span> {tech.name}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
                      {tech.level}%
                    </span>
                  </div>
                  {/* Progress Bar Container */}
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'var(--border-color)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    {/* Animated Fill */}
                    <div style={{
                      width: `${tech.level}%`,
                      height: '100%',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '4px',
                      transition: 'width 1.5s cubic-bezier(0.1, 1, 0.1, 1)',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '0.75rem',
              }}>
                <Heart size={20} color="var(--primary)" /> Professional Strengths
              </h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
              }}>
                {soft.map((s) => (
                  <span
                    key={s}
                    className="tag"
                    style={{
                      fontSize: '0.85rem',
                      padding: '0.4rem 1rem',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '0.75rem',
              }}>
                <Cpu size={20} color="var(--primary)" /> Focus Areas
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }} className="interests-subgrid">
                {interests.map((interest, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--bg-app)',
                      padding: '1rem',
                      borderRadius: 'var(--border-radius-sm)',
                      border: '1px solid var(--border-color)',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                      {interest.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {interest.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 550px) {
          .interests-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
