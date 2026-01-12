import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Navigation component based on Unique Cabo Weddings design.
 * Features a fixed high-contrast minimalist bar with a clover logo
 * and a stylized MENU trigger.
 */
export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full h-[80px] pointer-events-none">
      <nav className="w-full h-full flex items-center justify-between px-[60px] pointer-events-auto">
        {/* Left Side: Clover Logo */}
        <div className="flex items-center">
          <Link href="/" className="relative flex items-center justify-center w-[83px] h-[82px] transition-opacity hover:opacity-80">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/WNtvMo5tp5fgOGST3T3zn7s0R1c-1.png"
              alt="Unique Cabo Weddings"
              width={83}
              height={82}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Side: MENU + PLUS Icon */}
        <button 
          className="group flex items-center gap-3 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {/* Animated MENU Text */}
          <div className="flex items-center">
            {['M', 'E', 'N', 'U'].map((char, index) => (
              <div key={index} className="relative h-[18px] overflow-hidden flex flex-col">
                <span className="text-accent-blue font-sans text-[16px] font-bold leading-none tracking-[0.05em] transition-transform duration-300 group-hover:-translate-y-full">
                  {char}
                </span>
                <span className="absolute top-full text-accent-blue font-sans text-[16px] font-bold leading-none tracking-[0.05em] transition-transform duration-300 group-hover:-translate-y-full">
                  {char}
                </span>
              </div>
            ))}
          </div>

          {/* Stylized PLUS Icon */}
          <div className="relative w-[18px] h-[18px] flex items-center justify-center ml-1">
            <div className="absolute w-[14px] h-[2px] bg-[#087D9F] transition-transform duration-300 group-hover:rotate-90"></div>
            <div className="absolute h-[14px] w-[2px] bg-[#087D9F] transition-transform duration-300 group-hover:rotate-90"></div>
          </div>
        </button>
      </nav>

      {/* Optional: Subtle gradient or shadow if needed, but the original is very clean */}
    </div>
  );
}