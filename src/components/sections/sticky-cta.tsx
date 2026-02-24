"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past hero (approx 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#087B97] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
      <p className="font-display text-[18px] md:text-[22px] text-white text-center sm:text-left">
        Your dream Cabo wedding is one conversation away.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center gap-2 bg-white text-[#087B97] text-[12px] font-bold uppercase tracking-[0.15em] px-8 py-3 hover:bg-[#F5F1EB] transition-colors duration-200 whitespace-nowrap"
      >
        Plan My Wedding →
      </a>
    </div>
  );
}
