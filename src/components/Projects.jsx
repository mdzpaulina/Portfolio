// src/components/Projects.jsx
import { Carousel } from './Carousel';

const projectsData = [
  { 
    username: 'mdzpaulina', 
    reponame: 'coin-counter', 
    liveUrl: 'https://github.com/mdzpaulina/coin-counter',
    image: './CoinCounter.png'
  },
  {
    username: 'mdzpaulina',
    reponame: 'SudokuSolver',
    liveUrl: 'https://github.com/mdzpaulina/SudokuSolver',
    image: './SudokuSolver.png'
  },
  { 
    username: 'mdzpaulina', 
    reponame: 'PyGLCube', 
    liveUrl: 'https://github.com/mdzpaulina/PyGLCube',
    image: './PyGLCube.png'
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      <Carousel initialProjects={projectsData} />
    </section>
  );
};