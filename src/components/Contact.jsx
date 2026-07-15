import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request (e.g. EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success alert
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-card)', transition: 'background-color var(--transition-normal)' }}>
      <div className="container">
        
        <div className="section-title-wrapper">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Feel free to reach out for internship opportunities, project collaborations, or queries</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.8fr 1.2fr',
          gap: '3.5rem',
          alignItems: 'start',
        }} className="contact-grid">
          
          {/* Left Column: Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Let's Connect
            </h3>
            
            {/* Email Card */}
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={18} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                <a href="mailto:dillibabu22032005@gmail.com" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                  dillibabu22032005@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone</div>
                <a href="tel:+919841494347" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  +91 98414 94347
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/dilli-babu-1085802a2"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}
                >
                  Dilli Babu A
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Madhavaram, Chennai, TN, India
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Send a Message
            </h3>

            {/* Alert Status */}
            {submitStatus === 'success' && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                fontSize: '0.9rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}>
                <CheckCircle2 size={18} /> Message sent successfully! I will reach back soon.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Name & Email Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }} className="form-row">
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--border-radius-sm)',
                      border: `1px solid ${errors.name ? '#ef4444' : 'var(--border-color)'}`,
                      backgroundColor: 'var(--bg-app)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => { if (!errors.name) e.target.style.borderColor = 'var(--primary)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border-color)'; }}
                  />
                  {errors.name && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--border-radius-sm)',
                      border: `1px solid ${errors.email ? '#ef4444' : 'var(--border-color)'}`,
                      backgroundColor: 'var(--bg-app)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => { if (!errors.email) e.target.style.borderColor = 'var(--primary)'; }}
                    onBlur={(e) => { e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border-color)'; }}
                  />
                  {errors.email && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--border-radius-sm)',
                    border: `1px solid ${errors.subject ? '#ef4444' : 'var(--border-color)'}`,
                    backgroundColor: 'var(--bg-app)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => { if (!errors.subject) e.target.style.borderColor = 'var(--primary)'; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border-color)'; }}
                />
                {errors.subject && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--border-radius-sm)',
                    border: `1px solid ${errors.message ? '#ef4444' : 'var(--border-color)'}`,
                    backgroundColor: 'var(--bg-app)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontFamily: 'inherit',
                    lineHeight: 1.5,
                    resize: 'vertical',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--primary)'; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border-color)'; }}
                />
                {errors.message && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  alignSelf: 'flex-start',
                  marginTop: '0.5rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 500px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
