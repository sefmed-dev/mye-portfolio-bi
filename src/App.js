import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu, X, Code, Database, TrendingUp, BarChart3, Mail, Github, Linkedin, ExternalLink, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { Crown } from 'lucide-react';

const BIPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Impact COVID-19 - Hackathon International UNYH",
      description: "Dashboard interactif primé analysant les effets socio-économiques de la pandémie.",
      images: [
        "/project-images/projet_ML_competition_page-0001.jpg",
        "/project-images/projet_ML_competition_page-0002.jpg",
        "/project-images/projet_ML_competition_page-0003.jpg",
        "/project-images/projet_ML_competition_page-0004.jpg",
        "/project-images/projet_ML_competition_page-0005.jpg",
        "/project-images/projet_ML_competition_page-0006.jpg",
        "/project-images/projet_ML_competition_page-0007.jpg",
        "/project-images/projet_ML_competition_page-0008.jpg",
        "/project-images/projet_ML_competition_page-0009.jpg",
        "/project-images/projet_ML_competition_page-0010.jpg",
        "/project-images/projet_ML_competition_page-0011.jpg",
        "/project-images/projet_ML_competition_page-0012.jpg",
        "/project-images/projet_ML_competition_page-0013.jpg",
        "/project-images/projet_ML_competition_page-0014.jpg"
      ],
      technologies: ["Power BI", "DAX", "Python", "Excel"],
      category: "dashboard",
      liveLink: "#",
      githubLink: "https://unstats.un.org/bigdata/blog/2022/un-youth-hackathon.cshtml",
      fullDescription: "Dashboard interactif primé analysant les effets socio-économiques de la pandémie."
    },
    {
      id: 2,
      title: "Analyse des Offres d’Emploi - Pays Arabes",
      description: "La conception d’entrepôt de données et la visualisation des offres d’emploi de LinkedIn.",
      images: [
        "/project-images/final_BI_page-0001.jpg",
        "/project-images/final_BI_page-0002.jpg",
        "/project-images/final_BI_page-0003.jpg",
        "/project-images/final_BI_page-0004.jpg"
      ],
      technologies: ["Python", "PowerBI", "DAX"],
      category: "analysis",
      liveLink: "#",
      githubLink: "#",
      fullDescription: "La conception d’entrepôt de données et la visualisation des offres d’emploi de LinkedIn."
    },
    {
      id: 3,
      title: "Dashboard Performance Aérienne - Groupe ADP",
      description: "Tableau de bord Power BI analysant indicateurs opérationnels pour optimisation des processus aériens.",
      images: [
        "/project-images/airline-performance-analysis - -groupe-adp_page-0001.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0002.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0003.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0004.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0005.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0006.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0007.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0008.jpg",
        "/project-images/airline-performance-analysis - -groupe-adp_page-0009.jpg"
      ],
      technologies: ["Power BI", "DAX", "Python", "Excel"],
      category: "optimization",
      liveLink: "#",
      githubLink: "#",
      fullDescription: "Tableau de bord Power BI analysant indicateurs opérationnels pour optimisation des processus aériens."
    }/**,
    
    {
      id: 4,
      title: "Analyse décisionnelle et visualisation de données",
      description: "Création d’un tableau de bord interactif pour analyser les ventes de produits maritimes par espèce et par produit à partir de données génériques.",
      images: [
        "/project-images/FishCo_Sales_page-0001.jpg",
        "/project-images/FishCo_Sales_page-0002.jpg",
        "/project-images/FishCo_Sales_page-0003.jpg",
        "/project-images/FishCo_Sales_page-0004.jpg",
        "/project-images/FishCo_Sales_page-0005.jpg",
        "/project-images/FishCo_Sales_page-0006.jpg"
      ],
      technologies: ["Power BI", "DAX", "Excel"],
      category: "optimization",
      liveLink: "#",
      githubLink: "#",
      fullDescription: "Création d’un tableau de bord interactif pour analyser les ventes de produits maritimes par espèce et par produit à partir de données génériques."
    },    
    {
      id: 5,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain visibility dashboard with inventory optimization.",
      images: [
        "/project-images/Datax.pptx_page-0001.jpg",
        "/project-images/Datax.pptx_page-0002.jpg",
        "/project-images/Datax.pptx_page-0003.jpg",
        "/project-images/Datax.pptx_page-0004.jpg",
        "/project-images/Datax.pptx_page-0005.jpg",
        "/project-images/Datax.pptx_page-0006.jpg",
        "/project-images/Datax.pptx_page-0007.jpg",
        "/project-images/Datax.pptx_page-0008.jpg",
        "/project-images/Datax.pptx_page-0008.jpg",
        "/project-images/Datax.pptx_page-0009.jpg",
        "/project-images/Datax.pptx_page-0010.jpg",
        "/project-images/Datax.pptx_page-0011.jpg",
        "/project-images/Datax.pptx_page-0012.jpg",
        "/project-images/Datax.pptx_page-0013.jpg",
        "/project-images/Datax.pptx_page-0014.jpg",
        "/project-images/Datax.pptx_page-0015.jpg",
        "/project-images/Datax.pptx_page-0016.jpg",
        "/project-images/Datax.pptx_page-0017.jpg",
        "/project-images/Datax.pptx_page-0018.jpg",
        "/project-images/Datax.pptx_page-0019.jpg",
        "/project-images/Datax.pptx_page-0020.jpg",
        "/project-images/Datax.pptx_page-0021.jpg",
        "/project-images/Datax.pptx_page-0022.jpg",
        "/project-images/Datax.pptx_page-0023.jpg",
        "/project-images/Datax.pptx_page-0024.jpg",
        "/project-images/Datax.pptx_page-0025.jpg",
        "/project-images/Datax.pptx_page-0026.jpg",
        "/project-images/Datax.pptx_page-0027.jpg",
        "/project-images/Datax.pptx_page-0028.jpg",
        "/project-images/Datax.pptx_page-0029.jpg",
        "/project-images/Datax.pptx_page-0030.jpg",
        "/project-images/Datax.pptx_page-0031.jpg"
      ],
      technologies: ["Power BI", "DAX", "Python", "Excel"],
      category: "optimization",
      liveLink: "#",
      githubLink: "#",
      fullDescription: "Supply chain optimization platform providing end-to-end visibility into inventory, logistics, and demand forecasting."
    }*/
    
  ];

  const skills = [
    { name: "Power BI", icon: <BarChart3 size={24} />, level: 95 },
    { name: "Python", icon: <Code size={24} />, level: 95 },
    { name: "SQL", icon: <Database size={24} />, level: 90 },
    { name: "Tableau", icon: <TrendingUp size={24} />, level: 85 },
    { name: "Data Modeling", icon: <Database size={24} />, level: 88 },
    { name: "ETL Processes", icon: <TrendingUp size={24} />, level: 82 }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      if (selectedProject.hasPDF) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === selectedProject.pdfPages - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      if (selectedProject.hasPDF) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? selectedProject.pdfPages - 1 : prevIndex - 1
        );
      } else {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
        );
      }
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeProjectModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        closeProjectModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>ELASRI </span>Mohamed Youssef
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              
            <div className="about-image">
              <div className="image-placeholder">
                <img
                  src="/project-images/photo.jpeg"
                  alt="Profile photo"
                  className="image-placeholder" 
                />
              </div>

              <h1>
                Business Intelligence
                <span className="gradient-text"> Analyst</span>
              </h1>
            </div>
              <p>
                Transforming complex data into actionable insights that drive 
                strategic business decisions and fuel growth.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card">
                <BarChart3 size={48} className="card-icon" />
                <h3>Data Visualization</h3>
                <p>Interactive dashboards & reports</p>
              </div>
              <div className="floating-card">
                <TrendingUp size={48} className="card-icon" />
                <h3>Analytics</h3>
                <p>Advanced data analysis</p>
              </div>
              <div className="floating-card">
                <FileText size={48} className="card-icon" />
                <h3>Reporting</h3>
                <p>Comprehensive BI reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="">
            <div className="about-text">
              <h3>Transforming Data into Business Value</h3>
              <p>
                I'm a passionate Business Intelligence Analyst with experiences 
                helping organizations make data-driven decisions. I specialize in creating 
                intuitive dashboards, building robust data models, and uncovering insights 
                that drive growth.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h4>10+</h4>
                  <p>Dashboards Created</p>
                </div>
                <div className="stat">
                  <h4>25+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h4>15+</h4>
                  <p>Data Sources Integrated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <center>
            <a href="https://unstats.un.org/bigdata/blog/2022/un-youth-hackathon.cshtml" className="btn btn-reward">
                        <Crown size={28} color="white" strokeWidth={2} /> Best Visualisation Reward - Hackathon International UNYH
                      </a>
          </center>
                      
                      
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/600x400/667eea/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <button 
                        className="project-link"
                        onClick={() => openProjectModal(project)}
                      >
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                  {project.hasPDF && (
                    <div className="pdf-badge">
                      <FileText size={16} />
                      PDF Report
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeProjectModal}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="image-slider">
              <div className="slider-container">
                {selectedProject.hasPDF ? (
                  // PDF Display
                  <div className="pdf-display">
                    <div className="pdf-content">
                      <div className="pdf-icon">
                        <FileText size={48} />
                      </div>
                      <h3>Business Intelligence Report</h3>
                      <p>Viewing: {selectedProject.title}</p>
                      <p>Page {currentImageIndex + 1} of {selectedProject.pdfPages}</p>
                      <div className="pdf-features">
                        <div className="pdf-feature">
                          <BarChart3 size={20} />
                          <span>Interactive Dashboards</span>
                        </div>
                        <div className="pdf-feature">
                          <TrendingUp size={20} />
                          <span>Performance Analytics</span>
                        </div>
                        <div className="pdf-feature">
                          <Database size={20} />
                          <span>Data Insights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Image Slider
                  <>
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      onError={(e) => {
                        e.target.src = `https://placehold.co/800x500/667eea/ffffff?text=${encodeURIComponent(selectedProject.title + ' - ' + (currentImageIndex + 1))}`;
                      }}
                    />
                  </>
                )}
                
                {/* Navigation Controls */}
                {(selectedProject.hasPDF ? selectedProject.pdfPages > 1 : selectedProject.images.length > 1) && (
                  <>
                    <button className="slider-btn slider-prev" onClick={prevImage}>
                      <ChevronLeft size={24} />
                    </button>
                    <button className="slider-btn slider-next" onClick={nextImage}>
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="slider-dots">
                      {(selectedProject.hasPDF ? 
                        Array.from({ length: selectedProject.pdfPages }, (_, i) => i) : 
                        selectedProject.images
                      ).map((_, index) => (
                        <button
                          key={index}
                          className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                    
                    <div className="slider-counter">
                      {currentImageIndex + 1} / {selectedProject.hasPDF ? selectedProject.pdfPages : selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="modal-body">
              <div className="project-description">
                <h3>Project Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                Interested in leveraging data to drive your business forward? 
                I'm always open to discussing new opportunities and challenges.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>elasri.mohamedyoussef@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Linkedin size={20} />
                  <span>https://www.linkedin.com/in/elasri-youssef/</span>
                </div>
                <div className="contact-item">
                  <Github size={20} />
                  <span>https://github.com/sefmed-dev</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span>BI</span>Portfolio
            </div>
            <p>&copy; 2025 ELASRI Mohamed Youssef. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://github.com/sefmed-dev" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/elasri-youssef/" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#contact" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BIPortfolio;