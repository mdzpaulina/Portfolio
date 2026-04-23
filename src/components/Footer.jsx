// src/components/Footer.jsx
import { Heart, MapPin } from 'lucide-react';
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="app-footer">
  <div className="footer-content">
    
    {/* Left Side: Brand & Location */}
    <div className="footer-group">
      <div className="footer-item">
        <Heart size={12} fill="#EBA8B1" />
      </div>
      <span className="footer-divider">|</span>
      <span className="footer-location">Zapopan, MX</span>
    </div>
    
    {/* Right Side: Node Info */}
    <div className="footer-item footer-node-text">
      <MapPin size={12} color="#EBA8B1" />
      <span>Operational_Node_01</span>
    </div>

  </div>
</footer>
    );
}