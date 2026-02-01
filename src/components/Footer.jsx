function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">KC</span>
            <p className="footer-tagline">
              Designing bold experiences that challenge the status quo.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <a href="https://www.linkedin.com/in/kevin-coalwell" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:hello@kevincoalwell.com">Email</a>
              <a href="tel:503-862-9695">Phone</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kevin Coalwell. Built with passion.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
