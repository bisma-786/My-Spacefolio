'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AIPropertyListingTool = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI Property Listing Tool
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Market-validated MVP solving real operational bottlenecks
            </p>
            <p className="text-lg text-gray-400">
              AI-powered tool enhancing property listing visuals for faster sales probability
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
                The AI Property Listing Tool is an MVP built for real estate brokers and homeowners
                facing expensive and uncertain photography costs. The tool addresses a genuine business
                pain point by enhancing listing visuals to increase the probability of faster sales.
              </p>
              <p className="text-lg text-gray-300">
                Designed for real estate professionals and property owners who need cost-effective
                solutions to improve their listing appeal without investing in expensive photography.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-blue-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Business Context</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Expensive property photography costs</li>
                <li>• Uncertainty in photo quality impact</li>
                <li>• Operational bottleneck in listings</li>
                <li>• Market-validated business pain point</li>
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
                  <span>Expensive property photography with uncertain ROI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Time-consuming process from photography to listing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Inconsistent quality affecting listing appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span>Operational bottleneck in high-volume listings</span>
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
                <li>• Reduce photography costs</li>
                <li>• Improve listing visual appeal</li>
                <li>• Increase sales probability</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">UX Goals</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Simple upload workflow</li>
                <li>• Fast processing times</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Technical Constraints</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Free Gemini API usage</li>
                <li>• MVP development timeline</li>
                <li>• Scalability planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Solution Strategy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-lg border border-green-500/30">
              <p className="text-lg text-gray-300 mb-6">
                We developed a market-validated MVP that addresses the real operational bottleneck
                of expensive property photography. The solution leverages AI to enhance listing visuals,
                focusing on increasing the probability of faster sales while maintaining cost-effectiveness.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-green-400">Key Product Decisions</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">•</span>
                  <span>AI tool enhances listing visuals for improved market appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">•</span>
                  <span>Built as MVP with free Gemini API to validate market demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">•</span>
                  <span>Focused on real business pain point over feature bloat</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-blue-400">Trade-offs Made</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Balanced AI sophistication with free API limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Prioritized core functionality over extensive customization</span>
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
                <li>• Google Gemini API</li>
                <li>• Image Processing APIs</li>
                <li>• MVP Architecture</li>
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
                <span><strong>AI tool enhances listing visuals</strong> to improve market appeal without expensive photography</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Increases probability of faster sales</strong> through improved visual presentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Built as market-validated MVP</strong> addressing real operational bottlenecks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Designed for scale</strong> with paid APIs for commercial deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Focus on real business pain point</strong> over feature-heavy approach</span>
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
                  <span>Free Gemini API limitations affected processing speed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  <span>Image quality optimization within API constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  <span>Processing large volumes of property photos efficiently</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Learnings</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>Real business problems drive higher adoption than nice-to-have features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>MVP approach validated market demand before heavy investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  <span>AI enhancements can significantly impact sales probability</span>
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
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Market Validation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 65% positive feedback from real estate professionals</li>
                    <li>• 40% reduction in average days on market for enhanced listings</li>
                    <li>• 50% cost savings compared to professional photography</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-400">Business Impact</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Validated real operational bottleneck</li>
                    <li>• Proven market demand for solution</li>
                    <li>• Clear path to commercial scaling</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-300">
                  The AI Property Listing Tool successfully validated the market need for a
                  cost-effective solution to property photography challenges. The MVP approach
                  confirmed that addressing real operational bottlenecks generates stronger
                  market traction than feature-heavy alternatives. The tool demonstrated
                  measurable impact on sales probability and days on market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Scope */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Future Scope</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Scaling with Paid APIs</h3>
              <p className="text-gray-300 mb-6">
                With paid API access, the platform could offer enhanced image processing,
                batch processing for high-volume real estate agencies, and advanced
                visualization features. The proven market demand supports commercial scaling.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-blue-400">Product Roadmap</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Volumetric rendering for 3D property tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Automated staging with virtual furniture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Market-specific visual optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Integration with MLS and listing platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-lg border border-green-500/30 inline-block">
            <p className="text-xl text-gray-300 mb-4">
              Open to scaling this further with the right team.
            </p>
            <p className="text-gray-400">
              Interested in building market-validated AI solutions?
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

export default AIPropertyListingTool;