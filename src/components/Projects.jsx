// src/components/Projects.jsx
import { Activity, Database, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    username: 'mdzpaulina',
    reponame: 'aura',
    liveUrl: 'https://github.com/mdzpaulina/aura',
  },
  { 
    username: 'mdzpaulina', 
    reponame: 'DrawDB', 
    liveUrl: 'https://github.com/mdzpaulina/drawdb',
    isOpenSource: true,
  },
  { 
    username: 'mdzpaulina', 
    reponame: 'coin-counter', 
    liveUrl: 'https://github.com/mdzpaulina/coin-counter',
  },
  { 
    username: 'mdzpaulina', 
    reponame: 'PyGLCube', 
    liveUrl: 'https://github.com/mdzpaulina/PyGLCube',
  }
];

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectsFromGithub = async () => {
      try {
        setLoading(true);
        const projectsWithData = await Promise.all(
          projectsData.map(async (project) => {
            const response = await fetch(
              `https://api.github.com/repos/${project.username}/${project.reponame}`
            );
            const data = await response.json();
            return { ...project, ...data };
          })
        );
        setProjects(projectsWithData);
      } catch (error) {
        console.error('Error fetching projects from GitHub:', error);
        setProjects(projectsData);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsFromGithub();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h3 className="projects-title">Executables</h3>
          <span className="projects-subtitle">Bin_Index</span>
        </div>
        <div className="projects-grid">
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
  
      {/* Section Header */}
      <div className="projects-header">
        <h3 className="projects-title">Executables</h3>
        <span className="projects-subtitle">Bin_Index</span>
      </div>

      {/* Cards Grid */}
      <div className="projects-grid">
        
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            onClick={() => window.open(project.html_url, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-top-bar">
              <div className={`card-icon ${index === 0 ? 'pink' : 'purple'}`}>
                {index === 0 ? <Activity size={24} /> : <Database size={24} />}
              </div>
              {index === 0 && <div className="card-badge">Alpha</div>}
              {project.isOpenSource && <div className="card-badge">Open Source Contribution</div>}
              {index === 1 && !project.isOpenSource && <ChevronDown size={24} color="#EBA8B1" />}
            </div>
            <h4 className="card-title">{project.name}</h4>
            <p className="card-description" style={{ marginBottom: index === 0 ? '1rem' : 0 }}>
              {project.description || 'No description available'}
            </p>
            {index === 0 && (
              <div className="status-bar">
                <div className="status-dot"></div>
                <span className="status-text">BUILDING...</span>
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
};