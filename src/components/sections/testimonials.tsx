import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Nicole & Chris",
      quote: "Luba was an absolute dream wedding planner! From start to finish, she poured her heart and soul into creating the most magical weekend for my husband and me. Her attention to detail was impeccable, and her genuine care and love shone through in every aspect of the planning process.",
      avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/ndCVk6rKR5v30867HJbYSwpk-15.jpeg"
    }
  ];

  return (
    <section className="bg-[#F5F1EB] py-[120px] md:py-[160px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1400px] text-center">
        {/* Label */}
        <span className="text-[10px] md:text-[11px] font-bold text-[#087B97] uppercase tracking-[0.2em] mb-4 block">
          WHAT DO THEY SAY?
        </span>

        {/* Heading */}
        <h2 className="font-display text-[40px] md:text-[64px] leading-[1.1] text-black mb-10 md:mb-12">
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
        <div className="max-w-[800px] mx-auto mb-12">
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#4D4D4D]">
            {testimonials[0].quote}
          </p>
        </div>

        {/* Avatars Row */}
        <div className="flex items-center justify-center gap-3">
          {/* Active Testimonial Badge */}
          <div className="flex items-center bg-[#087B97] rounded-full pl-1 pr-4 py-1 gap-3 transition-all duration-300">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <Image
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white text-[13px] font-semibold tracking-wide">
              {testimonials[0].name}
            </span>
          </div>

          {/* Other Profile Avatars (Inactive/Toggle style) */}
          <div className="w-9 h-9 rounded-full overflow-hidden grayscale cursor-pointer opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 relative border border-[#CAC6C0]">
             <div className="absolute inset-0 bg-black/10"></div>
             <Image
                src="https://framerusercontent.com/images/XLD03kUKZlCdojErniAePm2L7w.png"
                alt="Couple"
                fill
                className="object-cover"
              />
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden grayscale cursor-pointer opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 relative border border-[#CAC6C0]">
             <div className="absolute inset-0 bg-black/10"></div>
             <Image
                src="https://framerusercontent.com/images/ndCVk6rKR5v30867HJbYSwpk-14.jpeg"
                alt="Couple"
                fill
                className="object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;