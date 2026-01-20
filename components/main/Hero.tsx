import React from "react";
import Head from "next/head";
import HeroContent from "../sub/HeroContent";
import CertificatesLoop from "@/components/sub/SkillLoop";

const Hero = () => {
  return (
   

    <div
      className="relative flex flex-col h-full w-full hero-margin-fix"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <CertificatesLoop />
    </div>
  );
};

export default Hero;
