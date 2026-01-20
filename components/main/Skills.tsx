"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillText from "@/components/sub/SkillText";
import SkillDataProvider from "@/components/sub/SkillDataProvider";

import {
 Web_Dev_Skills,
  Ai_Skill_data,
  Cloud_Skills,
  Business_Tools,
  Data_Analytics_Skills,
} from "@/constants";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Delay between each icon
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20 mt-10"
    >
      <SkillText />

      {/* ---- Mobile Compact Version ---- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        {...{className:"grid grid-cols-4 gap-4 mt-8 px-6 md:hidden"}}
      >
        {[...Web_Dev_Skills, ...Ai_Skill_data,  ...Cloud_Skills, ...Business_Tools, ...Data_Analytics_Skills].map(
          (image, index) => (
            <motion.div key={index} variants={item} {...{className: "flex justify-center"}}>
              <SkillDataProvider
                index={index}
                skill_name={image.skill_name}
                src={image.Image}
                width={40}
                height={40}
              />
            </motion.div>
          )
        )}
      </motion.div>

      {/* ---- Desktop Original Multi-row Layout ---- */}
      <div className="hidden md:flex flex-col gap-6 mt-6">
        {[Web_Dev_Skills, Ai_Skill_data, Cloud_Skills, Business_Tools, Data_Analytics_Skills].map(
          (group, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={container}
              initial="hidden"
              animate="show"
              {...{className:"flex flex-wrap justify-center gap-6"}}
            >
              {group.map((image, index) => (
                <motion.div key={index} variants={item}>
                  <SkillDataProvider
                    index={index}
                    skill_name={image.skill_name}
                    src={image.Image}
                    width={60}
                    height={60}
                  />
                </motion.div>
              ))}
            </motion.div>
          )
        )}
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
