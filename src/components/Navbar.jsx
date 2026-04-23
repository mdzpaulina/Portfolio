import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'hobbies'];
      let currentSection = 'home';
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section top is within viewport
          if (rect.top <= 150 && rect.bottom >= 0) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'about', 'experience', 'projects', 'hobbies'];

  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        <h1 className="nav-title">PAULINA MÉNDEZ</h1>
        <div className="nav-links">
          {navLinks.map(item => (
            <a 
              key={item}
              href={`#${item}`}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      <div className="nav-socials">
        <a href="https://github.com/mdzpaulina" target="_blank" rel="noopener noreferrer" className="nav-social-link">
          <FiGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/paulina-mdz/" target="_blank" rel="noopener noreferrer" className="nav-social-link">
          <FiLinkedin size={20} />
        </a>
        <a href="/Paulina_Méndez_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          <FileText size={14} /> RESUME
        </a>
      </div>    
      
    </nav>
  );
};

