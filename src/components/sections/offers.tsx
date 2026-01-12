import React from 'react';

/**
 * OffersSection Component
 * 
 * Target: "What we offer" section with thin horizontal dividers and service categories.
 * Styling: Editorial layout, warm minimalist palette (#F5F1EB), EB Garamond for headers, 
 * instrument sans for body, and thin borders (rgba(26, 26, 26, 0.1)).
 */

const OffersSection: React.FC = () => {
  const sections = [
    {
      title: "Wedding Planning & Coordination",
      content: "From venue selection to vendor management, we orchestrate every element of your Cabo wedding with precision and care. Our comprehensive planning services ensure a seamless celebration tailored to your unique vision, budget, and guest experience goals.",
      subItems: [
        {
          heading: "Venue & Vendor Curation",
          text: "We work exclusively with premier wedding venues and trusted vendors—photographers, videographers, caterers, florists, and musicians. Our established relationships ensure you receive the highest quality services at competitive rates with preferred booking access."
        }
      ]
    },
    {
      title: "Design & Styling Services",
      content: "Our creative team designs cohesive wedding aesthetics that reflect your personal style. Whether you envision an elegant beachfront setup, a romantic hacienda celebration, or a modern luxury affair, we bring your vision to life with attention to every visual detail."
    },
    {
      title: "Complete Guest Experience",
      content: "Your wedding is more than one day—it's an experience. We coordinate transportation, accommodations, welcome dinners, group excursions, spa days, and farewell brunches to ensure your guests have an unforgettable Los Cabos getaway from arrival to departure."
    }
  ];

  return (
    <section 
      className="bg-[#EAE4DA] py-[120px] px-6 md:px-12" 
      style={{ backgroundColor: 'rgb(234, 228, 218)' }}
    >
      <div className="max-width-[1200px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-[60px]">
          <span className="tagline mb-4 block text-[11px] tracking-[0.2em] font-bold text-[#087D9F] uppercase">
            EXCELLENCE IS OUR STANDARD
          </span>
          <h2 className="font-display text-[56px] leading-[1.2] font-medium text-[#1A1A1A]">
            What we offer
          </h2>
        </div>

        {/* Feature Matrix */}
        <div className="flex flex-col">
          {sections.map((section, index) => (
            <div key={index} className="w-full">
              {/* Top Divider for each section */}
              <div 
                className="w-full h-[1px]" 
                style={{ backgroundColor: 'rgba(26, 26, 26, 0.1)' }} 
              />
              
              <div className="py-[60px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Title and main content */}
                <div className="md:col-start-1 md:col-span-12">
                  <h3 className="font-display text-[32px] mb-4 text-[#1A1A1A]">
                    {section.title}
                  </h3>
                  <p className="font-sans text-[16px] leading-[1.6] text-[#666666] max-w-[800px]">
                    {section.content}
                  </p>
                </div>

                {/* Optional Sub-items (like Venue & Vendor Curation) */}
                {section.subItems && section.subItems.map((sub, sIdx) => (
                  <div key={sIdx} className="md:col-start-1 md:col-span-12 mt-8">
                    <h4 className="font-display text-[24px] mb-3 text-[#1A1A1A]">
                      {sub.heading}
                    </h4>
                    <p className="font-sans text-[16px] leading-[1.6] text-[#666666] max-w-[800px]">
                      {sub.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Final Divider */}
          <div 
            className="w-full h-[1px]" 
            style={{ backgroundColor: 'rgba(26, 26, 26, 0.1)' }} 
          />
        </div>

        {/* Action Link */}
        <div className="mt-[60px]">
          <a 
            href="/portfolio" 
            className="nav-label inline-flex items-center gap-2 group text-[#1A1A1A] hover:text-[#087D9F] transition-colors duration-300"
          >
            <span>SEE OUR PROJECTS</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;