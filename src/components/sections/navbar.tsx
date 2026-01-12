"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const menuLinks = [
      { name: "ABOUT", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Blog", href: "/concierge" },
      { name: "CONTACT", href: "/contact" },
    ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Facebook", href: "https://www.facebook.com" },
    { name: "Behance", href: "https://www.behance.net" },
    { name: "Linkedin", href: "https://www.linkedin.com" },
  ];

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isOpen ? "h-screen bg-background" : "bg-white/70 backdrop-blur-xl border-b border-black/[0.03]"
      )}
    >
      <nav className="relative w-full h-full flex flex-col">
        {/* Main Header Bar */}
          <div className="flex items-center justify-between px-8 md:px-[60px] py-[22px] w-full relative z-50">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-[60px] h-[60px] md:w-[83px] md:h-[82px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/WNtvMo5tp5fgOGST3T3zn7s0R1c-1.png"
                  alt="Unique Cabo Weddings"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

              {/* Menu Toggle - Now on the Right */}
              <div className="flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="group flex items-center gap-2 focus:outline-none"
                >
                  <div className="w-[80px] md:w-[120px] text-right">
                    <span className="text-[1.25rem] md:text-[2rem] font-bold tracking-[0.1em] text-[#087B97] leading-none uppercase">
                      {isOpen ? "CLOSE" : "MENU"}
                    </span>
                  </div>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    {isOpen ? (
                      <X size={24} strokeWidth={2.5} className="text-[#087B97]" />
                    ) : (
                      <Plus size={24} strokeWidth={2.5} className="text-[#087B97]" />
                    )}
                  </div>
                </button>
              </div>
          </div>

        {/* Expanded Navigation Overlay */}
        <div
          className={cn(
            "flex-grow flex flex-col transition-all duration-700 ease-in-out overflow-hidden",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          )}
        >
          <div className="container mx-auto flex-grow flex flex-col justify-center items-center py-12">
            
            {/* Social Links (Top Row in Menu) */}
            <div className="flex flex-col items-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
              <span className="font-display italic text-lg text-[#444444] mb-4">Follow us</span>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[0.75rem] font-semibold tracking-[0.1em] text-[#444444] uppercase hover:text-[#087B97] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Primary Page Links */}
            <div className="flex flex-col items-center gap-8 mb-20">
              {menuLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[2rem] md:text-[3.5rem] font-sans font-medium tracking-[0.1em] uppercase hover:italic hover:text-[#087B97] transition-all duration-300",
                    index % 2 === 0 ? "font-display italic" : "font-sans"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Bottom Info Bar */}
            <div className="w-full max-w-5xl flex justify-between items-end border-t border-[#CAC6C0] pt-12 px-8">
              <div className="flex flex-col">
                <span className="font-display italic text-xl text-[#444444]">Flower Lover</span>
              </div>
              <div className="text-[0.875rem] text-[#4D4D4D] font-sans">
                © Copyright 2026
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop for simple fade */}
        {isOpen && (
          <div 
            className="absolute inset-0 -z-10 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;