// src/components/Carousel.jsx
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

export const Carousel = ({ initialProjects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProjectData = async () => {
      try {
        setLoading(true);
        const projectsData = await Promise.all(
          initialProjects.map(async (p) => {
            try {
              const response = await fetch(`https://api.github.com/repos/${p.username}/${p.reponame}`);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const repoData = await response.json();
              return { ...p, ...repoData };
            } catch (error) {
              console.warn(`Failed to fetch data for ${p.reponame}:`, error);
              // Return project with fallback data
              return {
                ...p,
                name: p.reponame,
                description: `View ${p.reponame} on GitHub`,
                stargazers_count: 0,
                language: 'Unknown',
                html_url: `https://github.com/${p.username}/${p.reponame}`
              };
            }
          })
        );
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to fetch project data:", error);
        // Fallback to initial project data
        setProjects(initialProjects.map(p => ({
          ...p,
          name: p.reponame,
          description: `View ${p.reponame} on GitHub`,
          stargazers_count: 0,
          language: 'Unknown',
          html_url: `https://github.com/${p.username}/${p.reponame}`
        })));
      } finally {
        setLoading(false);
      }
    };
    fetchAllProjectData();
  }, [initialProjects]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (loading) {
    return <div className="h-[500px] w-full max-w-4xl mx-auto rounded-2xl bg-gray-800 flex items-center justify-center text-white">Loading projects...</div>;
  }
  
  if (!projects || projects.length === 0) {
    return <div className="h-[500px] w-full max-w-4xl mx-auto rounded-2xl bg-gray-800 flex items-center justify-center text-white">No projects available</div>;
  }
  
  const currentProject = projects[currentIndex];

  return (
    <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-4xl mx-auto relative group">
      <div
        style={{ backgroundImage: `url(${currentProject?.image || 'https://via.placeholder.com/800x500.png?text=Project+Image'})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-500"
      >
        <div className="w-full h-full rounded-2xl flex flex-col justify-end p-4 sm:p-8 md:p-12 bg-black/60">
          <div className="text-white text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{currentProject?.name || 'Project'}</h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 max-w-2xl mx-auto">{currentProject?.description || 'No description available'}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
              {currentProject?.language && (
                <span className="bg-cyan-900/70 text-cyan-300 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full">
                  {currentProject.language}
                </span>
              )}
              <div className="flex items-center gap-2 text-gray-300">
                <FiStar />
                <span className="text-sm sm:text-base">{currentProject?.stargazers_count || 0}</span>
              </div>
              <div className="flex gap-4">
                <a href={currentProject?.html_url || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  <FiGithub size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href={currentProject?.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  <FiExternalLink size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows - Always visible on mobile for better touch interaction */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-5 text-2xl rounded-full p-1 sm:p-2 bg-black/30 text-white cursor-pointer sm:hidden sm:group-hover:block" onClick={goToPrevious}>
        <FiChevronLeft size={24} className="sm:w-[30px] sm:h-[30px]" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-5 text-2xl rounded-full p-1 sm:p-2 bg-black/30 text-white cursor-pointer sm:hidden sm:group-hover:block" onClick={goToNext}>
        <FiChevronRight size={24} className="sm:w-[30px] sm:h-[30px]" />
      </div>
      
      {/* Desktop hover arrows */}
      <div className="hidden sm:group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={goToPrevious}>
        <FiChevronLeft size={30} />
      </div>
      <div className="hidden sm:group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={goToNext}>
        <FiChevronRight size={30} />
      </div>
      
      {/* Bottom Indicators */}
      <div className="absolute bottom-2 sm:bottom-5 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {projects.map((_, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`w-6 sm:w-8 h-1 sm:h-1.5 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/30'}`}></div>
        ))}
      </div>
    </div>
  );
};