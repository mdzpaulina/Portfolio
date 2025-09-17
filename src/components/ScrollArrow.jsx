// src/components/ScrollArrow.jsx
import './ScrollArrow.css'; 

export const ScrollArrow = () => {
  return (
    <a href="#about" className="scroll-arrow">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 9L12 16L5 9" stroke="#7BB4E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};