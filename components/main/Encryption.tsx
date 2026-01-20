"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-12 lg:px-20 text-center">
      {/* Title */}
     <motion.div
  {...{ className: "text-2xl md:text-4xl font-medium text-gray-200 mt-10" }}
  variants={slideInFromTop}
>

        Performance
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          &{" "}
        </span>
        Security
      </motion.div>

      {/* Lock Image */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[40px] md:w-[50px] translate-y-3 md:translate-y-5 transition-all duration-200 group-hover:translate-y-8"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={100}
            height={100}
            className="w-[80px] md:w-[100px] z-10"
          />
        </div>

        {/* Tagline */}
        <div className="Welcome-box px-4 py-2 border border-[#7042f88b] opacity-90 mt-6">
          <h1 className="Welcome-text text-sm md:text-base">
            Encrypted With Privacy-first architecture
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 md:px-12 mt-10">
        <div className="cursive text-lg md:text-2xl font-medium text-gray-300 leading-relaxed">
          Unlike others who treat data carelessly, we build systems with
          uncompromising protection.
          <br className="hidden md:block" />
          You own your data, your automations, and your future, always!
          ⁓Bisma Gondal
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
