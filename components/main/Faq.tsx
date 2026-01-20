"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-700 rounded-xl bg-gradient-to-br from-[#0b0b12] to-[#120b2e] hover:border-violet-600/50 transition-all duration-300">
      <button
        className="w-full p-6 text-left flex justify-between items-center group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-violet-400 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-violet-400 flex-shrink-0 ml-4" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-800 pt-2">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is BuiltByHer for?",
      answer: "BuiltByHer works with ambitious entrepreneurs and businesses who understand that great design and strategy drive results. Whether you're a startup looking to establish credibility or an established brand seeking to scale, if you value quality and want partners who think strategically, we're a perfect fit."
    },
    {
      question: "What makes BuiltByHer different from agencies or freelancers?",
      answer: "Unlike agencies that throw bodies at problems, or freelancers who just execute, BuiltByHer combines strategic thinking with flawless execution. I don't just follow briefs—I anticipate needs, identify opportunities, and deliver solutions that move the needle. You get agency-level strategy with freelancer-level attention to detail."
    },
    {
      question: "How do I know this will actually work for my business?",
      answer: "Every project starts with a deep audit and analysis phase where I identify exactly what's holding you back. I provide a clear, actionable report before we begin execution. Plus, the 50% upfront payment ensures mutual commitment and accountability. Real results come from real strategy, not promises."
    },
    {
      question: "What's the process after I contact you?",
      answer: "Simple. We schedule a brief call to understand your goals and challenges. If there's a fit, I conduct a comprehensive audit of your current setup. Then I deliver a detailed report with findings and proposed solutions. Once approved, we execute with clear milestones and transparent communication throughout."
    },
    {
      question: "Do you work with startups, solo founders, or established brands?",
      answer: "Yes. I work with anyone serious about growth and willing to invest properly. Startups get lean, effective solutions that establish credibility. Solo founders get scalable systems. Established brands get optimization and expansion strategies. What matters is commitment, not company size."
    },
    {
      question: "How long does a typical project take?",
      answer: "Most projects take 2-6 weeks depending on scope. Simple website optimizations might be 1-2 weeks. Full redesigns or complex ad campaigns typically take 4-6 weeks. I provide a detailed timeline during our initial consultation so you know exactly what to expect."
    },
    {
      question: "What do you need from me to get started?",
      answer: "Just your goals, current challenges, and access to relevant accounts (website, analytics, social media, etc.). I handle everything else. The clearer you are about your objectives upfront, the more targeted and effective our solutions will be. No need to be technical—just honest about what you want to achieve."
    },
    {
      question: "Why do you require 50% upfront payment?",
      answer: "Two reasons: It ensures both parties are serious about the partnership, and it allows me to dedicate proper resources from day one. This isn't about trust—it's about commitment. When both sides invest upfront, we're aligned toward the same goal. The remaining 50% is paid on completion."
    },
    {
      question: "Will I own all the final files and assets?",
      answer: "Absolutely. Every file, asset, and deliverable becomes yours upon project completion. You get full commercial rights and ownership. I believe in empowering my clients, not creating dependencies. Consider it part of your investment in your business's future."
    },
    {
      question: "What if I'm not sure which service I need?",
      answer: "That's exactly why I offer the audit phase. During our initial consultation, I'll assess your situation and recommend the most impactful approach for your specific goals. Sometimes it's website optimization, sometimes ad campaigns, sometimes both. Clarity comes from expertise, not guesswork."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center gap-12 h-full relative overflow-hidden py-20 mt-10"
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Common Questions
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to know before getting started
        </motion.p>
      </div>

      <motion.div
        className="w-full max-w-4xl mx-auto px-4 space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={item}>
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
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

export default FAQ;