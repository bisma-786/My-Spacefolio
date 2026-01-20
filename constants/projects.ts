// constants/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  comingSoon?: boolean;
};

const projectsData: Project[] = [
  {
    id: 0,
    title: "Spec Driven Ai Robotis Book",
    description: "An AI-powered robotics book with specifications and implementation guides.",
    technologies: ["claude", "speckit", "vscode", "cohere", "qdrant", "nextjs", "tailwindcss", "vercel"],
    imageUrl: "/robo.png",
    liveUrl: "https://ai-book-hackathon1.vercel.app/",
    codeUrl: "https://github.com/bisma-786/hackathon",
    featured: true
  },
  {
    id: 1,
    title: "Frisky Choco Rolls",
    description: "Interactive chocolate rolls ordering and customization platform.",
    technologies: ["nextjs", "node", "html", "claude", "ezgif", "whisk", "vs code", "vercel"],
    imageUrl: "/friskty.png",
    liveUrl: "https://chocoliciouss.vercel.app/",
    codeUrl: "https://github.com/bisma-786/chocolicious",
    featured: true
  },
  {
    id: 2,
    title: "Lumina Clinic Site",
    description: "Modern clinic website with appointment booking and patient management.",
    technologies: ["vite", "tailwindcss", "nextjs", "whisk", "vs code", "claude", "vercel"],
    imageUrl: "/clinic.png",
    liveUrl: "https://clinic-fawn-six.vercel.app/",
    codeUrl: "https://github.com/bisma-786/MedicalSite",
    featured: true,
 
  },
  {
    id: 3,
    title: "AIDD Property Image Enhancer",
    description: "AI-powered property image enhancement tool for real estate professionals.",
    technologies: ["claude", "Typescript", "html", "gemini", "vscode", "vercel"],
    imageUrl: "/listinglift.png",
    liveUrl: "https://696f5f6d1051f8a887b9b4eb--quiet-pegasus-cfaf14.netlify.app/",
    codeUrl: "https://github.com/bisma-786/ListingLiftAi",
    featured: true,
   
  },
  {
    id: 4,
    title: "Coming Very Soon!",
    description: "Coming Very Soon",
    technologies: ["Coming", "Soon",],
    imageUrl: "/comingsoon.png",
    liveUrl: "/",
    codeUrl: "/",
    featured: true,
   comingSoon: true
  },
  {
    id: 5,
    title: "Coming Very Soon!",
    description: "Coming Very Soon",
    technologies: ["Coming", "Soon",],
    imageUrl: "/comingsoon.png",
    liveUrl: "/",
    codeUrl: "/",
    featured: true,
   comingSoon: true
  },

  // Add more projects
];

export default projectsData;