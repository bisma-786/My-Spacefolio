"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Analyze & Audit",
      description: [
        "No guesswork. I deeply analyze your business, product, or current system.",
        "Identify gaps, inefficiencies, and conversion blockers.",
        "Deliver a clear, actionable report with exactly what needs fixing."
      ],
      benefit: "Clarity before execution. Know exactly what we'll build."
    },
    {
      number: "02",
      title: "Contract & Execution",
      description: [
        "Transparent contract with clear deliverables and timeline.",
        "50% upfront payment confirms mutual commitment.",
        "Work begins immediately after confirmation."
      ],
      benefit: "Professional boundaries that protect both parties."
    },
    {
      number: "03",
      title: "Delivery & Final Payment",
      description: [
        "All agreed files, assets, and deliverables are handed over.",
        "Final 50% payment made after completion.",
        "Clean handoff with full ownership of delivered work."
      ],
      benefit: "No surprises. Clean transfer of everything you paid for."
    }
  ];

  return (
    <section
      id="process"
      className="flex flex-col items-center justify-center gap-16 h-full relative overflow-hidden py-20 mt-10"
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How We Work
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Simple, transparent process. No surprises.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gradient-to-br from-[#0b0b12] to-[#120b2e] rounded-xl p-8 border border-gray-800 hover:border-violet-600/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/20 group"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
                  {step.title}
                </h3>

                <div className="space-y-3 mb-4">
                  {step.description.map((line, idx) => (
                    <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-700">
                  <p className="text-green-400 text-sm font-medium italic">
                    {step.benefit}
                  </p>
                </div>
              </div>
            </div>
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

export default HowWeWork;