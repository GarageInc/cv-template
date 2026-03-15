import { useRef, useCallback, useState } from 'react';
import { resumeData } from './data/resumeData';

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const exportPDF = useCallback(async () => {
    setExporting(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = resumeRef.current;
      if (!element) return;

      element.classList.add('pdf-mode');

      await html2pdf()
        .set({
          margin: [0.3, 0.4, 0.3, 0.4],
          filename: 'Rinat_Fihtengolts_Resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        })
        .from(element)
        .save();

      element.classList.remove('pdf-mode');
    } finally {
      setExporting(false);
    }
  }, []);

  return (
    <>
      <header className="header" role="banner">
        <a href="#top" className="header-logo" aria-label="Back to top">
          RF
        </a>
        <nav className="header-nav" aria-label="Resume sections">
          <a href="#summary">Summary</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          onClick={exportPDF}
          className="export-btn"
          disabled={exporting}
          aria-label="Download resume as PDF"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {exporting ? 'Generating...' : 'Download PDF'}
        </button>
      </header>

      <main ref={resumeRef} className="resume-content">
        {/* Header / Hero */}
        <section className="hero" id="top" aria-label="Personal information">
          <div className="hero-inner">
            <h1>{resumeData.name}</h1>
            <p className="hero-title">{resumeData.title}</p>
            <p className="hero-location">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {resumeData.location}
            </p>
            <div className="hero-experience-badge">
              <span className="badge-number">12+</span>
              <span className="badge-label">Years Experience</span>
            </div>
            <address className="hero-contacts">
              <a href={`mailto:${resumeData.contact.email}`} className="hero-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                {resumeData.contact.email}
              </a>
              <a href={resumeData.contact.telegram} target="_blank" rel="noopener noreferrer" className="hero-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Telegram
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hero-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </address>
            <button
              onClick={exportPDF}
              className="hero-export-btn"
              disabled={exporting}
              aria-label="Export resume as PDF"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
              {exporting ? 'Generating PDF...' : 'Export Resume in PDF'}
            </button>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="section" id="summary" aria-label="Professional Summary">
          <div className="container">
            <h2>Professional Summary</h2>
            <p className="summary-text">{resumeData.summary}</p>
            <ul className="highlights" role="list">
              {resumeData.highlights.map((h, i) => (
                <li key={i} className="highlight-item">{h}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section className="section section-alt" id="experience" aria-label="Work Experience">
          <div className="container">
            <h2>Work Experience</h2>
            <div className="experience-list">
              {resumeData.experience.map((exp, i) => (
                <article key={i} className="experience-card">
                  <div className="experience-header">
                    <h3 className="company-name">{exp.company}</h3>
                    {exp.totalDuration && (
                      <span className="total-duration">{exp.totalDuration}</span>
                    )}
                  </div>
                  {exp.roles.map((role, j) => (
                    <div key={j} className="role-block">
                      <h4 className="role-title">{role.title}</h4>
                      <p className="role-meta">
                        <time>{role.period}</time>
                        {role.location && <span> · {role.location}</span>}
                      </p>
                      <ul className="role-highlights">
                        {role.highlights.map((h, k) => (
                          <li key={k}>{h}</li>
                        ))}
                      </ul>
                      {role.stack && (
                        <p className="role-stack">
                          <strong>Stack:</strong> {role.stack}
                        </p>
                      )}
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="section" id="skills" aria-label="Technical Skills">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {resumeData.skills.map((group, i) => (
                <div key={i} className="skill-group">
                  <h3>{group.category}</h3>
                  <ul className="skill-tags" role="list">
                    {group.skills.map((skill, j) => (
                      <li key={j} className="skill-tag">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Languages */}
        <section className="section section-alt" id="education" aria-label="Education">
          <div className="container">
            <h2>Education</h2>
            <article className="education-card">
              <h3>{resumeData.education.institution}</h3>
              <p className="education-degree">{resumeData.education.degree}</p>
              <p className="education-period">
                <time>{resumeData.education.period}</time>
              </p>
            </article>
            <div className="languages-block">
              <h3>Languages</h3>
              <ul className="languages-list">
                {resumeData.languages.map((lang, i) => (
                  <li key={i} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section" id="contact" aria-label="Contact Information">
          <div className="container">
            <h2>Contact Information</h2>
            <address className="contact-grid">
              <a href={`mailto:${resumeData.contact.email}`} className="contact-card">
                <span className="contact-label">Email</span>
                <span className="contact-value">{resumeData.contact.email}</span>
              </a>
              <a href={resumeData.contact.telegram} className="contact-card" target="_blank" rel="noopener noreferrer">
                <span className="contact-label">Telegram</span>
                <span className="contact-value">@rfihtengolts</span>
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="contact-card">
                <span className="contact-label">Phone / WhatsApp</span>
                <span className="contact-value">{resumeData.contact.phone}</span>
              </a>
              <a href={resumeData.contact.linkedin} className="contact-card" target="_blank" rel="noopener noreferrer">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/rfihtengolts</span>
              </a>
              <a href={resumeData.contact.github} className="contact-card" target="_blank" rel="noopener noreferrer">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/GarageInc</span>
              </a>
              <a href={resumeData.contact.githubAlt} className="contact-card" target="_blank" rel="noopener noreferrer">
                <span className="contact-label">GitHub (Alt)</span>
                <span className="contact-value">github.com/rfihtengolts</span>
              </a>
            </address>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rinat Fihtengolts</p>
        </div>
      </footer>

      <button
        onClick={exportPDF}
        className="floating-export-btn"
        disabled={exporting}
        aria-label="Export resume as PDF"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <polyline points="9 15 12 18 15 15" />
        </svg>
        {exporting ? 'Generating...' : 'Export PDF'}
      </button>
    </>
  );
}

export default App;
