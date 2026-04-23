// src/components/Home.jsx
import { FiMail } from 'react-icons/fi';
import { ScrollArrow } from './ScrollArrow';
import { useState, useEffect } from 'react';
import '../styles/Home.css';
import { ArrowDown } from 'lucide-react';

export const Home = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 999);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      
      <div className="home-title-container">
        <h1 className="home-title">
            <span className="home-title-highlight-start"> Hi! I'm </span><span className="home-title-highlight">Paulina{showCursor ? '.' : ' '}</span>
        </h1>
      </div>

      <div className="home-description-container"> 
        <p className="home-description">
          I'm a Computer Science Student from Mexico. I enjoy building efficient and <span className="home-text-highlight">scalable</span> technological solutions, from complex algorithms to interactive web applications. My goal is to contribute to high-impact projects that solve real-world problems through technology.
        </p>
        
        <a 
          href="mailto:mdzlopezp@gmail.com"
          className="home-cta-button"
        >
          <FiMail />
          CONTACT ME
        </a>

      </div>

      <ArrowDown className="bounce" />

    </section>
  );
};

