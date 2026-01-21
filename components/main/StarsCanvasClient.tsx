"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Create the dynamic component at the module level but with sequential imports
const DynamicStarsScene = dynamic(
  () => {
    // Import and create the component in a way that avoids Promise.all issues
    return import("@react-three/fiber").then(({ Canvas }) => {
      // Then import StarBackground and create the combined component
      return import("./StarBackground").then(({ StarBackground }) => {
        const StarsScene = () => (
          <Canvas camera={{ position: [0, 0, 1] }}>
            <StarBackground />
          </Canvas>
        );
        return { default: StarsScene };
      });
    });
  },
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none" />
    ),
  }
);

const StarsCanvasClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the dynamic component after client-side mount
  if (!isClient) {
    return <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none" />;
  }

  return (
    <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none">
      <DynamicStarsScene />
    </div>
  );
};

export default StarsCanvasClient;