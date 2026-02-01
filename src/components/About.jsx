import { useEffect, useRef } from 'react'

const skills = [
  {
    category: "Design Tools",
    items: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe After Effects"]
  },
  {
    category: "Core Competencies",
    items: ["Brand Guidelines", "Typography", "Visual Composition", "Copywriting", "Video Production"]
  },
  {
    category: "Technical Skills",
    items: ["3D Rendering", "Web Development", "Motion Graphics", "Asset Management", "Print Production"]
  }
]

const experience = [
  {
    title: "Brand Designer",
    company: "Agility Robotics",
    period: "Sept 2025 - Present",
    description: "Cultivate comprehensive visual brand guidelines, design website interfaces, develop VR/AR demonstration experiences, and create immersive tradeshow booth designs."
  },
  {
    title: "Associate Graphic Designer",
    company: "Agility Robotics",
    period: "Oct 2024 - Sept 2025",
    description: "Designed digital and print assets, collaborated with website team on landing pages, created high-quality 3D product renders and motion graphics."
  },
  {
    title: "Creative Producer",
    company: "Agility Robotics",
    period: "Aug 2022 - Oct 2024",
    description: "Pitched, produced, and edited video content. Translated highly technical information for wide audiences. Managed creative contractors and coordinated freelance labor."
  },
  {
    title: "Creative Content Manager",
    company: "Active911",
    period: "Mar 2021 - Jun 2022",
    description: "Designed and produced multimedia content. Managed social media platforms totaling over 50,000 members. Ensured brand voice adherence across all channels."
  }
]

function About() {
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

    const elements = document.querySelectorAll('.about-card, .skill-category, .experience-item')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Designer. Storyteller. Builder.
          </h2>
        </div>

        <div className="about-content">
          <div className="about-intro about-card">
            <div className="intro-text">
              <p className="intro-lead">
                I'm a versatile designer who thrives at the intersection of creativity and technical complexity.
              </p>
              <p>
                With a background spanning brand design, video production, and web development, I specialize
                in translating complex technical concepts into compelling visual experiences. My work at
                Agility Robotics has given me unique expertise in bringing premium technology products to
                market through strategic, on-brand content.
              </p>
              <p>
                I believe in challenging the status quo and pushing boundaries—whether I'm designing a
                tradeshow booth that draws crowds from across the show floor, or crafting a visual identity
                system that solves real business problems. I'm equally comfortable leading a creative project
                or rolling up my sleeves to get the work done.
              </p>
              <p>
                When I'm not designing, I'm likely exploring the Pacific Northwest, working on personal
                creative projects, or pursuing my Computer Science degree at Oregon State University.
              </p>
            </div>

            <div className="intro-highlights">
              <div className="highlight">
                <span className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
                <div>
                  <h4>BFA in Digital Communication Arts</h4>
                  <p>Oregon State University - Summa Cum Laude</p>
                </div>
              </div>
              <div className="highlight">
                <span className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </span>
                <div>
                  <h4>Microcredential in Computer Science</h4>
                  <p>Oregon State University</p>
                </div>
              </div>
              <div className="highlight">
                <span className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </span>
                <div>
                  <h4>Portland, Oregon Based</h4>
                  <p>Available for on-site opportunities</p>
                </div>
              </div>
              <div className="highlight">
                <span className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                <div>
                  <h4>Student Emmy Nomination</h4>
                  <p>Production Award Recognition</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills about-card">
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
              {skills.map((category, index) => (
                <div key={index} className="skill-category" style={{ '--delay': `${index * 0.1}s` }}>
                  <h4>{category.category}</h4>
                  <ul className="skill-list">
                    {category.items.map((skill, i) => (
                      <li key={i} className="skill-list-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="about-experience about-card">
            <h3>Experience</h3>
            <div className="experience-timeline">
              {experience.map((job, index) => (
                <div key={index} className="experience-item" style={{ '--delay': `${index * 0.1}s` }}>
                  <div className="experience-marker"></div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <h4>{job.title}</h4>
                      <span className="experience-period">{job.period}</span>
                    </div>
                    <span className="experience-company">{job.company}</span>
                    <p className="experience-description">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
