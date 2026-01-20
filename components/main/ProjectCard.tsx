


import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/constants/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-gradient-to-br from-[#0b0b12] to-[#120b2e] rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1.5 border border-gray-800 hover:border-violet-600/50 flex flex-col w-full max-w-md mx-auto h-full">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/80 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {project.title}
          </h3>
          {project.comingSoon && (
            <span className="ml-2 px-2.5 py-0.5 bg-red-500/80 text-red-100 text-xs font-bold rounded-full">
              COMING SOON!
            </span>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-[#1a1a2e] border border-violet-900/50 text-violet-200 rounded-lg backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - All three buttons in a single line */}
      <div className="mt-auto flex flex-wrap gap-2.5 w-full">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] text-center px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 active:scale-95 transform hover:scale-[1.02] shadow-lg hover:shadow-violet-500/25 text-sm font-medium"
            tabIndex={0}
          >
            Demo
          </Link>
        )}
        {project.codeUrl && (
          <Link
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] text-center px-4 py-2.5 border border-violet-800/50 hover:border-violet-600 bg-[#1a1a2e]/50 hover:bg-[#2d2d5a]/50 text-violet-200 hover:text-white rounded-xl transition-all duration-300 active:scale-95 transform hover:scale-[1.02] backdrop-blur-sm text-sm font-medium"
            tabIndex={0}
          >
            GitHub
          </Link>
        )}
        {/* Case Study Button - now in the same row */}
        {!(project.comingSoon || project.id >= 4) && (
          <Link
            href={
              project.id === 0 ? "/case-studies/spec-driven-ai-robotics-book" :
              project.id === 1 ? "/case-studies/frisky-chocolate-rolls" :
              project.id === 2 ? "/case-studies/lumina-clinics" :
              project.id === 3 ? "/case-studies/ai-property-listing-tool" :
              "#"
            }
            className="flex-1 min-w-[120px] text-center px-4 py-2.5 border border-violet-800/50 hover:border-violet-600 bg-[#1a1a2e]/50 hover:bg-[#2d2d5a]/50 text-violet-200 hover:text-white rounded-xl transition-all duration-300 active:scale-95 transform hover:scale-[1.02] backdrop-blur-sm text-sm font-medium"
          >
            Case Study
          </Link>
        )}
      </div>
      </div>
    </div>
  );
}
