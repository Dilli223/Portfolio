import React from 'react';
import { Award, BookOpen, Cpu, Trophy, Milestone } from 'lucide-react';

export default function Achievements() {
  const events = [
    {
      date: '2025',
      title: 'Departmental Quiz Runner-Up',
      location: 'Velammal Institute of Technology',
      desc: 'Secured 2nd place in the departmental technical quiz competition covering core electronics and basic computing concepts.',
      icon: <Award size={18} />
    },
    {
      date: 'March 2, 2024',
      title: 'Paper Presentation 2nd Prize Winner',
      location: 'SEEE Symposium, Easwari Engineering College',
      desc: 'Presented a technical research paper on advanced electronics, competing against students from multiple engineering institutes and securing second place.',
      icon: <Trophy size={18} />
    },
    {
      date: '2024',
      title: 'Inter-College Cricket Winner',
      location: 'Jaya Engineering College Tournament',
      desc: 'Represented the college cricket team in the inter-engineering tournament, securing the championship trophy.',
      icon: <Trophy size={18} />
    },
    {
      date: '2024',
      title: 'Rapid IoT Prototyping Workshop',
      location: 'Cloudkampus, Mylapore',
      desc: 'Completed a hands-on training workshop on Rapid IoT Prototyping using Raspberry Pi, AWS IoT, and Node-RED interfaces.',
      icon: <Cpu size={18} />
    },
    {
      date: '2024',
      title: 'Network Simulation - 3 Workshop',
      location: 'Velammal Institute of Technology',
      desc: 'Acquired practical experience simulating wire and wireless network topologies, routing behaviors, and protocol performance using NS-3 simulator tools.',
      icon: <BookOpen size={18} />
    },
    {
      date: '2022',
      title: 'B.E ECE Journey Began',
      location: 'Velammal Institute of Technology',
      desc: 'Enrolled in the Bachelor of Engineering program in Electronics and Communication, maintaining a consistent academic record with a cumulative CGPA of 8.45.',
      icon: <Milestone size={18} />
    }
  ];

  return (
    <section id="achievements" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div className="section-title-wrapper">
          <h2 className="section-title">Co-Curriculars &amp; Journey</h2>
          <p className="section-subtitle">A chronological record of my academic milestones, workshops, and achievements</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="timeline">
            {events.map((event, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.4rem',
                    flexWrap: 'wrap',
                    gap: '0.3rem',
                  }}>
                    <span className="timeline-date">{event.date}</span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600
                    }}>
                      {event.icon} {event.location}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {event.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
