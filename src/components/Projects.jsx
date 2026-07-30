import React, { useState } from 'react';
import { Layers, Cpu, Eye, Code } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      title: 'AI Automated Retinal Disease Detection',
      subtitle: 'Medical Imaging & Deep Learning',
      category: 'AI & ML',
      description: 'Built an AI-powered system designed to analyze retinal images and classify diabetic retinopathy. Leveraged deep CNN and transfer learning (VGG16) to provide automated clinical diagnosis alerts, improving screening rates.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'VGG16', 'CNN'],
      icon: '👁️'
    },
    {
      title: 'IoT-Based Smart Irrigation System',
      subtitle: 'Automation & Precision Agriculture',
      category: 'IoT & Robotics',
      description: 'Designed a real-time smart agriculture platform integrating soil sensors with an NI myDAQ hardware controller. Monitors moisture levels continuously and triggers automated watering schedules to minimize water waste.',
      tech: ['NI myDAQ', 'Soil Sensors', 'IoT', 'Embedded Systems', 'LabVIEW'],
      icon: '🌱'
    },
    {
      title: 'Student Dashboard Pro – AI-Powered Academic Management System',
      subtitle: 'Academic Analytics & Intelligent Management',
      category: 'AI & ML',
      description: 'Built an AI-powered academic management platform featuring real-time performance tracking, intelligent course schedule optimization, interactive analytics dashboards, and automated study planning tools for students.',
      tech: ['React', 'Node.js', 'Python', 'Tailwind CSS', 'AI / LLM API', 'PostgreSQL'],
      icon: '🎓'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-title-wrapper">
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">A collection of research papers and hands-on systems I have built</p>
        </div>

        {/* Filter Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {['All', 'AI & ML', 'IoT & Robotics'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                backgroundColor: filter === cat ? 'var(--primary)' : 'var(--bg-card)',
                color: filter === cat ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                if (filter !== cat) {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== cat) {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }} className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '2.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Category Indicator Tag */}
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderBottomLeftRadius: 'var(--border-radius-sm)',
                borderLeft: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
              }}>
                {p.category}
              </span>

              {/* Project Icon Header */}
              <div style={{
                fontSize: '2.5rem',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--bg-app)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-color)',
              }}>
                {p.icon}
              </div>

              {/* Title & Info */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {p.subtitle}
                </h4>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginTop: '0.5rem',
                }}>
                  {p.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1.25rem',
              }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="tag"
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
