// components/main/ProjectCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/constants/projects'; // Adjust import path as needed

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-gradient-to-br from-[#0b0b12] to-[#120b2e] rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1.5 border border-gray-800 hover:border-violet-600/50 h-full">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/80 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">
          {project.description}
        </p>

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

        {/* Buttons - All three buttons in a single line with rounded corners */}
        <div className="flex flex-wrap gap-2.5">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] text-center px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 active:scale-95 transform hover:scale-[1.02] shadow-lg hover:shadow-violet-500/25"
            >
              Demo
            </Link>
          )}
          {project.codeUrl && (
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] text-center px-4 py-2.5 border border-violet-800/50 hover:border-violet-600 bg-[#1a1a2e]/50 hover:bg-[#2d2d5a]/50 text-violet-200 hover:text-white rounded-xl transition-all duration-300 active:scale-95 transform hover:scale-[1.02] backdrop-blur-sm"
            >
              GitHub
            </Link>
          )}
          {/* Case Study Button - now in the same row with rounded corners */}
          <Link
            href="#" // Placeholder - will need to implement actual route later
            className="flex-1 min-w-[120px] text-center px-4 py-2.5 border border-violet-800/50 hover:border-violet-600 bg-[#1a1a2e]/50 hover:bg-[#2d2d5a]/50 text-violet-200 hover:text-white rounded-xl transition-all duration-300 active:scale-95 transform hover:scale-[1.02] backdrop-blur-sm opacity-80 cursor-not-allowed"
            onClick={(e) => {
              e.preventDefault();
              alert(`Case study for ${project.title} coming soon!`);
            }}
          >
            Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}