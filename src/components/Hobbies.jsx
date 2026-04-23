import { Gamepad2, Palette } from 'lucide-react';
import '../styles/Hobbies.css';

export const Hobbies = () => {
  return (
    <section id="hobbies" className="hobbies-section">
      <div className="logs-header">
        <h3 className="logs-title">Hobbies</h3>
        <span className="logs-subtitle">Leisure_Modules</span>
      </div>

      <div className="hobbies-grid">
    
    {/* Videogames Card */}
    <div className="hobby-card">
        <div className="hobby-header">
        <div className="hobby-icon purple">
            <Gamepad2 size={24} />
        </div>
        <div className="hobby-badge purple">Gaming</div>
        </div>
        
        <h4 className="hobby-title">Videogames</h4>
        <p className="hobby-description">
        Exploring interactive narratives and creative sandbox environments in my downtime.
        </p>
        
        {/* Game Tags */}
        <div className="hobby-tags">
        {['TLOU 2', 'Minecraft', 'Fortnite', 'Zelda'].map(game => (
            <span key={game} className="hobby-tag">
            {game}
            </span>
        ))}
        </div>
    </div>

    {/* Art Card */}
    <div className="hobby-card">
        <div className="hobby-header">
        <div className="hobby-icon pink">
            <Palette size={24} />
        </div>
        <div className="hobby-badge pink">Creative</div>
        </div>
        
        <h4 className="hobby-title">Art</h4>
        <p className="hobby-description">
        Expressing creativity through traditional mediums, turning raw ideas into visual concepts.
        </p>
        
        
    </div>

    </div>
    </section>

  );
};
