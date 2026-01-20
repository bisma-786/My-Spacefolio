"use client";
import React from "react";
import Image from "next/image";

export interface Certificate {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CertificateSlider = () => {
  // Certificate data - replace with your actual certificates
  const certificates: Certificate[] = [
    { id: 1, src: "/assets/plg.png", alt: "Certificate 1", width: 800, height: 600 },
    { id: 2, src: "/assets/pm.png", alt: "Certificate 2", width: 800, height: 600 },
    { id: 3, src: "/assets/google.png", alt: "Certificate 3", width: 800, height: 600 },
   
    // Add more certificates as needed
  ];

  // Duplicate the array to create seamless looping
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <div className="w-full overflow-hidden py-10 bg-transparent mt-40">
      {/* First marquee */}
      <div className="relative flex w-max animate-marquee">
        {duplicatedCertificates.map((cert, index) => (
          <div key={`${cert.id}-${index}`} className="flex-shrink-0 px-4">
            <div className="w-64 h-48 relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Second marquee moving in opposite direction */}
      <div className="relative flex w-max animate-marquee-reverse mt-4">
        {duplicatedCertificates.map((cert, index) => (
          <div key={`reverse-${cert.id}-${index}`} className="flex-shrink-0 px-4">
            <div className="w-64 h-48 relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CertificateSlider