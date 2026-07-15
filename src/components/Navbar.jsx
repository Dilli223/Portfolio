import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Palette } from 'lucide-react';

const HUES = [
  { name: 'Blue', value: 220, hex: '#2563eb' },
  { name: 'Purple', value: 270, hex: '#7c3aed' },
  { name: 'Emerald', value: 150, hex: '#059669' },
  { name: 'Orange', value: 25, hex: '#ea580c' },
  { name: 'Crimson', value: 345, hex: '#db2777' },
];

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHue, setCurrentHue] = useState(220); // Default Blue
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeHue = (hueVal) => {
    setCurrentHue(hueVal);
    document.documentElement.style.setProperty('--hue', hueVal);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--header-height)',
      backgroundColor: isScrolled ? 'var(--bg-nav)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
      zIndex: 1000,
      transition: 'background-color var(--transition-normal), border var(--transition-normal)',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.4rem',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}>
          Dilli Babu<span style={{ color: 'var(--primary)' }}>.</span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }} className="desktop-menu">
          <ul style={{
            display: 'flex',
            gap: '1.5rem',
          }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: activeSection === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.5rem 0',
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '1px',
                    }} />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '0.8rem' }}>
            {/* Color Picker Toggle */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.4rem',
                  borderRadius: '50%',
                  transition: 'background-color var(--transition-fast)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-light)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Theme Colors"
              >
                <Palette size={20} />
              </button>

              {showColorPicker && (
                <div style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-sm)',
                  padding: '0.6rem',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  gap: '0.5rem',
                  zIndex: 1010,
                }}>
                  {HUES.map((h) => (
                    <button
                      key={h.name}
                      onClick={() => {
                        changeHue(h.value);
                        setShowColorPicker(false);
                      }}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: h.hex,
                        border: currentHue === h.value ? '2px solid var(--text-primary)' : '1px solid rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      title={h.name}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Switcher */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                padding: '0.4rem',
                borderRadius: '50%',
                transition: 'background-color var(--transition-fast)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-light)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div style={{ display: 'none' }} className="mobile-menu-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 999,
          boxShadow: 'var(--shadow-lg)',
        }} className="mobile-drawer">
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: activeSection === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                    display: 'block',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {HUES.map((h) => (
                <button
                  key={h.name}
                  onClick={() => changeHue(h.value)}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: h.hex,
                    border: currentHue === h.value ? '2px solid var(--text-primary)' : '1px solid rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                  title={h.name}
                />
              ))}
            </div>

            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} /> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Media Query Injector */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
