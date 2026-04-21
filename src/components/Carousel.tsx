import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiGithub, FiStar } from 'react-icons/fi';
import type { Project } from '../data/projects';
import { useGitHubRepos } from '../hooks/useGitHubRepos';

interface CarouselProps {
  initialProjects: Project[];
}

export const Carousel = ({ initialProjects }: CarouselProps) => {
  const { repos: projects, loading } = useGitHubRepos(initialProjects);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading || projects.length === 0) {
    return (
      <div className="h-[500px] w-full max-w-4xl mx-auto rounded-2xl bg-gray-800 flex items-center justify-center text-white">
        Loading projects...
      </div>
    );
  }

  const goToPrevious = () => setCurrentIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goToNext = () => setCurrentIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  const current = projects[currentIndex];

  return (
    <div className="h-[480px] sm:h-[500px] w-full max-w-4xl mx-auto relative group">
      <div
        style={{ backgroundImage: `url(${current.image})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-500"
      >
        <div className="w-full h-full rounded-2xl flex flex-col justify-end p-6 sm:p-12 bg-black/60">
          <div className="text-white text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">{current.name}</h2>
            <p className="text-md sm:text-lg mb-4 max-w-2xl mx-auto">{current.description}</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4 mb-4">
              {current.language && (
                <span className="bg-cyan-900/70 text-cyan-300 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full">
                  {current.language}
                </span>
              )}
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <FiStar />
                  <span>{current.stargazers_count}</span>
                </div>
                <a href={current.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  <FiGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        aria-label="Previous project"
      >
        <FiChevronLeft size={30} />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        aria-label="Next project"
      >
        <FiChevronRight size={30} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {projects.map((_, slideIndex) => (
          <button
            key={slideIndex}
            type="button"
            onClick={() => setCurrentIndex(slideIndex)}
            aria-label={`Go to slide ${slideIndex + 1}`}
            className={`w-8 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
