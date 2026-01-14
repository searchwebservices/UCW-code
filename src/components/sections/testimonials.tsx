"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Nicole & Chris",
    quote: "Luba was an absolute dream wedding planner! From start to finish, she poured her heart and soul into creating the most magical weekend for my husband and me. Her attention to detail was impeccable, and her genuine care and love shone through in every aspect of the planning process.",
    avatar: "https://i.imgur.com/rywyuYx.jpeg"
  },
  {
    id: 2,
    name: "Victoria & Patrick",
    quote: "We couldn't have asked for a better experience. Every single detail was handled with such grace and professionalism. Our guests are still talking about how beautiful everything was! Luba truly understands how to bring a vision to life while keeping the stress away from the couple.",
    avatar: "https://i.imgur.com/UWY8o3W.jpeg"
  },
  {
    id: 3,
    name: "Megan & Michael",
    quote: "The team exceeded all our expectations. They were organized, creative, and so supportive throughout the entire journey. We felt completely taken care of and could truly enjoy our special day knowing every detail was in perfect hands. Highly recommend to any couple!",
    avatar: "https://i.imgur.com/nNPZlQy.jpeg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5F1EB] py-[120px] md:py-[160px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1400px] text-center">
        {/* Label */}
        <span className="text-[10px] md:text-[11px] font-bold text-[#087B97] uppercase tracking-[0.2em] mb-4 block">
          WHAT DO THEY SAY?
        </span>

        {/* Heading */}
        <h2 className="font-display text-[32px] md:text-[64px] leading-[1.1] text-black mb-10 md:mb-12">
          Hear from our satisfied customers
        </h2>

        {/* 5-Star Rating */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#087B97]"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-[800px] mx-auto mb-12 min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#4D4D4D]"
            >
              {testimonials[activeIndex].quote}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Avatars Row */}
        <div className="flex items-center justify-center gap-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {testimonials.map((testimonial, index) => {
              if (index === activeIndex) {
                return (
                  <motion.div
                    key={`active-${testimonial.id}`}
                    layoutId="active-badge"
                    className="flex items-center bg-[#087B97] rounded-full pl-1 pr-4 py-1 gap-3 z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white text-[13px] font-semibold tracking-wide whitespace-nowrap">
                      {testimonial.name}
                    </span>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={`inactive-${testimonial.id}`}
                  onClick={() => setActiveIndex(index)}
                  className="w-9 h-9 rounded-full overflow-hidden grayscale cursor-pointer opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 relative border border-[#CAC6C0]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
