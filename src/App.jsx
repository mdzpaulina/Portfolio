import React, { useState, useEffect } from 'react';
import { Terminal, MapPin, Activity, ChevronDown, ChevronUp, Database, Code, GitMerge, Mail, Github, Linkedin, FileText, Compass, Cpu, Layers, ArrowDown, Sparkles, Heart, Trophy, Zap, Target } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [drawDbExpanded, setDrawDbExpanded] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'achievements', 'projects'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (scrollPosition >= top + window.scrollY && scrollPosition < bottom + window.scrollY) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileData = {
    identity: "Paulina Méndez",
    origin: "México",
    status: "Operational",
    core_stack: ["Python", "Java", "C++", "Spring_Boot"],
    technical_stats: {
      scalability: "95%",
      architecture: "90%",
      efficiency: "92%",
      debugging: "88%"
    }
  };

  const navNodes = [
    { id: 'home', label: 'ROOT', coord: '0x00' },
    { id: 'about', label: 'INFO', coord: '0x01' },
    { id: 'experience', label: 'LOGS', coord: '0x02' },
    { id: 'achievements', label: 'RANK', coord: '0x03' },
    { id: 'projects', label: 'BIN', coord: '0x04' }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#2D2424] font-ubuntu selection:bg-[#EBA8B1] selection:text-white pb-24">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#FBFBFC]/95 backdrop-blur-md border-b-2 border-[#EBA8B1]/20 z-[60] px-6 py-4 flex justify-between items-center font-mono">
        <div className="flex items-center gap-3">
          <span className="font-black text-lg tracking-tighter uppercase text-[#EBA8B1]">Paulina Méndez</span>
        </div>

        <div className="hidden md:flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-[#2D2424]/60">
          {['home', 'about', 'experience', 'projects'].map(item => (
            <a key={item} href={`#${item}`} className={`hover:text-[#EBA8B1] transition-colors ${activeSection === item ? 'text-[#EBA8B1] border-b-2 border-[#EBA8B1]' : ''}`}>
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4 pr-4 border-r border-[#EBA8B1]/20">
            <a href="https://github.com/mdzpaulina" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBA8B1] transition-all hover:scale-110"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/paulina-mdz/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBA8B1] transition-all hover:scale-110"><Linkedin size={18} /></a>
          </div>
          <a href="mailto:mdzlopezp@gmail.com" className="flex items-center gap-2 border-2 border-[#EBA8B1] px-5 py-2 text-[10px] uppercase font-black text-[#EBA8B1] hover:bg-[#EBA8B1] hover:text-white transition-all duration-300 rounded-full">
            <FileText size={14} /> Resume
          </a>
        </div>
      </header>

      {/* LEFT NAV */}
      <nav className="hidden xl:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col items-start z-50">
        <div className="font-mono text-[9px] uppercase font-black tracking-[0.3em] mb-12 opacity-40 flex items-center gap-2">
          <Compass size={12} className="text-[#EBA8B1]" /> NAV_SYSTEM
        </div>
        <div className="relative flex flex-col gap-10">
          <div className="absolute left-[7px] top-0 w-[2px] h-full bg-[#EBA8B1]/10 -z-10"></div>
          {navNodes.map((node) => (
            <a key={node.id} href={`#${node.id}`} className="group flex items-center gap-6">
              <div className={`w-4 h-4 border-2 border-[#EBA8B1] transition-all duration-500 flex items-center justify-center rounded-full
                ${activeSection === node.id ? 'bg-[#EBA8B1] scale-125 shadow-[0_0_15px_rgba(235,168,177,0.3)]' : 'bg-[#FBFBFC]'}`}>
                {activeSection === node.id && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <div className={`flex flex-col transition-all duration-500 ${activeSection === node.id ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}>
                <span className="font-mono text-[8px] font-bold text-[#EBA8B1] leading-none">{node.coord}</span>
                <span className="font-black text-[10px] tracking-widest text-[#2D2424]">{node.label}</span>
              </div>
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6">

        {/* HERO */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 pt-20">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-tight text-[#2D2424]">
              Hi! I'm <span className="text-[#EBA8B1] not-italic font-ubuntu font-black tracking-tighter">Paulina{blink ? '.' : '\u00A0'}</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-[#2D2424]/80">
              I'm a Computer Science Student from Mexico. I enjoy building efficient and <span className="text-[#EBA8B1] italic font-serif">scalable</span> technological solutions, from complex algorithms to interactive web applications.
            </p>
          </div>

          <div className="flex flex-col items-center gap-12">
            <a href="mailto:mdzlopezp@gmail.com" className="bg-[#EBA8B1] text-white px-12 py-5 font-mono text-sm uppercase font-black hover:bg-[#2D2424] transition-all duration-500 flex items-center gap-3 rounded-full shadow-xl shadow-[#EBA8B1]/20 group">
              <Mail size={18} className="group-hover:scale-110 transition-transform" /> Contact Me
            </a>
            <ArrowDown className="animate-bounce text-[#EBA8B1] w-8 h-8" />
          </div>
        </section>

        {/* ABOUT / JSON */}
        <section id="about" className="py-24 space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-[#EBA8B1]/20"></div>
            <h3 className="text-2xl font-serif italic text-[#EBA8B1] font-bold">System Identity</h3>
            <div className="h-[2px] flex-1 bg-[#EBA8B1]/20"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 bg-[#1A1A1A] text-[#FBFBFC] p-6 md:p-8 rounded-2xl shadow-[20px_20px_60px_-15px_rgba(235,168,177,0.15)] font-mono text-sm leading-relaxed overflow-x-auto border-t border-white/10">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EBA8B1]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#B39DDB]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#90CAF9]"></div>
                </div>
                <span className="text-[10px] opacity-40 uppercase tracking-widest italic text-[#EBA8B1]">kernel_profile.json</span>
              </div>

              <div className="space-y-1">
                <p><span className="text-[#B39DDB]">{"{"}</span></p>
                <p className="pl-4"><span className="text-[#EBA8B1]">"identity"</span>: <span className="text-[#CE9178]">"{profileData.identity}"</span>,</p>
                <p className="pl-4"><span className="text-[#EBA8B1]">"stats"</span>: {"{"}</p>
                <p className="pl-8"><span className="text-[#EBA8B1]">"scalability"</span>: <span className="text-[#B5CEA8]">{profileData.technical_stats.scalability}</span>,</p>
                <p className="pl-8"><span className="text-[#EBA8B1]">"efficiency"</span>: <span className="text-[#B5CEA8]">{profileData.technical_stats.efficiency}</span></p>
                <p className="pl-4">{"}"},</p>
                <p className="pl-4"><span className="text-[#EBA8B1]">"core_stack"</span>: [</p>
                <p className="pl-8">
                  {profileData.core_stack.map((s, i) => (
                    <span key={s} className="text-[#CE9178]">"{s}"{i < profileData.core_stack.length - 1 ? ', ' : ''}</span>
                  ))}
                </p>
                <p className="pl-4">]</p>
                <p><span className="text-[#B39DDB]">{"}"}</span></p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#EBA8B1]/5 p-8 rounded-2xl border-l-4 border-[#EBA8B1]">
                <p className="font-serif italic text-xl text-[#2D2424]/90 leading-snug">
                  "I approach backend architecture like a high-performance engine: every line of code must contribute to the overall momentum."
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['SRE', 'Java', 'Cloud Native', 'Spring'].map(t => (
                  <span key={t} className="px-4 py-1.5 bg-white text-[#EBA8B1] text-[10px] font-black uppercase tracking-widest rounded-full border-2 border-[#EBA8B1]/10 shadow-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 space-y-10">
          <div className="flex justify-between items-end border-b-2 border-[#EBA8B1]/20 pb-4">
            <h3 className="text-3xl font-serif italic text-[#2D2424] font-bold">System Logs</h3>
            <span className="font-mono text-[10px] text-[#EBA8B1] font-black uppercase tracking-widest">Process: ORACLE_INTERN</span>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-[0_15px_40px_-15px_rgba(235,168,177,0.1)] border border-[#EBA8B1]/5">
              <div className="font-mono text-[12px] space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="text-[#EBA8B1]/40">[2025.06]</span>
                  <span className="text-[#B39DDB] font-bold italic">INIT</span>
                  <span className="font-bold text-[#2D2424]">Joined Database Support Team @ Oracle</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#EBA8B1]/40">[2025.07]</span>
                  <span className="text-[#EBA8B1] font-bold flex items-center gap-2">✨ SUCCESS</span>
                  <span className="opacity-90 font-medium">Reduced scoping latency by 22% via APEX automation.</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#EBA8B1]/40">[2025.09]</span>
                  <span className="text-[#EBA8B1] font-bold flex items-center gap-2">✨ SUCCESS</span>
                  <span className="opacity-90 font-medium">Optimized internal knowledge retrieval systems.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="py-24 space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-[#EBA8B1]/20"></div>
            <h3 className="text-2xl font-serif italic text-[#EBA8B1] font-bold">Quest Achievements</h3>
            <div className="h-[2px] flex-1 bg-[#EBA8B1]/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[11px] uppercase tracking-wider">
            <div className="bg-white p-6 rounded-2xl border border-[#EBA8B1]/10 flex flex-col items-center text-center space-y-4 hover:border-[#EBA8B1] transition-colors">
              <div className="p-3 bg-[#EBA8B1]/10 rounded-full text-[#EBA8B1]">
                <Zap size={20} />
              </div>
              <div>
                <div className="font-black text-[#2D2424]">Efficiency_Master</div>
                <div className="opacity-40 italic mt-1">Achieved 22% latency reduction in enterprise tools.</div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center space-y-4 text-white">
              <div className="p-3 bg-white/10 rounded-full text-[#EBA8B1]">
                <Trophy size={20} />
              </div>
              <div>
                <div className="font-black">Oracle_Endurance</div>
                <div className="opacity-40 italic mt-1">Maintained 100% service continuity for mission-critical DBs.</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EBA8B1]/10 flex flex-col items-center text-center space-y-4 hover:border-[#EBA8B1] transition-colors">
              <div className="p-3 bg-[#EBA8B1]/10 rounded-full text-[#EBA8B1]">
                <Target size={20} />
              </div>
              <div>
                <div className="font-black text-[#2D2424]">AURA_Architect</div>
                <div className="opacity-40 italic mt-1">Designed automated K8s auditing logic for complex clusters.</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS / EXECUTABLES */}
        <section id="projects" className="py-24 space-y-12">
          <div className="flex justify-between items-end border-b-2 border-[#EBA8B1]/20 pb-4">
            <h3 className="text-3xl font-serif italic text-[#2D2424] font-bold">Executables</h3>
            <span className="font-mono text-[10px] text-[#EBA8B1] font-black uppercase tracking-widest">Bin_Index</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AURA */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#EBA8B1]/5 hover:border-[#EBA8B1]/20 transition-all duration-500 hover:shadow-2xl group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#EBA8B1]/10 rounded-2xl text-[#EBA8B1]">
                  <Activity size={24} />
                </div>
                <div className="px-3 py-1 bg-[#FBFBFC] text-[#EBA8B1] font-mono text-[9px] font-black uppercase rounded-md border-2 border-[#EBA8B1]/10">Alpha</div>
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">A.U.R.A</h4>
              <p className="text-sm font-medium opacity-70 leading-relaxed mb-6">Adaptive Usage and Resource Agent for automated Kubernetes auditing and optimization.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EBA8B1] animate-pulse"></div>
                  <span className="font-mono text-[10px] font-black text-[#EBA8B1] tracking-widest">BUILDING...</span>
                </div>
                <a href="https://github.com/mdzpaulina/aura" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] font-black text-[#2D2424]/50 hover:text-[#EBA8B1] transition-colors">
                  <Github size={14} /> View Repo
                </a>
              </div>
            </div>

            {/* drawDB_Patch */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#EBA8B1]/5 hover:border-[#EBA8B1]/20 transition-all duration-500 hover:shadow-2xl group cursor-pointer" onClick={() => setDrawDbExpanded(!drawDbExpanded)}>
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-[#B39DDB]/5 rounded-2xl text-[#B39DDB]">
                  <Database size={24} />
                </div>
                {drawDbExpanded ? <ChevronUp size={24} className="text-[#EBA8B1]" /> : <ChevronDown size={24} className="text-[#EBA8B1]" />}
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">drawDB_Patch</h4>
              <p className="text-sm font-medium opacity-70 leading-relaxed">Critical open-source data-integrity fix for high-volume diagram exports.</p>
              <div className={`overflow-hidden transition-all duration-500 ${drawDbExpanded ? 'max-h-60 mt-8' : 'max-h-0'}`}>
                <div className="p-6 bg-[#FBFBFC] rounded-2xl font-mono text-[11px] italic border-l-4 border-[#EBA8B1]">
                  "Optimized buffer management in ZIP streams to ensure schema integrity at scale."
                </div>
              </div>
            </div>

            {/* coin-counter */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#EBA8B1]/5 hover:border-[#EBA8B1]/20 transition-all duration-500 hover:shadow-2xl group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#B39DDB]/10 rounded-2xl text-[#B39DDB]">
                  <Cpu size={24} />
                </div>
                <div className="px-3 py-1 bg-[#FBFBFC] text-[#B39DDB] font-mono text-[9px] font-black uppercase rounded-md border-2 border-[#B39DDB]/10">Stable</div>
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Coin Counter</h4>
              <p className="text-sm font-medium opacity-70 leading-relaxed mb-6">Computer vision tool for detecting and counting coins using image processing algorithms.</p>
              <div className="flex items-center justify-end">
                <a href="https://github.com/mdzpaulina/coin-counter" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] font-black text-[#2D2424]/50 hover:text-[#EBA8B1] transition-colors">
                  <Github size={14} /> View Repo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full border-t-2 border-[#EBA8B1]/10 bg-[#FBFBFC]/95 backdrop-blur-md z-[60] py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#EBA8B1]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart size={12} fill="#EBA8B1" />
              <span>Runtime_Elegant</span>
            </div>
            <span className="opacity-20 hidden sm:inline text-[#2D2424]">|</span>
            <span className="hidden sm:inline text-[#2D2424]/60">Zapopan, MX</span>
          </div>
          <div className="flex items-center gap-2 text-[#2D2424]/60">
            <MapPin size={12} className="text-[#EBA8B1]" />
            <span>Operational_Node_01</span>
          </div>
        </div>
      </footer>

      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;
