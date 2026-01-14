"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        router.push("/contact/success");
      } else {
        console.error("Form submission failed with status:", response.status);
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

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

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
            >
              {/* Hidden input for Netlify form name */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field for spam protection */}
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: 
                  <input name="bot-field" />
                </label>
              </p>

              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="jane@email.com"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+1 (123) 456 7890"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="service" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Service</label>
                <select 
                  id="service"
                  name="service"
                  defaultValue="" 
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select...</option>
                  <option value="full-planning">Full Wedding Planning</option>
                  <option value="partial-planning">Partial Planning</option>
                  <option value="coordination">Month-of Coordination</option>
                  <option value="concierge">Concierge Services</option>
                </select>
              </div>

              {/* Date of the Event */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="event-date" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Date of the Event</label>
                <input
                  id="event-date"
                  type="text"
                  name="event-date"
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Estimated Budget */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="budget" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Estimated Budget</label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  placeholder="Starting at $25,000USD"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Event Occasion */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="occasion" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Event Occasion ( Wedding. Event.)</label>
                <input
                  id="occasion"
                  type="text"
                  name="occasion"
                  placeholder="Wedding"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* How did you hear about us? */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="referral" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">How did you hear about us?</label>
                <input
                  id="referral"
                  type="text"
                  name="referral"
                  placeholder="Instagram"
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label htmlFor="details" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Any other details you&apos;d like to share?</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Type"
                  rows={4}
                  className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 text-sm resize-none"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="md:col-span-2">
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              {/* Submit */}
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-link disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
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
