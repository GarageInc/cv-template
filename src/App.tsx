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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {exporting ? 'Generating...' : 'PDF'}
        </button>
      </header>

      <main ref={resumeRef} className="resume-page">
        {/* Document Header */}
        <div className="doc-header" id="top">
          <h1>{resumeData.name}</h1>
          <p className="doc-title">{resumeData.title}</p>
          <address className="doc-contacts">
            <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
            <span className="separator">|</span>
            <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a>
            <span className="separator">|</span>
            <span>{resumeData.location}</span>
            <span className="separator">|</span>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="separator">|</span>
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="separator">|</span>
            <a href={resumeData.contact.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          </address>
          <button
            onClick={exportPDF}
            className="doc-export-btn"
            disabled={exporting}
            aria-label="Export resume as PDF"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 18 15 15" />
            </svg>
            {exporting ? 'Generating PDF...' : 'Export Resume in PDF'}
          </button>
        </div>

        {/* Professional Summary */}
        <section className="doc-section" id="summary">
          <h2 className="doc-section-title">Professional Summary</h2>
          <p className="doc-summary">{resumeData.summary}</p>
          <ul className="doc-highlights">
            {resumeData.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>

        {/* Key Achievements */}
        <div className="achievements-grid">
          {resumeData.achievements.map((a, i) => (
            <div key={i} className="achievement-card">
              <span className="achievement-metric">{a.metric}</span>
              <span className="achievement-label">{a.label}</span>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <section className="doc-section" id="experience">
          <h2 className="doc-section-title">Work Experience</h2>
          {resumeData.experience.map((exp, i) => (
            <article key={i} className="exp-entry">
              <div className="exp-company-row">
                <span className="exp-company">{exp.company}</span>
                {exp.totalDuration && (
                  <span className="exp-duration">{exp.totalDuration}</span>
                )}
              </div>
              {exp.roles.map((role, j) => (
                <div key={j} className="exp-role">
                  <div className="exp-role-row">
                    <span className="exp-role-title">{role.title}</span>
                    <span className="exp-role-period">{role.period}</span>
                  </div>
                  {role.location && (
                    <span className="exp-role-location">{role.location}</span>
                  )}
                  <ul className="exp-role-highlights">
                    {role.highlights.map((h, k) => (
                      <li key={k}>{h}</li>
                    ))}
                  </ul>
                  {role.stack && (
                    <p className="exp-stack">
                      <strong>Stack:</strong> {role.stack}
                    </p>
                  )}
                </div>
              ))}
            </article>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="doc-section" id="skills">
          <h2 className="doc-section-title">Technical Skills</h2>
          <div className="skills-table">
            {resumeData.skills.map((group, i) => (
              <div key={i} className="skill-row">
                <span className="skill-category">{group.category}:</span>
                <span className="skill-list">{group.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="doc-section" id="education">
          <h2 className="doc-section-title">Education</h2>
          <div className="edu-row">
            <span className="edu-institution">{resumeData.education.institution}</span>
            <span className="edu-period">{resumeData.education.period}</span>
          </div>
          <p className="edu-degree">{resumeData.education.degree}</p>
          <div className="lang-row">
            <div className="lang-list">
              {resumeData.languages.map((lang, i) => (
                <div key={i} className="lang-item">
                  <span className="lang-name">{lang.name}:</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="doc-section" id="contact">
          <h2 className="doc-section-title">Contact Information</h2>
          <address className="contact-list">
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <a href={`mailto:${resumeData.contact.email}`} className="contact-item-value">{resumeData.contact.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Phone</span>
              <a href={`tel:${resumeData.contact.phone}`} className="contact-item-value">{resumeData.contact.phone}</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Telegram</span>
              <a href={resumeData.contact.telegram} target="_blank" rel="noopener noreferrer" className="contact-item-value">@rfihtengolts</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">LinkedIn</span>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item-value">linkedin.com/in/rfihtengolts</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">GitHub</span>
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-item-value">github.com/GarageInc</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">GitHub (Alt)</span>
              <a href={resumeData.contact.githubAlt} target="_blank" rel="noopener noreferrer" className="contact-item-value">github.com/rfihtengolts</a>
            </div>
          </address>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Rinat Fihtengolts</p>
      </footer>
    </>
  );
}

export default App;
