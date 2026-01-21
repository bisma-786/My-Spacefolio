"use client";

import React, { useState, useEffect } from "react";

const StarsCanvasClient = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) {
    // Server-side or early render - return empty div
    return <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none" />;
  }

  // Dynamically import and render only on client
  const DynamicCanvas = () => {
    const [CanvasComponent, setCanvasComponent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
      const loadComponents = async () => {
        try {
          // Import components separately to avoid Promise.all issues
          const { Canvas } = await import("@react-three/fiber");
          const { StarBackground } = await import("./StarBackground");

          const CanvasWithBackground = () => (
            <Canvas camera={{ position: [0, 0, 1] }}>
              <StarBackground />
            </Canvas>
          );

          setCanvasComponent(() => CanvasWithBackground);
        } catch (error) {
          console.error("Error loading 3D components:", error);
        }
      };

      loadComponents();
    }, []);

    if (!CanvasComponent) {
      return <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none" />;
    }

    return <CanvasComponent />;
  };

  return (
    <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none">
      <DynamicCanvas />
    </div>
  );
};

export default StarsCanvasClient;