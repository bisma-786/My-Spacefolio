"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  const services = [
    {
      title: "Website Design",
      pain: "A website isn't broken because it looks bad. It's broken because it doesn't convert.",
      reframe: "Most sites focus on aesthetics over outcomes.",
      solution: "I design with strategy, user flow, and lead conversion in mind."
    },
    {
      title: "Project Management",
      pain: "Missed deadlines, messy execution, unclear ownership.",
      reframe: "Without structure, teams spiral into chaos.",
      solution: "I bring clarity, timelines, and accountability to deliver results."
    },
    {
      title: "UGC Video Ads",
      pain: "Ads that feel fake, scripted, or get skipped instantly.",
      reframe: "Scroll-stopping content can't be forced or faked.",
      solution: "I craft native, trust-driven content that stops the scroll."
    },
    {
      title: "Ad Campaigns",
      pain: "Money spent with no real ROI or performance tracking.",
      reframe: "Blind campaigns burn budgets without learning.",
      solution: "I build testing-focused, optimization-driven campaigns that scale."
    }
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center gap-12 h-full relative overflow-hidden py-20 mt-10"
    >
      <div className="text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Solving real problems with proven solutions
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gradient-to-br from-[#0b0b12] to-[#120b2e] rounded-xl p-6 border border-gray-800 hover:border-violet-600/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/20 group"
          >
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {service.pain}
            </p>
            <p className="text-violet-400 text-sm italic mb-3">
              {service.reframe}
            </p>
            <p className="text-white text-sm font-medium">
              {service.solution}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Background effect */}
      <div className="w-full h-full absolute top-0 left-0 z-[-1] opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-violet-900/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default Services;