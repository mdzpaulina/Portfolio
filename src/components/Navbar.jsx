// src/components/Navbar.jsx
import { FiMail, FiGithub, FiLinkedin, FiEdit } from 'react-icons/fi';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1A1B3D] py-3 sm:py-5 px-4 sm:px-8 flex justify-between items-center">
      
      <div className="flex items-center gap-4 sm:gap-8">
        <h1 className="text-lg sm:text-xl font-bold text-white">Paulina Méndez</h1>
        <div className="navbar-left">
          <a href="#home" className="text-gray-300 hover:text-[#7BB4E3] transition-colors">Home</a>
          <a href="#about" className="text-gray-300 hover:text-[#7BB4E3] transition-colors">About</a>
          <a href="#experience" className="text-gray-300 hover:text-[#7BB4E3] transition-colors">Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-[#7BB4E3] transition-colors">Projects</a>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <a href="mailto:mdzlopezp@gmail.com" className="text-gray-300 hover:text-[#7BB4E3] transition-colors">
          <FiMail size={20} className="sm:w-[22px] sm:h-[22px]" />
        </a>
        <a href="https://github.com/mdzpaulina" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#7BB4E3] transition-colors">
          <FiGithub size={20} className="sm:w-[22px] sm:h-[22px]" />
        </a>
        <a href="https://www.linkedin.com/in/paulina-mdz/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#7BB4E3] transition-colors">
          <FiLinkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
        </a>
        <a href="/Paulina_Méndez_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#7BB4E3] transition-colors flex items-center gap-1 border border-gray-600 px-2 py-1 sm:px-3 rounded-md hover:bg-gray-700">
          <FiEdit size={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="text-xs sm:text-sm hidden sm:inline">Resume</span>
        </a>
      </div>    
      
    </nav>
  );
};