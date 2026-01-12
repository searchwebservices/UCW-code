import React from 'react';

const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[18px] h-[18px]"
  >
    <path
      d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
      fill="#087B97"
    />
  </svg>
);

const Features = () => {
  return (
    <section 
      className="bg-[#F5F1EB] py-[100px] md:py-[140px] px-6 md:px-12 lg:px-20 overflow-hidden"
      id="features"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Title Area */}
        <div className="mb-20">
          <p className="label-accent mb-4">Features</p>
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-black max-w-[800px]">
            Why Choose Unique Cabo Weddings
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          
          {/* Card 1: Local Expertise & Trust */}
          <div className="flex flex-col border-t border-[#CAC6C0] pt-8 group">
            <div className="flex gap-2 mb-6">
              <StarIcon />
            </div>
            <h3 className="text-[28px] md:text-[32px] font-display text-black mb-6">
              Local Expertise & Trust
            </h3>
            <p className="text-[#4D4D4D] text-[18px] leading-[1.6] opacity-90">
              Lush garden venues surrounded by greenery, magical desert landscapes, and properties where the ocean becomes part of the celebration. With our local relationships and insider knowledge, you can count on incredible venues, fair rates, and service you can trust every step of the way.
            </p>
          </div>

          {/* Card 2: Full-Service Coordination */}
          <div className="flex flex-col border-t border-[#CAC6C0] pt-8 group">
            <div className="flex flex-wrap gap-2 mb-6 max-w-[40px]">
              <StarIcon />
              <StarIcon />
            </div>
            <h3 className="text-[28px] md:text-[32px] font-display text-black mb-6">
              Full-Service Coordination
            </h3>
            <p className="text-[#4D4D4D] text-[18px] leading-[1.6] opacity-90">
              From your initial vision to your last dance, we take care of every detail: vendor management, timeline creation, design curation, and full day-of coordination, ensuring a seamless experience from start to finish.
            </p>
          </div>

          {/* Card 3: Stress-Free Experience */}
          <div className="flex flex-col border-t border-[#CAC6C0] pt-8 group">
            <div className="flex flex-wrap gap-2 mb-6 max-w-[50px]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <h3 className="text-[28px] md:text-[32px] font-display text-black mb-6">
              Stress-Free Experience
            </h3>
            <p className="text-[#4D4D4D] text-[18px] leading-[1.6] opacity-90">
              We&apos;ve planned hundreds of Cabo weddings and anticipate challenges before they arise. With our meticulous attention to detail and day-of coordination, you&apos;ll enjoy your celebration worry-free while we handle everything behind the scenes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
