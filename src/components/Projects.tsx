import { Carousel } from './Carousel';
import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      <Carousel initialProjects={projects} />
    </section>
  );
};
