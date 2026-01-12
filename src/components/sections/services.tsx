import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Wedding Planning & Coordination",
      description: "From venue selection to vendor management, we orchestrate every element of your Cabo wedding with precision and care. Our comprehensive planning services ensure a seamless celebration tailored to your unique vision, budget, and guest experience goals.",
      subItems: [
        {
          title: "Venue & Vendor Curation",
          content: "We work exclusively with premier wedding venues and trusted vendors—photographers, videographers, caterers, florists, and musicians. Our established relationships ensure you receive the highest quality services at competitive rates with preferred booking access."
        }
      ]
    },
    {
      title: "Design & Styling Services",
      description: "Our creative team designs cohesive wedding aesthetics that reflect your personal style. Whether you envision an elegant beachfront setup, a romantic hacienda celebration, or a modern luxury affair, we bring your vision to life with attention to every visual detail."
    },
    {
      title: "Complete Guest Experience",
      description: "Your wedding is more than one day—it's an experience. We coordinate transportation, accommodations, welcome dinners, group excursions, spa days, and farewell brunches to ensure your guests have an unforgettable Los Cabos getaway from arrival to departure."
    }
  ];

  return (
    <section className="bg-[#F5F1EB] py-[120px] md:py-[160px]">
      <div className="container mx-auto max-w-[1400px] px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B97] mb-6">
            EXCELLENCE IS OUR STANDARD
          </p>
          <h2 className="font-display text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] text-[#000000]">
            What we offer
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {/* Top Border for first item set via spacing or custom element */}
          <div className="w-full h-px bg-[#CAC6C0]" />
          
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Service Title */}
                  <div className="md:col-span-5">
                    <h3 className="font-display text-[32px] md:text-[40px] leading-tight text-[#000000]">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Service Description */}
                  <div className="md:col-span-7">
                    <p className="font-sans text-[18px] leading-[1.6] text-[#4D4D4D] max-w-2xl">
                      {service.description}
                    </p>

                    {/* Sub-items if any */}
                    {service.subItems && service.subItems.map((sub, sIdx) => (
                      <div key={sIdx} className="mt-10 pt-10 border-t border-[#CAC6C0]">
                        <h4 className="font-display text-[24px] mb-4 text-[#000000]">
                          {sub.title}
                        </h4>
                        <p className="font-sans text-[16px] leading-[1.6] text-[#4D4D4D] max-w-2xl">
                          {sub.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Divider Between Items */}
              <div className="w-full h-px bg-[#CAC6C0]" />
            </div>
          ))}
        </div>

        {/* See our projects Link */}
        <div className="mt-16 md:mt-20">
          <a 
            href="/work" 
            className="inline-flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#000000] border-b border-[#000000] pb-1 transition-opacity group-hover:opacity-70">
              SEE OUR PROJECTS
            </span>
            <span className="text-[14px]">
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;