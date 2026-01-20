'use client';
import { Project } from '@/constants/projects';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }: { projects: Project[] }) => {
  const displayedProjects = [
    ...projects.slice(0, 3),
    ...projects.slice(3, 6),
    ...Array(Math.max(0, 6 - projects.length)).fill(null).map((_, i) => ({
      id: -(i + 1),
      title: `Coming Soon ${i + 1}`,
      description: 'Project under development',
      technologies: ['Coming soon'],
      imageUrl: '/assets/soon.png'
    }))
  ].slice(0, 6);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Grid adjusts for all breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
