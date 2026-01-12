import React from 'react';
import Image from 'next/image';
import { Instagram, MessageSquare, Clock, Phone, Mail, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { id: '01', title: 'Home', href: '/' },
    { id: '02', title: 'About', href: '/about' },
    { id: '03', title: 'Portfolio', href: '/work' },
    { id: '04', title: 'Concierge', href: '/concierge' },
    { id: '05', title: 'Contact', href: '/contact' },
  ];

  const weddingImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/kojZPhMCdhxwHSHz8RU6IyF2S4-16.jpg";

  return (
    <footer className="w-full bg-[#EBE6DF] pt-32 pb-8">
      <div className="container mx-auto max-w-[1400px] px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-b border-[#CAC6C0]">
          
          {/* Column 1: Numbered Menu */}
          <div className="flex flex-col border-r border-[#CAC6C0] py-16 pr-12">
            <nav className="flex flex-col w-full">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-[#CAC6C0] py-6 last:border-0 hover:opacity-60 transition-opacity"
                >
                  <span className="text-[11px] font-bold tracking-[0.2em] text-black">
                    {item.id}
                  </span>
                  <span className="text-[18px] font-sans font-medium text-black pr-12">
                    {item.title}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-16 text-center lg:text-left">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#4D4D4D] block mb-4 uppercase">
                Show us some love
              </span>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="#" className="p-2 border border-[#CAC6C0] rounded-full hover:bg-white transition-colors">
                  <Instagram size={16} className="text-black" />
                </a>
                <a href="#" className="p-2 border border-[#CAC6C0] rounded-full hover:bg-white transition-colors">
                  <MessageSquare size={16} className="text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: UNIQUE Branding & Arched Image */}
          <div className="flex flex-col items-center border-r border-[#CAC6C0] py-16 px-12">
            <div className="text-center mb-12">
              <h2 className="font-display text-[42px] leading-none mb-1 uppercase tracking-[0.05em]">Unique</h2>
              <span className="text-[9px] font-bold tracking-[0.3em] text-[#4D4D4D] uppercase">
                Destination Wedding Planners
              </span>
            </div>
            
            <div className="w-full max-w-[340px] mb-8">
              <div className="arch-mask aspect-[4/5] relative bg-[#F5F1EB]">
                <Image
                  src={weddingImage}
                  alt="Wedding celebration under an arch"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-[12px] font-bold tracking-[0.1em] text-[#087B97] uppercase mb-2">
                Dreaming of the perfect wedding?
              </p>
              <a href="/contact" className="font-display text-[22px] italic border-b border-black pb-1 hover:opacity-70 transition-opacity cursor-pointer">
                Contact Us Today!
              </a>
            </div>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="flex flex-col py-16 pl-12">
            <div className="mb-12">
              <p className="text-[14px] text-[#4D4D4D] mb-8">
                Delivering Perfection since 2010
              </p>
              
              <div className="space-y-10">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-black" />
                    <span className="text-[13px] font-medium text-black">
                      Monday - Friday: 8AM - 6PM
                    </span>
                  </div>
                  <p className="text-[13px] text-[#4D4D4D] pl-7">Saturday: 8AM - 1PM</p>
                  <p className="text-[13px] text-[#4D4D4D] pl-7">Sunday: Closed</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-black" />
                  <a href="tel:+526241220146" className="text-[13px] font-medium text-black hover:text-[#087B97] transition-colors">
                    +52 (624) 122 0146
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-black" />
                  <a href="mailto:luba@uniquecaboweddings.com" className="text-[13px] font-medium text-black hover:text-[#087B97] transition-colors">
                    luba@uniquecaboweddings.com
                  </a>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-black" />
                    <span className="text-[13px] font-medium text-black uppercase tracking-wider">
                      El Tezal, Cabo San Lucas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#4D4D4D]">Website Built & Powered by</span>
            <a href="#" className="text-[16px] font-display font-medium text-black hover:opacity-70 transition-opacity">
              Search Web Services
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <a href="#" className="text-[13px] text-[#4D4D4D] hover:text-black transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </a>
              <span className="text-[#CAC6C0]">|</span>
              <a href="#" className="text-[13px] text-[#4D4D4D] hover:text-black transition-colors underline-offset-4 hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>

          <a 
            href="#hero" 
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-black uppercase hover:opacity-60 transition-opacity"
          >
            Back to Top <ChevronUp size={14} />
          </a>
        </div>
      </div>
      
      {/* Framer Badge Placeholder */}
      <div className="mt-8 flex justify-end px-8">
        <div className="bg-white px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm border border-[#CAC6C0]">
          <div className="w-4 h-4 rounded-sm bg-black flex items-center justify-center">
            <div className="w-2 h-2 border-r border-b border-white -rotate-45"></div>
          </div>
          <span className="text-[12px] font-semibold text-black">Made in Framer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;