import { useEffect, useRef } from 'react'

function Hero() {
  const heroRef = useRef(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-noise"></div>
      </div>

      <div className="hero-content hero-content-split">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for new opportunities
          </div>

          <h1 className="hero-title">
            <span className="title-line">Kevin Coalwell</span>
            <span className="title-accent">Designer</span>
          </h1>

          <p className="hero-description">
            Versatile designer specializing in translating complex technical concepts
            into compelling visual experiences. I craft bold, on-brand content that
            drives engagement across marketing campaigns, product launches, and
            e-commerce channels.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToWork}>
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <img
            src="/assets/hero-image-1.png"
            alt="Kevin Coalwell"
            className="portrait-image"
          />
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
