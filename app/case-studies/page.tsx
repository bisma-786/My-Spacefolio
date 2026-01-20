'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 0,
      title: 'Spec-Driven AI Robotics Book',
      description: 'Productized AI knowledge system solving content fragmentation and learner fatigue',
      category: 'AI Education',
      gradient: 'from-purple-500 to-pink-500',
      path: '/case-studies/spec-driven-ai-robotics-book'
    },
    {
      id: 1,
      title: 'Frisky Chocolate Rolls',
      description: 'Conversion-driven brand experience for Pakistani FMCG with visual storytelling',
      category: 'E-commerce',
      gradient: 'from-yellow-500 to-orange-500',
      path: '/case-studies/frisky-chocolate-rolls'
    },
    {
      id: 2,
      title: 'Lumina Clinics',
      description: 'Trust-first healthcare funnel connecting Weight Loss, IVF, and HRT services',
      category: 'Healthcare',
      gradient: 'from-blue-500 to-teal-500',
      path: '/case-studies/lumina-clinics'
    },
    {
      id: 3,
      title: 'AI Property Listing Tool',
      description: 'MVP solving real estate photography bottlenecks with AI enhancement',
      category: 'PropTech',
      gradient: 'from-green-500 to-blue-500',
      path: '/case-studies/ai-property-listing-tool'
    }
  ];

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
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Real-world projects solving complex business challenges
            </p>
            <p className="text-lg text-gray-400">
              Deep dives into product decisions, technical implementations, and measurable outcomes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={study.path}>
                <div className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full cursor-pointer group-hover:transform group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.gradient} text-white`}>
                      {study.category}
                    </span>
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {study.description}
                  </p>

                  <div className="flex items-center text-purple-400 font-medium group-hover:text-pink-400 transition-colors">
                    <span>Read Case Study</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to discuss your next project?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            I specialize in building productized solutions that solve real business challenges with measurable outcomes.
          </p>
          <Link href="/#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;