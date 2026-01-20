"use client";
import React from "react";
import Image from "next/image";

// Certificate logos
const certificateLogos: string[] = [

  "/assets/sanity.png",
  "/assets/colab.png",
  "/assets/tailwind.png",
  "/assets/next.png",
  "/assets/python.png",
  "/assets/django.png",
  "/assets/tailwind.png",
  "/assets/vscode.png",
  "/assets/html.png",
  "/assets/css.png",
  "/assets/chainlit.png",
  "/assets/langchain.png",
  "/assets/figma.png",
  "/assets/bootstrap.png",
  "/assets/react.png",
  "/assets/gitwhite.png",
  "/assets/cursor.png",
  "/assets/ts.png",
  "/assets/sanity.png",
  "/assets/colab.png",
  "/assets/tailwind.png",
  "/assets/next.png",
  "/assets/python.png",
  "/assets/django.png",
  "/assets/tailwind.png",
  "/assets/vscode.png",
  "/assets/html.png",
  "/assets/css.png",
  "/assets/figma.png",
  "/assets/chainlit.png",
  "/assets/langchain.png",
  "/assets/figma.png",
  "/assets/bootstrap.png",
  "/assets/react.png",
  "/assets/gitwhite.png",
  "/assets/cursor.png",
  "/assets/ts.png",
 
  
     

 
];

const SkillLoop = () => {
  return (
    <div className="w-full overflow-hidden py-10 gap-x-12 bg-transparent mt-35">
      <div className="relative flex w-max animate-marquee">
        {/* Loop the logos twice to create infinite flow */}
        {certificateLogos.concat(certificateLogos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-6">
            <Image
              src={logo}
              alt={`certificate-logo-${index}`}
              width={100}
              height={40}
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLoop;
