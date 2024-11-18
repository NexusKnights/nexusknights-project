'use client'
import Image from "next/image";
import Logo from "@/assets/logo.png";
import FigmaLogo from "@/assets/Figma-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2B5DFE] to-[#1A389A] py-12  z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center">
            <Image src={Logo} alt="Logo" width={50} height={50} />
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-4">
            <span className="text-white">il team</span>
            <span className="text-white">l&apos;idea</span>
            <span className="text-white">canva</span>
          </div>

          {/* Figma Logo */}
          <div className="flex justify-center">
            <Image src={FigmaLogo} alt="Figma Logo" width={20} height={20} />
          </div>

          {/* Copyright */}
          <div className="text-white/60 text-center text-sm">
             2024 human computer interactions NexusKnights
          </div>
        </div>
      </div>
    </footer>
  );
};
