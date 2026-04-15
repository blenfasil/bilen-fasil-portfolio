import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'videos', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'Django', level: 82 },
    { name: 'Java', level: 85 },
    { name: 'HTML/CSS', level: 92 }
  ];

  return (
    <div className="app">
      {/* Stars Background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">BF</div>
            <h2>Bilen Fasil</h2>
          </div>
          
          <div className="desktop-menu">
            {['home', 'about', 'experience', 'projects', 'videos', 'contact'].map(section => (
              <a 
                key={section}
                href={`#${section}`} 
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </a>
            ))}
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {['home', 'about', 'experience', 'projects', 'videos', 'contact'].map(section => (
              <a key={section} href={`#${section}`} onClick={closeMenu}>
                {section}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="glow-badge">
                <span className="pulse">✨</span> 2+ Years Experience
              </div>
              <h1 className="glow-text">
                Hi, I'm <span className="highlight">Bilen Fasil</span>
              </h1>
              <p className="subtitle">Full-Stack Developer</p>
              <p className="description">
                Bachelor's Degree in Computer Science | Building scalable web applications with modern technologies
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">
                  <span>💫</span> Hire Me
                </a>
                <a href="#videos" className="btn-secondary">
                  <span>🎬</span> Watch Demos
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-wrapper">
                <div className="glow-ring"></div>
                <img src="/profile.jpg" alt="Bilen Fasil" />
                <div className="floating-shapes">
                  <div className="shape shape-1">💻</div>
                  <div className="shape shape-2">🚀</div>
                  <div className="shape shape-3">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">ABOUT ME</span>
            <h2>Who Am I?</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Bilen Fasil, a passionate Full-Stack Developer with a Bachelor's Degree in Computer Science 
                and over 2 years of professional experience. I specialize in creating beautiful, functional web 
                applications that solve real problems.
              </p>
              <p>
                With expertise in both frontend and backend technologies, I build complete solutions from database 
                design to responsive user interfaces. I love turning ideas into reality through code.
              </p>
              <p>
                Throughout my 2+ years in the industry, I've worked on diverse projects ranging from e-commerce 
                platforms to coffee shop websites, always focusing on delivering high-quality, scalable solutions.
              </p>
            </div>

            <div className="skills-section">
              <h3>Technical Skills</h3>
              {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">MY JOURNEY</span>
            <h2>Work Experience</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="experience-grid">
            {[
              { year: '2023 - Present', title: 'Full-Stack Developer', company: 'Tech Company', desc: 'Developing web applications using React, Django, and Node.js. Collaborating with teams to deliver high-quality solutions.', icon: '💼' },
              { year: '2022 - 2023', title: 'Frontend Developer', company: 'Digital Agency', desc: 'Built responsive UIs with React and modern CSS frameworks. Implemented state management and API integrations.', icon: '📱' },
              { year: '2025 - Present', title: 'Freelance Developer', company: 'Self-Employed', desc: 'Delivered custom websites and web applications for multiple clients. Specialized in React and full-stack development.', icon: '🚀' }
            ].map(exp => (
              <div key={exp.title} className="experience-card">
                <div className="card-icon">{exp.icon}</div>
                <div className="card-year">{exp.year}</div>
                <h3>{exp.title}</h3>
                <p className="card-company">{exp.company}</p>
                <p className="card-desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">PORTFOLIO</span>
            <h2>Featured Projects</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="projects-grid">
            {[
              { title: 'Bela Coffee House', desc: 'Modern coffee shop website with online ordering system and premium selection.', tech: ['React', 'Vercel', 'CSS3'], link: 'https://bela-coffee-house-14vg.vercel.app/', icon: '☕' },
              { title: 'Portfolio Website', desc: 'Personal portfolio built with React featuring responsive design and animations.', tech: ['React', 'CSS3', 'Responsive'], link: 'https://github.com/blenfasil', icon: '🚀' },
              { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce solution with payment integration and admin dashboard.', tech: ['React', 'Django', 'PostgreSQL'], link: '#', icon: '💻' }
            ].map(project => (
              <div key={project.title} className="project-card">
                <div className="project-icon">{project.icon}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="videos">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SHOWCASE</span>
            <h2>Video Demos</h2>
            <div className="section-line"></div>
            <p className="video-note">🎵 Videos start muted - Click the speaker icon to unmute</p>
          </div>
          
          <div className="videos-grid">
            {[1, 2].map(i => (
              <div key={i} className="video-card">
                <video controls muted autoPlay loop>
                  <source src={`/videos/video${i}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-info">
                  <h3>Project Demo {i}</h3>
                  <p>Showcasing my development skills and project features</p>
                  <div className="mute-badge">🔇 Starts muted • Click speaker to unmute</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">GET IN TOUCH</span>
            <h2>Let's Work Together</h2>
            <div className="section-line"></div>
          </div>
          
          <p className="contact-text">
            I'm always interested in hearing about new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:blenfasil7@gmail.com">blenfasil7@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:0982220986">0982220986</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Ethiopia</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/blenfasil" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/blen-fasil-3b8293318/" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Bilen Fasil. All rights reserved.</p>
        <p>Built with React | Full-Stack Developer | 2+ Years Experience</p>
      </footer>

      {/* Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: #0a0a2a;
          color: #ffffff;
          overflow-x: hidden;
        }

        /* Stars Background Animation */
        .stars, .stars2, .stars3 {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .stars:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 150px 200px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 300px 400px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 500px 100px, #fff, rgba(0,0,0,0));
          background-repeat: no-repeat;
          background-size: 200px 200px, 300px 300px, 400px 400px, 500px 500px, 600px 600px;
          animation: twinkle 4s infinite;
          opacity: 0.6;
        }

        .stars2:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 80px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 250px 350px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 450px 550px, #fff, rgba(0,0,0,0));
          background-repeat: no-repeat;
          background-size: 300px 300px, 400px 400px, 500px 500px;
          animation: twinkle 6s infinite reverse;
          opacity: 0.4;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(10, 10, 42, 0.95);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 255, 255, 0.1);
        }

        .navbar.scrolled {
          padding: 10px 0;
          background: rgba(10, 10, 42, 0.98);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #00ffff, #0066ff);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          color: white;
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px #00ffff; }
          50% { box-shadow: 0 0 20px #00ffff; }
        }

        .logo h2 {
          color: white;
          font-size: 1.3rem;
          background: linear-gradient(135deg, #fff, #00ffff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .desktop-menu {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          text-transform: capitalize;
          transition: all 0.3s;
          position: relative;
        }

        .nav-link:hover {
          color: #00ffff;
        }

        .nav-link.active {
          color: #00ffff;
        }

        .nav-link.active:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 2px;
          background: #00ffff;
          animation: slideIn 0.3s ease;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 65px;
          left: 0;
          right: 0;
          background: rgba(10, 10, 42, 0.98);
          backdrop-filter: blur(10px);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
          border-bottom: 1px solid #00ffff;
        }

        .mobile-menu a {
          color: #cbd5e1;
          text-decoration: none;
          padding: 12px;
          font-size: 16px;
          text-transform: capitalize;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: flex;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .hero-text {
          flex: 1;
          min-width: 300px;
        }

        .glow-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 102, 255, 0.1));
          color: #00ffff;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 24px;
          border: 1px solid rgba(0, 255, 255, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0); }
        }

        .pulse {
          animation: bounce 1s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .glow-text {
          font-size: clamp(2rem, 7vw, 3.5rem);
          margin-bottom: 16px;
          animation: fadeInUp 0.8s ease;
        }

        .highlight {
          background: linear-gradient(135deg, #00ffff, #0066ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }

        .subtitle {
          font-size: clamp(1.1rem, 4vw, 1.3rem);
          color: #94a3b8;
          margin-bottom: 16px;
        }

        .description {
          color: #cbd5e1;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 12px 28px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00ffff, #0066ff);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 255, 255, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: #00ffff;
          border: 2px solid #00ffff;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(0, 255, 255, 0.1);
        }

        /* Hero Image */
        .hero-image {
          flex: 1;
          min-width: 280px;
          text-align: center;
        }

        .image-wrapper {
          position: relative;
          display: inline-block;
        }

        .glow-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00ffff, #0066ff);
          opacity: 0.5;
          filter: blur(20px);
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .image-wrapper img {
          width: clamp(220px, 50vw, 320px);
          height: clamp(220px, 50vw, 320px);
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #00ffff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 50px rgba(0, 255, 255, 0.3);
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          font-size: 24px;
          animation: float 3s ease-in-out infinite;
        }

        .shape-1 {
          top: 10%;
          right: 0;
          animation-delay: 0s;
        }

        .shape-2 {
          bottom: 20%;
          left: 0;
          animation-delay: 1s;
        }

        .shape-3 {
          top: 40%;
          right: -20px;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* Stats Section */
        .stats-section {
          background: linear-gradient(135deg, #0a0a2a, #0f0f3a);
          padding: 50px 0;
          border-top: 1px solid rgba(0, 255, 255, 0.1);
          border-bottom: 1px solid rgba(0, 255, 255, 0.1);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          text-align: center;
        }

        .stat-card {
          padding: 20px;
          transition: all 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #00ffff, #0066ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 8px;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Common Section Styles */
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-tag {
          color: #00ffff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 12px;
        }

        .section-header h2 {
          font-size: clamp(1.8rem, 6vw, 2.5rem);
          color: white;
          margin-bottom: 20px;
        }

        .section-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #00ffff, #0066ff);
          margin: 0 auto;
          border-radius: 3px;
        }

        /* About Section */
        .about {
          background: #0a0a2a;
          padding: 80px 0;
        }

        .about-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 50px;
        }

        .about-text p {
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .skills-section h3 {
          color: #00ffff;
          margin-bottom: 20px;
        }

        .skill-item {
          margin-bottom: 20px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          color: #cbd5e1;
          font-size: 14px;
        }

        .skill-bar {
          background: #1e293b;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #00ffff, #0066ff);
          border-radius: 4px;
          animation: slideIn 1s ease-out;
        }

        @keyframes slideIn {
          from { width: 0; }
          to { width: var(--width); }
        }

        /* Experience Section */
        .experience {
          background: #0f0f3a;
          padding: 80px 0;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .experience-card {
          background: rgba(10, 10, 42, 0.8);
          backdrop-filter: blur(10px);
          padding: 28px;
          border-radius: 20px;
          border: 1px solid rgba(0, 255, 255, 0.2);
          transition: all 0.3s;
        }

        .experience-card:hover {
          transform: translateY(-8px);
          border-color: #00ffff;
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.1);
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .card-year {
          color: #00ffff;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .experience-card h3 {
          color: white;
          margin-bottom: 6px;
        }

        .card-company {
          color: #94a3b8;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .card-desc {
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 14px;
        }

        /* Projects Section */
        .projects {
          background: #0a0a2a;
          padding: 80px 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8));
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(0, 255, 255, 0.2);
          transition: all 0.3s;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #00ffff;
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.15);
        }

        .project-icon {
          font-size: 4rem;
          text-align: center;
          padding: 40px 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
        }

        .project-content {
          padding: 24px;
        }

        .project-content h3 {
          color: white;
          margin-bottom: 12px;
        }

        .project-content p {
          color: #94a3b8;
          margin-bottom: 16px;
          line-height: 1.6;
          font-size: 14px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .project-tech span {
          background: rgba(0, 255, 255, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          color: #00ffff;
        }

        .project-link {
          color: #00ffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .project-link:hover {
          gap: 12px;
        }

        /* Videos Section */
        .videos {
          background: #0f0f3a;
          padding: 80px 0;
        }

        .video-note {
          color: #94a3b8;
          margin-top: 20px;
          font-size: 14px;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .video-card {
          background: rgba(10, 10, 42, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(0, 255, 255, 0.2);
          transition: all 0.3s;
        }

        .video-card:hover {
          transform: translateY(-5px);
          border-color: #00ffff;
        }

        video {
          width: 100%;
          display: block;
          outline: none;
        }

        .video-info {
          padding: 20px;
        }

        .video-info h3 {
          color: white;
          margin-bottom: 8px;
        }

        .video-info p {
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .mute-badge {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(0, 255, 255, 0.1);
          border-radius: 20px;
          font-size: 11px;
          color: #00ffff;
        }

        /* Contact Section */
        .contact {
          background: #0a0a2a;
          padding: 80px 0;
          text-align: center;
        }

        .contact-text {
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto 50px;
          line-height: 1.8;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .contact-item {
          text-align: center;
          min-width: 200px;
        }

        .contact-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .contact-item h3 {
          color: #00ffff;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .contact-item a, .contact-item p {
          color: #cbd5e1;
          text-decoration: none;
        }

        .social-links {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .social-btn {
          padding: 12px 28px;
          border: 2px solid #00ffff;
          border-radius: 40px;
          text-decoration: none;
          color: #00ffff;
          font-weight: 600;
          transition: all 0.3s;
        }

        .social-btn:hover {
          background: rgba(0, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 30px;
          background: #05051a;
          color: #64748b;
          border-top: 1px solid rgba(0, 255, 255, 0.1);
        }

        .footer p {
          margin-bottom: 8px;
          font-size: 14px;
        }

        /* Responsive */
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .desktop-menu {
            display: none !important;
          }
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .about-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-info {
            gap: 20px;
          }
          .videos-grid {
            grid-template-columns: 1fr;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .experience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default App;