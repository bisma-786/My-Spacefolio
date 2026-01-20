"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TallyNewsletter from "./Newsletter";

/**
 * Use HTMLMotionProps to type the motion components so TS understands `initial`, `animate`,
 * `variants`, and regular HTML props like `className` — without using `any`.
 */
type DivProps = HTMLMotionProps<"div">;
type PProps = HTMLMotionProps<"p">;

/* Cast motion.* to the correct component type via unknown => React.FC<...>
   This avoids `any` (ESLint) while giving motion the right prop types. */
const MotionDiv = motion.div as unknown as React.FC<DivProps>;
const MotionP = motion.p as unknown as React.FC<PProps>;

const HeroContent: React.FC = () => {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      {...{className: "hero-content-wrapper flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 mt-24 lg:mt-40 w-full z-[20] text-center lg:text-left"}}
    >
      {/* Left Text Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center">
        <MotionDiv
          variants={slideInFromTop}
          {...{className: "Welcome-box py-2 px-4 border border-[#7042f88b] opacity-90 mx-auto lg:mx-0 flex items-center justify-center"}}
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-[15px]">AI Product Manager</h1>
        </MotionDiv>

        <MotionDiv
          variants={slideInFromLeft(0.5)}
          {...{className: "flex flex-col gap-4 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] mx-auto lg:mx-0"}}
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              the best
            </span>{" "}
            project experience
          </span>
        </MotionDiv>

        <MotionP
          variants={slideInFromLeft(0.8)}
          {...{className: "text-base md:text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"}}
        >
          I&apos;m Bisma Gondal, an AI Product Manager who helps businesses automate
          operations, boost efficiency, and build credibility using AI-driven
          products. <br />
          With a strong mix of strategy, tech, and execution, I design automation
          solutions that drive growth and innovation.
        </MotionP>

        {/* Button — centered on mobile, left-aligned on large screens */}
        <MotionDiv
  variants={slideInFromLeft(1)}
  {...{className:"flex justify-center lg:justify-start w-full"}}
>
  <div className="max-w-[300px] w-full mx-auto">
    <TallyNewsletter />
  </div>
</MotionDiv>

      </div>

      {/* Right Image */}
      <MotionDiv
        variants={slideInFromRight(0.8)}
        {...{className: "w-full flex justify-center items-center mt-8 lg:mt-0"}}>
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={450}
          width={450}
          className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[650px] h-auto"
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default HeroContent;
