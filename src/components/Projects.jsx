// src/components/Projects.jsx
import { Carousel } from './Carousel';

const projectsData = [
  { 
    username: 'mdzpaulina', 
    reponame: 'coin-counter', 
    liveUrl: 'https://github.com/mdzpaulina/coin-counter',
    image: 'https://via.placeholder.com/300x200.png?text=Coin+Counter'
  },
  {
    username: 'mdzpaulina',
    reponame: 'SudokuSolver',
    liveUrl: 'https://github.com/mdzpaulina/SudokuSolver',
    image: 'https://via.placeholder.com/300x200.png?text=Sudoku+Solver'
  },
  { 
    username: 'mdzpaulina', 
    reponame: 'PyGLCube', 
    liveUrl: 'https://github.com/mdzpaulina/PyGLCube',
    image: 'https://via.placeholder.com/300x200.png?text=PyGLCube'
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