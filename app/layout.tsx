import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvasWrapper from "@/components/main/StarsCanvasWrapper";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Skills from "@/components/main/Skills";
import Services from "@/components/main/Services";
import HowWeWork from "@/components/main/HowWeWork";
import Faq from "@/components/main/Faq";
import Encrytion from "@/components/main/Encryption";
import CertificateSlider, { Certificate } from "@/components/main/Certificate";
import Projects from "@/components/main/Projects";
import  projectsData  from "@/constants/projects";
import Contact from "@/components/main/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bisma's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-auto overflow-x-hidden`}
      >
        <Navbar />
        <StarsCanvasWrapper />

        {/* Main content wrapper */}
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          {children}
         <section className="mt-8 md:mt-12 lg:mt-16">
  <Skills />
</section>

          <Services />

          <CertificateSlider />
          <Encrytion />
          <Projects projects={projectsData} />

          <HowWeWork />

          <Faq />

          <Contact />
        </div>

        <Footer />
      </body>
    </html>
  );
}
