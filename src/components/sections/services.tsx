import React from 'react';

const ServicesSection = () => {
    const services = [
      {
        title: "Wedding Planning & Coordination",
        description: "From venue selection to vendor management, we orchestrate every element of your Cabo wedding with precision and care. Our comprehensive planning services ensure a seamless celebration tailored to your unique vision, budget, and guest experience goals.",
      },
      {
        title: "Venue & Vendor Curation",
        description: "We work exclusively with premier wedding venues and trusted vendors—photographers, videographers, caterers, florists, and musicians. Our established relationships ensure you receive the highest quality services at competitive rates with preferred booking access."
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
            <h2 className="font-display text-[36px] md:text-[64px] lg:text-[72px] leading-[1.1] text-[#000000]">
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
                  </div>
                </div>
              </div>
              
              {/* Divider Between Items */}
              <div className="w-full h-px bg-[#CAC6C0]" />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#087B97] text-white text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#065f75] transition-colors duration-200"
          >
            Start Planning Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 group cursor-pointer border border-black text-black text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
          >
            See Our Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;