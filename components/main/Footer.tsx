import React from "react";
import Image from "next/image";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-50">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a
              href="https://github.com/bisma-786"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:underline"
            >
              <RxGithubLogo className="mr-2 text-2xl" />
              <span className="text-[15px]">Github</span>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:underline"
            >
              <Image src="/discord.svg" alt="Discord" width={24} height={24} className="mr-2" />
              <span className="text-[15px]">Discord</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/bismabuilds/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:underline transform transition-all duration-300 hover:scale-110 hover:text-purple-300"
            >
              <Image src="/instagram-internet-media-svgrepo-com.svg" alt="Instagram" width={30} height={30} className="mr-2" />
              <span className="text-[15px]">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@BismaBuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:underline transform transition-all duration-300 hover:scale-110 hover:text-red-500"
            >
              <Image src="/youtube-svgrepo-com.svg" alt="YouTube" width={30} height={30} className="mr-2" />
              <span className="text-[15px]">YouTube</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bisma-razzaq786/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:underline transform transition-all duration-300 hover:scale-110 hover:text-blue-600"
            >
              <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={30} height={30} className="mr-2" />
              <span className="text-[15px]">LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/RunWithBissu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:underline transform transition-all duration-300 hover:scale-110 hover:text-blue-700"
            >
              <FaFacebookF className="mr-2 text-2xl" />
              <span className="text-[15px]">Facebook</span>
            </a>
            <a
              href="https://wa.me/923342018716?text=Hi%20Bisma%2C%20I%20came%20across%20your%20work%20and%20would%20like%20to%20discuss%20a%20project%20or%20collaboration."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] hover:underline transform transition-all duration-300 hover:scale-110 hover:text-green-500"
            >
              <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={30} height={30} className="mr-2 text-green-500" />
              <span className="text-[15px]">WhatsApp</span>
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">Blogs (Coming Soon)</span>
            </p>
            <a
              href="mailto:builtbyher786@gmail.com"
              className="flex flex-row items-center my-[15px] hover:underline"
            >
              <span className="text-[15px] ml-[6px]">builtbyher786@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Logo */}
        <div>
          <Image
            src="/my-logo.png"
            id="#about-me"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </div>

        {/* Footer bottom text */}
        <div className="mb-[20px] text-[15px] text-center">
          Powered By Bisma Gondal 2025 | © All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
