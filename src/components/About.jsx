// src/components/About.jsx
import '../styles/About.css';
import { ArrowRight, ArrowDown, Sparkles, Heart, Coffee, Palette, Terminal, Gamepad2, Leaf, ShieldCheck } from 'lucide-react';

const slots = [
  { id: 1, icon: null, name: '', color: 'empty' },
  { id: 2, icon: Coffee, name: 'Coffee', color: 'pink' },
  { id: 3, icon: null, name: '', color: 'empty' },
  { id: 4, icon: Palette, name: 'Creativity', color: 'pink' },
  { id: 5, icon: Terminal, name: 'Code', color: 'purple' },
  { id: 6, icon: Gamepad2, name: 'Innovation', color: 'blue' },
  { id: 7, icon: null, name: '', color: 'empty' },
  { id: 8, icon: Leaf, name: 'Growth', color: 'pink' },
  { id: 9, icon: null, name: '', color: 'empty' },
];

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-title-container">
        {/* Left Line */}
        <div className="about-title-line"></div>
        {/* Center Text */}
        <h2 className="about-title">System Identity</h2>
        {/* Right Line */}
        <div className="about-title-line"></div>
      </div>

      <div className="terminal-window">
  
  {/* Header Section */}
  <div className="terminal-header">
    <div className="terminal-dots">
      <div className="dot pink"></div>
      <div className="dot purple"></div>
      <div className="dot blue"></div>
    </div>
    <span className="terminal-filename">kernel_profile.json</span>
  </div>
  
  {/* Code Lines */}
  <div className="code-lines">
    <p><span className="syntax-bracket">{"{"}</span></p>
    
    <p className="indent-1">
      <span className="syntax-key">"identity"</span>: <span className="syntax-string">"Paulina Méndez"</span>,
    </p>

    {/* Stats */}
    
    <p className="indent-1">
      <span className="syntax-key">"stats"</span>: <span className="syntax-bracket">{"{"}</span>
    </p>
    
    <p className="indent-2">
      <span className="syntax-key">"scalability"</span>: <span className="syntax-value">95%</span>,
    </p>
    
    <p className="indent-2">
      <span className="syntax-key">"efficiency"</span>: <span className="syntax-value">92%</span>
    </p>
    
    <p className="indent-1"><span className="syntax-bracket">{"}"}</span>,</p>

    {/* Core Stack */}
    <p className="indent-1">
      <span className="syntax-key">"core_stack"</span>: [
    </p>
    
    <p className="indent-2">
      <span className="syntax-string">"Python"</span>, <span className="syntax-string">"Java"</span>, <span className="syntax-string">"C++"</span>
    </p>
    
    <p className="indent-1">]</p>

    {/* Infrastructure */}
    <p className="indent-1">
      <span className="syntax-key">"infrastructure"</span>: [
    </p>
    
    <p className="indent-2">
      <span className="syntax-string">"Docker"</span>, <span className="syntax-string">"Kubernetes"</span>, <span className="syntax-string">"OCI"</span>
    </p>
    
    <p className="indent-1">]</p>

    {/* Background */}
    <p className="indent-1">
      <span className="syntax-key">"background"</span>: <span className="syntax-bracket">{"{"}</span>
    </p>
    <p className="indent-2">
      <span className="syntax-key">"process"</span>: <span className="syntax-value">"B.S. in Computer Science and Technology"</span>,
    </p>

    <p className="indent-2">
      <span className="syntax-key">"node"</span>: <span className="syntax-value">"ITESM_Guadalajara"</span>,
    </p>

    <p className="indent-2">
      <span className="syntax-key">"status"</span>: <span className="syntax-value">"Compiling..."</span>,
    </p>

    <p className="indent-2">
      <span className="syntax-key">"eta"</span>: <span className="syntax-value">"2027.06"</span>,
    </p>

      <p className="indent-1"><span className="syntax-bracket">{"}"}</span>,</p>
    
    <p><span className="syntax-bracket">{"}"}</span></p>
  </div>

</div>

    <div className="directives-card">
  <div className="directives-header">
  </div>
  <p className="directives-description"> 
    In my free time, I'm nerdy about
  </p>
</div>

<div className="about-title-container">
        {/* Left Line */}
        <div className="about-title-line"></div>
        {/* Center Text */}
        <h2 className="about-title">What defines me</h2>
        {/* Right Line */}
        <div className="about-title-line"></div>
      </div>

    <div className="crafting-bench">
  
  {/* Left: 3x3 Crafting Grid */}
  <div className="grid-container">
    <div className="crafting-grid">
      {slots.map((slot) => (
        <div key={slot.id} className={`slot ${slot.icon ? 'filled' : 'empty'}`}>
          {slot.icon && (
            <>
              <div className={`slot-icon ${slot.color}`}>
                <slot.icon size={28} />
              </div>
              <div className="slot-tooltip">
                {slot.name}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Middle: Arrow Output */}
  <ArrowRight size={40} className="crafting-arrow arrow-desktop" />
  <ArrowDown size={40} className="crafting-arrow arrow-mobile" />

  {/* Right: Result Slot */}
  <div className="result-area">
    <div className="result-box">
      <div className="result-sparkle top-right"><Sparkles size={14} /></div>
      <div className="result-sparkle bottom-left"><Sparkles size={14} /></div>
      <Heart size={44} className="result-icon" fill="#EBA8B1" />
    </div>
    
    {/* Yield Badge */}
    <div className="yield-badge">
      Yield: Paulina
    </div>
  </div>

</div>

{/* Recipe Description */}
<p className="synthesis-desc">
  Synthesized from core logic, digital artistry, exploration drive, and a necessary caffeine extract.
</p>

    </section>
  );
};
