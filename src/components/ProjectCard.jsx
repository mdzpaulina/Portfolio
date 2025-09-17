// src/components/ProjectCard.jsx
import { useEffect, useState } from 'react';
import { FiStar, FiGithub, FiExternalLink } from 'react-icons/fi'; 

export const ProjectCard = ({ username, reponame, liveUrl }) => {
    const [ repoData, setRepoData ] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchRepoData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/repos/${username}/${reponame}`);
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error("Error fetching repo data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [username, reponame]); 

  if (loading) {
    return <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center text-white">Loading project...</div>;
  }

  if (!repoData || repoData.message) {
     return <div className="bg-gray-800 h-48 rounded-lg flex items-center justify-center text-red-400">Failed to load project.</div>;
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg h-full flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{repoData.name}</h3>
          <div className="flex items-center gap-2 text-gray-400">
            <FiStar />
            <span>{repoData.stargazers_count}</span>
          </div>
        </div>
        <p className="text-gray-400 mb-4 text-sm">{repoData.description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xs font-semibold text-cyan-400">{repoData.language}</span>
        <div className="flex items-center gap-4">
          <a href={repoData.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
            <FiGithub size={20} />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};