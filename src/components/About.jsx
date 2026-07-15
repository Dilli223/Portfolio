import React from 'react';
import { GraduationCap, MapPin, User, Mail, Calendar } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'B.E. Electronics & Communication Engineering',
      institution: 'Velammal Institute of Technology, Chennai',
      duration: '2022 – 2026',
      result: 'CGPA: 8.45',
      icon: '🎓'
    },
    {
      degree: 'Higher Secondary Course (HSC)',
      institution: 'St. Thomas Higher Secondary School, Madhavaram',
      duration: 'Passed in 2022',
      result: 'Percentage: 82.66%',
      icon: '🏫'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'St. Thomas Silver Jubilee Matriculation School, Mathur, Chennai',
      duration: 'Passed in 2020',
      result: 'Percentage: 76.8%',
      icon: '🏢'
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-card)', transition: 'background-color var(--transition-normal)' }}>
      <div className="container">
        
        <div className="section-title-wrapper">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Electronics Graduate & Software Developer Enthusiast</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="about-grid">
          
          {/* Left Column: Bio & Personal Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Passionate about bridging <span style={{ color: 'var(--primary)' }}>Hardware & Software</span>
              </h3>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                I am an Electronics and Communication Engineering graduate with a strong foundation in hardware principles, coupled with a deep interest in software engineering. I love programming in Java, running SQL queries, and utilizing machine learning models to solve medical or environmental problems.
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                With a focus on building systems that automate tedious human workflows, I'm always looking for challenges where I can grow technically and professionally, and create systems that have a tangible real-world impact.
              </p>
            </div>

            {/* Quick Personal Info Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '2rem',
            }} className="info-grid">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                }}>
                  <User size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Name</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Dilli Babu A</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                  <a href="mailto:dillibabu22032005@gmail.com" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    dillibabu@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Chennai, India</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                }}>
                  <Calendar size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Degree</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>B.E. ECE (2026)</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <GraduationCap color="var(--primary)" /> Education
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: '1.5rem',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'start',
                  }}
                >
                  <div style={{
                    fontSize: '1.8rem',
                    backgroundColor: 'var(--bg-app)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {edu.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      flexWrap: 'wrap',
                      gap: '0.2rem',
                    }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </h4>
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        backgroundColor: 'var(--primary-light)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                      }}>
                        {edu.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0.5rem' }}>
                      {edu.institution}
                    </p>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'inline-block',
                      borderBottom: '2px solid var(--primary)',
                      paddingBottom: '2px',
                    }}>
                      {edu.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 480px) {
          .info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
