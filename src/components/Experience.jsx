// src/components/Experience.jsx
import "../styles/Experience.css";


export const Experience = () => {
  return (
    <section id="experience" className="system-logs-section">
  
  {/* Header */}
  <div className="logs-header">
    <h3 className="logs-title">System Logs</h3>
    <span className="logs-subtitle">Process: ORACLE_INTERN</span>
  </div>
  
  {/* Card */}
  <div className="logs-card">
    <div className="logs-list">
      
      <div className="log-entry">
        <span className="log-date">[2025.06]</span>
        <span className="log-status-init">INIT</span>
        <span className="log-message-bold">Joined Database Support Team @ Oracle</span>
      </div>
      
      <div className="log-entry">
        <span className="log-date">[2025.07]</span>
        <span className="log-status-success">✨ SUCCESS</span>
        <span className="log-message">Optimized internal knowledge retrieval systems.</span>
      </div>
      
      <div className="log-entry">
        <span className="log-date">[2026.04]</span>
        <span className="log-status-success">✨ SUCCESS</span>
        <span className="log-message">Developed an AI-based diagnostic workflow to reduce manual troubleshooting effort.</span>
      </div>

    </div>
  </div>
  
</section>
  );
};