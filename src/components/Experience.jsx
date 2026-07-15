import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Internship Trainee',
      company: 'Mitsuba Pvt. Ltd.',
      location: 'Chennai, India',
      duration: 'Summer Internship',
      description: 'Acquired core industrial knowledge by analyzing production methodologies and quality metrics in a high-volume automotive manufacturing setting.',
      highlights: [
        'Analyzed automotive production assembly lines to understand cycle times and operational flow.',
        'Observed industrial automation controllers, sensors, and actuator loops in active assembly lines.',
        'Assisted the Quality Assurance team in running inspection tests and compiling defect rate sheets.',
        'Participated in daily manufacturing safety briefs and standard operational procedure (SOP) reviews.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-card)', transition: 'background-color var(--transition-normal)' }}>
      <div className="container">
        
        <div className="section-title-wrapper">
          <h2 className="section-title">Experience &amp; Internships</h2>
          <p className="section-subtitle">My professional journey and hands-on industrial training</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="card animate-fade-in-up"
              style={{
                padding: '2.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Experience Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '1.25rem',
              }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                  }}>
                    <Briefcase size={16} /> {exp.company}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '0.3rem',
                }} className="exp-meta">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--primary-light)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                  }}>
                    <Calendar size={14} color="var(--primary)" /> {exp.duration}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                  }}>
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>
              </div>

              {/* Experience Body */}
              <div>
                <p style={{
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  fontSize: '0.98rem',
                  marginBottom: '1.25rem',
                }}>
                  {exp.description}
                </p>

                <h4 style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  Key Responsibilities &amp; Learnings:
                </h4>

                <ul style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                }}>
                  {exp.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '0.6rem',
                        fontSize: '0.92rem',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="var(--primary)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .exp-meta {
            align-items: flex-start !important;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
