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
            const response = await fetch(`https://api.github.com/repos/${p.username}/${p.reponame}`);
            const repoData = await response.json();
            return { ...p, ...repoData };
          })
        );
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to fetch project data:", error);
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
  
  const currentProject = projects[currentIndex];

  return (
    <div className="h-[500px] w-full max-w-4xl mx-auto relative group">
      <div
        style={{ backgroundImage: `url(${currentProject.image})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-500"
      >
        <div className="w-full h-full rounded-2xl flex flex-col justify-end p-12 bg-black/60">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-2">{currentProject.name}</h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto">{currentProject.description}</p>
            <div className="flex justify-center items-center gap-6">
              {currentProject.language && (
                <span className="bg-cyan-900/70 text-cyan-300 text-sm font-semibold px-4 py-1 rounded-full">
                  {currentProject.language}
                </span>
              )}
              <div className="flex items-center gap-2 text-gray-300">
                <FiStar />
                <span>{currentProject.stargazers_count}</span>
              </div>
              <div className="flex gap-4">
                <a href={currentProject.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  <FiGithub size={24} />
                </a>
                <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  <FiExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={goToPrevious}>
        <FiChevronLeft size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={goToNext}>
        <FiChevronRight size={30} />
      </div>
      
      {/* Bottom Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {projects.map((_, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`w-8 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/30'}`}></div>
        ))}
      </div>
    </div>
  );
};