import { useRef, useEffect } from 'react'

function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-content contact-content-inline">
          <div className="contact-info">
            <div className="section-header">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">
                Let's Create Something Bold Together
              </h2>
              <p className="section-description">
                Ready to challenge the status quo? I'm always interested in hearing
                about new opportunities, creative projects, and ways to push boundaries.
              </p>
            </div>
          </div>

          <div className="contact-methods">
            <a href="mailto:hello@kevincoalwell.com" className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Email</span>
                <span className="method-value">hello@kevincoalwell.com</span>
              </div>
            </a>

            <a href="tel:503-862-9695" className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Phone</span>
                <span className="method-value">503.862.9695</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/kevin-coalwell" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">LinkedIn</span>
                <span className="method-value">kevin-coalwell</span>
              </div>
            </a>

            <div className="contact-method location">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Location</span>
                <span className="method-value">Salem, Oregon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
