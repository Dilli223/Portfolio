import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('hero');

  // Toggle Theme
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Intersection Observer for Active Navigation Link on Scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'achievements', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      {/* Main Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border-color)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        transition: 'background-color var(--transition-normal), border var(--transition-normal)',
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
            Dilli Babu A &bull; Electronics &amp; Communication Engineer &amp; Developer
          </p>
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. Built with React JS.
          </p>
        </div>
      </footer>
    </div>
  );
}
