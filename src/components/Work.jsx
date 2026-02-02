import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    id: 1,
    title: "Tradeshow Visual Identity",
    subtitle: "Agility Robotics @ ProMat 2025",
    category: "Brand Design / Marketing Collateral",
    description: "Led the complete visual design for Agility Robotics' booth debut at ProMat 2025, positioning the company as the leader in commercial robotics. Created a cohesive brand experience across booth graphics, LED content, printed collateral, and team apparel.",
    challenge: "Debut a 4th generation humanoid robot at a major trade show and drive qualified leads through cohesive brand experience—standing out among industry giants.",
    solution: "Designed large-scale robot renders for distance visibility, strategic minimal interior graphics to focus on live demos, and cross-touchpoint visual consistency across all materials.",
    impact: [
      "High foot traffic despite edge-of-floor placement",
      "Positive feedback from marketing, sales, and leadership",
      "Team apparel became popular internal swag",
      "Professional presence matching major industry players"
    ],
    deliverables: ["Booth Graphics", "LED Panel Content", "Printed Collateral", "Team Apparel", "VIP Tote Bags"],
    timeline: "3 months",
    role: "Lead Designer",
    color: "#FF6B35",
    thumbnail: "/assets/case-study-1-thumbnail.png",
    images: [
      "/assets/case-study-1-image-1.png",
      "/assets/case-study-1-image-2.png",
      "/assets/case-study-1-image-3.png"
    ]
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    subtitle: "Agility Robotics",
    category: "UI/UX Design / Visual Design",
    description: "Spearheaded the visual design strategy for migrating Agility Robotics from Squarespace to Webflow, creating a scalable design system that could support custom interactions and improved information architecture.",
    challenge: "The company had outgrown Squarespace's design and CMS limitations. Needed a scalable platform supporting custom interactions for enterprise customers, investors, and the general public.",
    solution: "Developed a complete visual design system in Figma, maintained brand's open, breathable aesthetic while accommodating technical density, and created scalable component library for future development.",
    impact: [
      "Scalable foundation for continued growth",
      "Enhanced user experience through improved IA",
      "Positive leadership feedback on visual execution",
      "Future-proof platform supporting custom interactions"
    ],
    deliverables: ["Visual Design System", "Figma Prototypes", "Navigation Architecture", "Component Library"],
    timeline: "3 months",
    role: "Visual Design Lead",
    color: "#FFB800",
    thumbnail: "/assets/case-study-2-thumbnail.png",
    images: [
      "/assets/case-study-2-image-1.png",
      "/assets/case-study-2-image-2.png",
      "/assets/case-study-2-image-3.png"
    ]
  },
  {
    id: 3,
    title: "R&D Robot Livery System",
    subtitle: "Agility Robotics",
    category: "Product Design / Brand Strategy",
    description: "Designed a distinctive visual identity system for R&D demonstration robots, solving a critical business communication problem between sales teams and potential customers.",
    challenge: "Customers referenced robot capabilities from YouTube videos that were experimental R&D demos, not current features. This created unrealistic expectations and complicated sales conversations.",
    solution: "Created a digital noise pattern in brand teal, inspired by concept car aesthetics and crash test dummy visual language. Implemented as physical wraps on robot shells for clear visual distinction.",
    impact: [
      "Solved customer confusion on experimental vs. current capabilities",
      "Streamlined sales conversations with appropriate expectations",
      "Established visual standard across R&D videos and demos",
      "Cost-effective solution using existing shells"
    ],
    deliverables: ["Pattern Design", "Wrap Templates", "Brand Guidelines", "Production Coordination"],
    timeline: "3 months",
    role: "Visual Designer & Project Lead",
    color: "#FF8C42",
    thumbnail: "/assets/case-study-3-thumbnail.png",
    images: [
      "/assets/case-study-3-image_1.png",
      "/assets/case-study-3-image-2.png",
      "/assets/case-study-3-image-3.png"
    ]
  }
]

function Work() {
  const [activeProject, setActiveProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)
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

    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null || !activeProject) return

      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1)
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, activeProject])

  const openModal = (project) => {
    setActiveProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveProject(null)
    setLightboxIndex(null)
    document.body.style.overflow = 'unset'
  }

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const navigateLightbox = (direction) => {
    if (!activeProject) return
    const newIndex = (lightboxIndex + direction + activeProject.images.length) % activeProject.images.length
    setLightboxIndex(newIndex)
  }

  return (
    <section id="work" className="work" ref={sectionRef}>
      <div className="work-container">
        <div className="section-header">
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">
            Case Studies
          </h2>
          <p className="section-description">
            Strategic design solutions that drive business results. Each project demonstrates
            my ability to translate complex requirements into compelling visual experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              style={{ '--accent-color': project.color, '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <div className="project-overlay">
                  <span className="view-project">
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-label">Role</span>
                    <span className="meta-value">{project.role}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Timeline</span>
                    <span className="meta-value">{project.timeline}</span>
                  </div>
                </div>

                <div className="project-tags">
                  {project.deliverables.slice(0, 3).map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                  {project.deliverables.length > 3 && (
                    <span className="tag tag-more">+{project.deliverables.length - 3}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="modal-content">
              <div className="modal-header" style={{ '--accent-color': activeProject.color }}>
                <span className="modal-category">{activeProject.category}</span>
                <h2 className="modal-title">{activeProject.title}</h2>
                <p className="modal-subtitle">{activeProject.subtitle}</p>
              </div>

              <div className="modal-gallery">
                {activeProject.images.map((image, index) => {
                  // Determine if this image needs top alignment
                  const needsTopAlign =
                    (activeProject.id === 1 && index === 0) ||
                    (activeProject.id === 2 && index === 2)

                  return (
                    <div
                      key={index}
                      className="gallery-item gallery-item-clickable"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image}
                        alt={`${activeProject.title} - Image ${index + 1}`}
                        className={`gallery-image ${needsTopAlign ? 'gallery-image-top' : ''}`}
                      />
                    </div>
                  )
                })}
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h3>The Challenge</h3>
                  <p>{activeProject.challenge}</p>
                </div>

                <div className="modal-section">
                  <h3>The Solution</h3>
                  <p>{activeProject.solution}</p>
                </div>

                <div className="modal-section">
                  <h3>The Impact</h3>
                  <ul className="impact-list">
                    {activeProject.impact.map((item, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeProject.color} strokeWidth="2">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Deliverables</h3>
                  <div className="deliverables-grid">
                    {activeProject.deliverables.map((item, i) => (
                      <span key={i} className="deliverable-item" style={{ borderColor: activeProject.color }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-meta">
                  <div className="modal-meta-item">
                    <span className="label">Role</span>
                    <span className="value">{activeProject.role}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="label">Timeline</span>
                    <span className="value">{activeProject.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && activeProject && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeProject.images[lightboxIndex]}
              alt={`${activeProject.title} - Image ${lightboxIndex + 1}`}
              className="lightbox-image"
            />
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <div className="lightbox-counter">
            {lightboxIndex + 1} / {activeProject.images.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Work
