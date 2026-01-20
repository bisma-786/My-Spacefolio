'use client';
import Link from 'next/link';

export default function TallyNewsletter() {
  return (
    <div className="w-full flex justify-center mt-6 md:mt-8">
      <Link
        href="https://www.linkedin.com/in/bisma-razzaq786/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700
          text-white font-semibold rounded-xl
          px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5
          text-base sm:text-lg md:text-xl
          whitespace-nowrap shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50
          transform hover:scale-105 active:scale-95 transition-all duration-300
          flex items-center justify-center gap-2
          border border-violet-500/30 hover:border-violet-400/50
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        Connect on LinkedIn
      </Link>
    </div>
  );
}
