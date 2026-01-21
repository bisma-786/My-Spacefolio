"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the StarsCanvas component with SSR disabled
const DynamicStarsCanvas = dynamic(
  () => import("@/components/main/StarsCanvasClient"), // This imports the client-only canvas component
  {
    ssr: false,
    loading: () => <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none" />
  }
);

const StarsCanvasWrapper = () => {
  return <DynamicStarsCanvas />;
};

export default StarsCanvasWrapper;