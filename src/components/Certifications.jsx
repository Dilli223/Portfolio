import React from 'react';
import { Award, ShieldAlert, Cpu, Cloud, FileCode } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      name: 'AWS Cloud Essentials',
      issuer: 'Amazon Web Services (AWS)',
      icon: <Cloud size={24} />,
      color: '#FF9900'
    },
    {
      name: 'NI LabVIEW Training',
      issuer: 'Aadhyaa Skills',
      icon: <Cpu size={24} />,
      color: '#003366'
    },
    {
      name: 'AI Fundamentals',
      issuer: 'IBM',
      icon: <Award size={24} />,
      color: '#054ADA'
    },
    {
      name: 'DevOps Practitioner',
      issuer: 'GUVI x HCL',
      icon: <FileCode size={24} />,
      color: '#217346'
    }
  ];

  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'var(--bg-card)', transition: 'background-color var(--transition-normal)' }}>
      <div className="container">
        
        <div className="section-title-wrapper">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Credentials and specializations validating my academic knowledge</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }} className="certs-grid">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                position: 'relative',
              }}
            >
              {/* Icon container */}
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-app)',
                color: cert.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid var(--border-color)',
              }}>
                {cert.icon}
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                  lineHeight: 1.3
                }}>
                  {cert.name}
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500
                }}>
                  {cert.issuer}
                </p>
              </div>

              {/* Little verified batch */}
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
              }} title="Verified Credential" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
