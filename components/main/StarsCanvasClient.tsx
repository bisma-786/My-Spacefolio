"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the StarBackground component
const DynamicStarBackground = dynamic(
  () => import("./StarBackground").then((mod) => ({ default: mod.StarBackground })),
  {
    ssr: false,
    loading: () => null,
  }
);

// Dynamically import the Canvas component with StarBackground
const DynamicCanvasWithBackground = dynamic(
  () => import("./StarBackground").then((mod) => {
    // Import Canvas and create the component dynamically
    return import("@react-three/fiber").then(r3f => {
      const Canvas = r3f.Canvas;

      const CanvasWithBackground = () => (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <DynamicStarBackground />
        </Canvas>
      );

      return { default: CanvasWithBackground };
    });
  }),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none" />
    ),
  }
);

const StarsCanvasClient = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none">
      <DynamicCanvasWithBackground />
    </div>
  );
};

export default StarsCanvasClient;