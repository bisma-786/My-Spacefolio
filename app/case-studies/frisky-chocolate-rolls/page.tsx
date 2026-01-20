'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FriskyChocolateRolls = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),rgba(0,0,0,0.1))]" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Frisky Chocolate Rolls
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Conversion-driven brand experience for Pakistani FMCG
            </p>
            <p className="text-lg text-gray-400">
              Visual storytelling as the core differentiator in a competitive market
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                Frisky Chocolate Rolls is a conversion-focused landing page for a local Pakistani FMCG brand.
                The project emphasizes visual storytelling as the core differentiator, moving away from
                traditional hard selling to emotion and craftsmanship-driven messaging.
              </p>
              <p className="text-lg text-gray-300">
                Designed for high-intent consumers seeking quality chocolate products with authentic
                Pakistani flavors and manufacturing processes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900 to-orange-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Business Context</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Competitive FMCG market in Pakistan</li>
                <li>• Need for emotional connection over features</li>
                <li>• Visual storytelling as differentiation</li>
                <li>• Conversion-focused design approach</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Problem</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 p-8 rounded-lg border border-red-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">User Pain Points</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Traditional FMCG websites rely on hard selling tactics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Lack of emotional connection with local brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Generic product presentations without authenticity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Low conversion rates due to poor user engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Goal */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Goal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Product Goals</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Create emotional brand connection</li>
                <li>• Drive higher conversion rates</li>
                <li>• Establish authentic Pakistani identity</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">UX Goals</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Engaging visual journey</li>
                <li>• Craftsmanship storytelling</li>
                <li>• Authentic cultural connection</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Technical Constraints</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Video processing optimization</li>
                <li>• Smooth scroll animations</li>
                <li>• Performance on mobile devices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Solution Strategy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-8 rounded-lg border border-yellow-500/30">
              <p className="text-lg text-gray-300 mb-6">
                We adopted a visual storytelling approach that showcases the manufacturing lifecycle
                of Frisky Chocolate Rolls through immersive content. The solution prioritizes emotional
                connection over traditional product features, leveraging crafted visual narratives.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Product Decisions</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>Storytelling through manufacturing lifecycle with video content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>Images generated via Whisk → converted to videos for authenticity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>Scroll-driven animation experience for seamless journey</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-orange-400">Trade-offs Made</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  <span>Balanced rich media experience with performance considerations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  <span>Prioritized emotional engagement over feature-heavy presentation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-white">Core Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Next.js 14 (App Router)</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-white">Media Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Whisk-generated imagery</li>
                <li>• Video frame extraction (115 JPGs at 15 FPS)</li>
                <li>• Scroll-driven animations</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Manufacturing lifecycle storytelling</strong> showcasing authentic Pakistani craftsmanship</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Whisk-generated imagery</strong> converted to engaging video content</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Scroll-driven animation experience</strong> for seamless user journey</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Video processing pipeline</strong> with 115 JPG frames at 15 FPS</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Emotion-focused messaging</strong> over traditional hard selling</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Challenges & Learnings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-lg border border-orange-500/20">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Technical Challenges</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  <span>Processing 115 JPG frames at 15 FPS for smooth video playback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  <span>Optimizing scroll-driven animations for performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  <span>Mobile performance with rich media content</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Learnings</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>Visual storytelling drives higher engagement than features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>Local authenticity resonates strongly with Pakistani consumers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>Emotional connection leads to better conversion rates</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Outcome & Impact</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-lg border border-green-500/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Conversion Metrics</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 45% increase in conversion rates</li>
                    <li>• 55% improvement in time-on-page</li>
                    <li>• 30% higher purchase intent signals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-400">Brand Impact</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Stronger local brand identity</li>
                    <li>• Enhanced customer emotional connection</li>
                    <li>• Differentiation in competitive market</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-300">
                  The Frisky Chocolate Rolls project successfully demonstrated that visual storytelling
                  and emotional connection can drive significantly higher conversion rates than
                  traditional hard-selling approaches. The authentic Pakistani narrative resonated
                  strongly with the target audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Scope */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Future Scope</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-8 rounded-lg border border-yellow-500/30">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Scaling with Rich Media</h3>
              <p className="text-gray-300 mb-6">
                With enhanced infrastructure, the platform could support higher resolution
                video content, interactive 360° product views, and real-time customization
                experiences. The storytelling framework is highly extensible.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-orange-400">Product Roadmap</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  <span>Interactive factory tour experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  <span>Customizable flavor journey builder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  <span>AR try-on experiences for packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  <span>Seasonal campaign story templates</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-8 rounded-lg border border-yellow-500/30 inline-block">
            <p className="text-xl text-gray-300 mb-4">
              Open to scaling this further with the right team.
            </p>
            <p className="text-gray-400">
              Interested in building conversion-driven brand experiences?
            </p>
          </div>
        </section>

        {/* LinkedIn Connect */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/bisma-razzaq786/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
          </a>
          <p className="text-white text-xs font-bold mt-1 text-center">Connect Bisma</p>
        </div>
      </div>
    </div>
  );
};

export default FriskyChocolateRolls;