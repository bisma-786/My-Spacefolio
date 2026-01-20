"use client";

import { Socials } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="w-full fixed top-0 left-0 z-50 bg-black/25 backdrop-blur-xl border-b border-white/20 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 md:px-10 h-[65px] flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="flex items-center">
      <Image
        src="/my-logo.png"
        alt="logo"
        width={70}
        height={70}
        className="cursor-pointer hover:animate-slowspin"
      />
      <span className="font-bold ml-2 hidden sm:block text-white drop-shadow">
        Bisma Gondal
      </span>
    </Link>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8 text-white">
      {[
        { label: "About me", href: "#about-me" },
        { label: "Skills", href: "#skills" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Contact Us", href: "#contact" },
      ].map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="cursor-pointer hover:text-purple-300 transition"
        >
          {link.label}
        </a>
      ))}
      {/* Desktop Social Icons */}
      <div className="flex gap-3">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transform transition-all duration-300 hover:scale-125 hover:brightness-125 flex items-center justify-center p-1 rounded-full hover:bg-white/10"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={30}
              height={30}
            />
          </a>
        ))}
      </div>
    </div>

    {/* Mobile Toggle */}
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
    </div>
  </div>

  {/* Mobile Drawer */}
  <div
    className={`fixed top-0 left-0 h-screen w-[80%] max-w-xs bg-black/30 backdrop-blur-xl text-white border-r border-white/20 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out z-40 flex flex-col px-6 py-10 gap-6`}
  >
    {[
      { label: "About me", href: "#about-me" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact Us", href: "#contact" },
    ].map((link) => (
      <a
        key={link.label}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="hover:text-purple-300 transition"
      >
        {link.label}
      </a>
    ))}

    <div className="flex gap-4 mt-6">
      {Socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transform transition-all duration-300 hover:scale-125 hover:brightness-125 flex items-center justify-center p-1 rounded-full hover:bg-white/10"
        >
          <Image
            src={social.src}
            alt={social.name}
            width={30}
            height={30}
          />
        </a>
      ))}
    </div>
  </div>
</nav>
  );
}

export default Navbar;