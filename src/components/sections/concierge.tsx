import React from 'react';
import Image from 'next/image';

const ConciergeSection = () => {
  const conciergeImages = [
    {
      src: "https://i.imgur.com/tgrwVjS.jpeg",
      alt: "ATV excursion in Cabo"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1768252197222.png?width=8000&height=8000&resize=contain",
      alt: "Snorkeling experience in Cabo"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/XPqF9QRPoPgi3Nxqq8CD7KljrFw-13.png",
      alt: "Luxury shuttle van transportation"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/e7umAqRta4Og3THkd4fnyHVjYk-14.png",
      alt: "Romantic beach dinner with guests"
    }
  ];

  return (
    <a 
      href="https://uniqueconcierge.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#F5F1EB] py-[80px] md:py-[120px] lg:py-[160px] overflow-hidden group cursor-pointer transition-colors hover:bg-[#EDE9E3]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        {/* Top Header Label */}
        <div className="mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#087B97] uppercase">
            CONCIERGE
          </span>
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-display text-black mt-4 leading-[1.1]">
            Feeling Adventurous?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <div className="space-y-8 md:max-w-[500px]">
            <div className="space-y-6">
              <p className="font-display text-[28px] md:text-[32px] text-[#4D4D4D] leading-[1.4] font-normal">
                We understand that for a Cabo Destination Wedding, the plans make the experience.
              </p>
              <p className="font-display text-[28px] md:text-[32px] text-[#4D4D4D] leading-[1.4] font-normal">
                Book with people we trust.
              </p>
            </div>
            
            <div className="pt-8 space-y-6">
              <h3 className="font-display text-[32px] md:text-[40px] text-black font-semibold tracking-tight">
                Unique Cabo Concierge
              </h3>
              
              {/* CTA Button */}
              <div 
                className="inline-flex items-center gap-3 bg-[#087B97] text-white px-8 py-4 rounded-sm font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 group-hover:bg-[#065a70] group-hover:gap-5"
              >
                <span>Explore Services</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Image Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {conciergeImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square relative overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </a>
  );
};

export default ConciergeSection;
