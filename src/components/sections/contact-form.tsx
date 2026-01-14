import React from "react";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="pb-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
              alt="Wedding celebration"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Right Column: Form and Info */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-12 tracking-wide uppercase">
              Get in touch
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Email</label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (123) 456 7890"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Service</label>
                <select className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors text-sm appearance-none cursor-pointer">
                  <option value="" disabled selected>Select...</option>
                  <option value="full-planning">Full Wedding Planning</option>
                  <option value="partial-planning">Partial Planning</option>
                  <option value="coordination">Month-of Coordination</option>
                  <option value="concierge">Concierge Services</option>
                </select>
              </div>

              {/* Date of the Event */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Date of the Event</label>
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Estimated Budget */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Estimated Budget</label>
                <input
                  type="text"
                  placeholder="Starting at $25,000USD"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Event Occasion */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Event Occasion ( Wedding. Event.)</label>
                <input
                  type="text"
                  placeholder="Wedding"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* How did you hear about us? */}
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">How did you hear about us?</label>
                <input
                  type="text"
                  placeholder="Instagram"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Any other details you'd like to share?</label>
                <textarea
                  placeholder="Type"
                  rows={4}
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-4">
                <button type="button" className="btn-link">
                  SUBMIT
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 block mb-2">Call Us</span>
                <p className="text-lg font-sans">+52 (624) 122 0146</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 block mb-2">Visit Us</span>
                <p className="text-lg font-sans">El Tezal, Cabo San Lucas</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 block mb-2">Reach out directly at</span>
                <p className="text-lg font-sans">luba@uniquecaboweddings.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
