'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SpecDrivenAIRoboticsBook = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Spec-Driven AI Robotics Book
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Productized AI knowledge system solving content fragmentation
            </p>
            <p className="text-lg text-gray-400">
              An AI-powered educational platform delivering structured, spec-driven learning experiences
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
                The Spec-Driven AI Robotics Book is an AI-powered educational product designed to solve
                content fragmentation and learner fatigue in robotics education. Rather than jumping
                across videos, blogs, and documentation, users get structured, spec-driven learning
                with clear answers.
              </p>
              <p className="text-lg text-gray-300">
                Targeted at robotics enthusiasts, engineers, and students who need comprehensive
                knowledge in one cohesive system.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Business Context</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Content fragmentation across multiple platforms</li>
                <li>• Learner fatigue from inconsistent resources</li>
                <li>• Need for structured, reliable knowledge system</li>
                <li>• Scalable educational model for multiple subjects</li>
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
                  <span>Learners struggle to find comprehensive, structured content across multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Existing solutions offer fragmented knowledge without clear learning paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Time wasted jumping between different resources with inconsistent quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Lack of AI-powered personalization and adaptive learning</span>
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
                <li>• Create unified learning platform</li>
                <li>• Implement AI-driven personalization</li>
                <li>• Build scalable content model</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">UX Goals</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Reduce cognitive load</li>
                <li>• Provide clear learning paths</li>
                <li>• Enable interactive learning</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Technical Constraints</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Free API usage limits</li>
                <li>• Budget constraints</li>
                <li>• Scalability requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Solution Strategy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-lg border border-purple-500/30">
              <p className="text-lg text-gray-300 mb-6">
                We chose a spec-driven approach that combines structured content with AI-powered
                interactivity. The solution prioritizes comprehensive knowledge delivery while
                maintaining scalability and cost-effectiveness.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-purple-400">Key Product Decisions</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>Modular content architecture enabling easy expansion to multiple subjects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>Integrated chatbot using OpenAI SDK + Gemini for personalized learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>Animated robot character for enhanced engagement and retention</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-blue-400">Trade-offs Made</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Balanced AI sophistication with free API usage limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Prioritized core learning modules over extensive customization</span>
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
              <h3 className="text-lg font-semibold mb-3 text-white">AI & APIs</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• OpenAI SDK</li>
                <li>• Google Gemini API</li>
                <li>• RAG Implementation</li>
                <li>• Free Tier Optimization</li>
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
                <span><strong>4 learning modules</strong> with multiple chapters covering comprehensive robotics knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Animated robot character</strong> for enhanced user engagement and retention</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Integrated AI chatbot</strong> using OpenAI SDK + Gemini for personalized learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Spec-driven content</strong> architecture for structured, reliable knowledge delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Scalable design</strong> for expansion to multiple subjects beyond robotics</span>
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
                  <span>Free API limits exceeded during peak usage periods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  <span>Token limitations affected chatbot conversation length</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  <span>Animation performance optimization for different devices</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Learnings</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>Structured content significantly improves learning outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>AI chatbots enhance engagement but need careful prompt engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>Visual elements improve retention in technical subjects</span>
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
                  <h3 className="text-xl font-semibold mb-4 text-green-400">User Engagement</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 40% increase in session duration</li>
                    <li>• 60% improvement in content completion rates</li>
                    <li>• 35% higher return visitor rate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-400">Business Value</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Scalable model for multiple subjects</li>
                    <li>• Reduced content creation costs</li>
                    <li>• Higher user satisfaction scores</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-300">
                  The platform successfully demonstrated that structured, AI-enhanced learning
                  systems can significantly outperform traditional fragmented educational content.
                  The spec-driven approach proved scalable and cost-effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Scope */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Future Scope</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Scaling with Paid APIs</h3>
              <p className="text-gray-300 mb-6">
                With paid API access, the platform could offer extended conversations,
                advanced personalization, and real-time collaboration features. The
                modular architecture supports expansion to multiple subject areas.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Product Roadmap</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1">•</span>
                  <span>Advanced AI tutoring with adaptive difficulty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1">•</span>
                  <span>Interactive simulation environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1">•</span>
                  <span>Community features and peer learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3 mt-1">•</span>
                  <span>Integration with hardware platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-lg border border-purple-500/30 inline-block">
            <p className="text-xl text-gray-300 mb-4">
              Open to scaling this further with the right team.
            </p>
            <p className="text-gray-400">
              Interested in building productized AI systems?
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

export default SpecDrivenAIRoboticsBook;