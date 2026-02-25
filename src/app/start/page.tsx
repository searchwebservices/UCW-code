"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const portfolioFeature = [
  {
    couple: "Nicole & Chris",
    description: "Elegant villa · White florals · Ocean views",
    slug: "nicole-chris",
    images: [
      { src: "https://i.imgur.com/rywyuYx.jpeg", alt: "Nicole & Chris — ceremony", aspect: "portrait" },
      { src: "https://i.imgur.com/4aIs2s4.jpeg", alt: "Nicole & Chris — reception", aspect: "landscape" },
      { src: "https://i.imgur.com/eGihBLj.jpeg", alt: "Nicole & Chris — portraits", aspect: "portrait" },
    ],
  },
  {
    couple: "Ayana & Austin",
    description: "Beachside celebration · Bright florals · Ocean breeze",
    slug: "ayana-austin",
    images: [
      { src: "https://i.imgur.com/JlH5bzw.jpeg", alt: "Ayana & Austin — ceremony", aspect: "portrait" },
      { src: "https://i.imgur.com/WlOW0hT.jpeg", alt: "Ayana & Austin — reception", aspect: "landscape" },
      { src: "https://i.imgur.com/uAQWeAs.jpeg", alt: "Ayana & Austin — portraits", aspect: "landscape" },
    ],
  },
  {
    couple: "Shivani & Brendin",
    description: "South Asian traditions · Bold color · Cabo warmth",
    slug: "shivani-brendin",
    images: [
      { src: "https://i.imgur.com/Zi5zvMA.jpeg", alt: "Shivani & Brendin — ceremony", aspect: "portrait" },
      { src: "https://i.imgur.com/7q4Pd2A.jpeg", alt: "Shivani & Brendin — celebration", aspect: "landscape" },
      { src: "https://i.imgur.com/CRWKDE8.jpeg", alt: "Shivani & Brendin — portraits", aspect: "portrait" },
    ],
  },
];

export default function StartPage() {
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
        if (typeof window !== "undefined") {
          (window as Record<string, unknown[]>).dataLayer = (window as Record<string, unknown[]>).dataLayer || [];
          (window as Record<string, unknown[]>).dataLayer.push({
            event: "form_submission",
            form_name: "start_page_form",
            form_location: "/start",
            lead_type: "ad_traffic_inquiry",
            conversion_value: 100,
            budget_range: formData.get("budget") || "",
          });
        }
        router.push("/contact/success");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const trustPoints = [
    "20+ years planning Cabo weddings",
    "500+ celebrations executed",
    "Insider access to Cabo's best venues",
    "Response within 30–60 seconds",
  ];

  return (
    <main className="min-h-screen bg-[#F5F1EB]">
      {/* Minimal header — no full nav to reduce distraction */}
      <header className="px-8 md:px-[60px] py-6 flex items-center justify-between border-b border-[#CAC6C0]">
        <Link href="/">
          <div className="relative w-[52px] h-[52px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/WNtvMo5tp5fgOGST3T3zn7s0R1c-1.png"
              alt="Unique Cabo Weddings"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B97]">
          Free Consultation
        </span>
      </header>

      {/* Hero + Form */}
      <div className="container mx-auto max-w-[1100px] px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Value proposition */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B97] mb-4">
              Unique Cabo Weddings
            </p>
            <h1 className="font-display text-[3rem] md:text-[4.5rem] leading-[1.0] text-black mb-6">
              Your Dream<br />Cabo Wedding<br />Starts Here.
            </h1>
            <p className="text-[#4D4D4D] text-[18px] leading-relaxed mb-10 max-w-[440px]">
              Tell us about your vision. Luba personally reviews every inquiry and responds within the hour.
            </p>

            {/* Trust points */}
            <div className="space-y-4 mb-12">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#087B97] rounded-full shrink-0" />
                  <span className="text-[15px] text-[#4D4D4D]">{point}</span>
                </div>
              ))}
            </div>

            {/* Social proof image */}
            <div className="relative aspect-[4/3] w-full max-w-[440px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/kojZPhMCdhxwHSHz8RU6IyF2S4-16.jpg"
                alt="Cabo wedding by Unique Cabo Weddings"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>

          {/* Right — Streamlined form */}
          <div className="bg-white p-8 md:p-10 border border-[#CAC6C0]">
            <h2 className="font-display text-[28px] md:text-[36px] text-black mb-2">
              Get Your Free Consultation
            </h2>
            <p className="text-[#4D4D4D] text-[14px] mb-8">
              No commitment. Luba responds personally, usually within the hour.
            </p>

            <form
              name="start"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="start" />
              <p className="hidden">
                <label>Don&apos;t fill this out: <input name="bot-field" /></label>
              </p>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4D4D4D]/60">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="bg-transparent border-b border-[#CAC6C0] py-2 focus:outline-none focus:border-[#087B97] transition-colors placeholder:text-[#4D4D4D]/30 text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4D4D4D]/60">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="jane@email.com"
                    className="bg-transparent border-b border-[#CAC6C0] py-2 focus:outline-none focus:border-[#087B97] transition-colors placeholder:text-[#4D4D4D]/30 text-sm"
                  />
                </div>
              </div>

              {/* Wedding date + Guest count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="event-date" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4D4D4D]/60">
                    Wedding Date
                  </label>
                  <input
                    id="event-date"
                    type="text"
                    name="event-date"
                    placeholder="Month / Year"
                    className="bg-transparent border-b border-[#CAC6C0] py-2 focus:outline-none focus:border-[#087B97] transition-colors placeholder:text-[#4D4D4D]/30 text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="guests" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4D4D4D]/60">
                    Guest Count
                  </label>
                  <input
                    id="guests"
                    type="text"
                    name="guests"
                    placeholder="e.g. 50–80 guests"
                    className="bg-transparent border-b border-[#CAC6C0] py-2 focus:outline-none focus:border-[#087B97] transition-colors placeholder:text-[#4D4D4D]/30 text-sm"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="budget" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4D4D4D]/60">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="bg-transparent border-b border-[#CAC6C0] py-2 focus:outline-none focus:border-[#087B97] transition-colors text-sm appearance-none cursor-pointer text-[#4D4D4D]"
                >
                  <option value="" disabled>Select a range...</option>
                  <option value="under-30k">Under $30,000 USD</option>
                  <option value="30k-50k">$30,000 – $50,000 USD</option>
                  <option value="50k-75k">$50,000 – $75,000 USD</option>
                  <option value="75k-100k">$75,000 – $100,000 USD</option>
                  <option value="100k-plus">$100,000+ USD</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              {/* Vision */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="vision" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4D4D4D]/60">
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="vision"
                  name="vision"
                  placeholder="Venue ideas, vibe, anything you have in mind..."
                  rows={3}
                  className="bg-transparent border-b border-[#CAC6C0] py-2 focus:outline-none focus:border-[#087B97] transition-colors placeholder:text-[#4D4D4D]/30 text-sm resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#087B97] text-white text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#065f75] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request My Free Consultation"}
                {!isSubmitting && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                )}
              </button>

              <p className="text-[11px] text-[#4D4D4D]/50 text-center">
                No spam. No pressure. Just Luba.
              </p>
            </form>
          </div>

        </div>
      </div>

      {/* Portfolio imagery — real weddings */}
      <section className="border-t border-[#CAC6C0] bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-[1100px] px-6 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087B97] mb-3">
              Real Weddings
            </p>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.05] text-black">
              Every Wedding Tells a Story
            </h2>
          </div>

          <div className="space-y-16">
            {portfolioFeature.map((wedding) => (
              <div key={wedding.slug}>
                {/* Couple label */}
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <span className="font-display text-[1.5rem] md:text-[2rem] text-black">{wedding.couple}</span>
                    <span className="ml-4 text-[13px] text-[#4D4D4D]/60">{wedding.description}</span>
                  </div>
                  <Link
                    href={`/portfolio/${wedding.slug}`}
                    className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#087B97] hover:underline hidden sm:block"
                  >
                    View Wedding →
                  </Link>
                </div>

                {/* 3-image grid: portrait | landscape stacked */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {/* First image — portrait, spans 1 column, 2 rows */}
                  <div className="relative aspect-[3/4] overflow-hidden row-span-2 col-span-1">
                    <Image
                      src={wedding.images[0].src}
                      alt={wedding.images[0].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  {/* Second image — landscape */}
                  <div className="relative aspect-[4/3] overflow-hidden md:col-span-2">
                    <Image
                      src={wedding.images[1].src}
                      alt={wedding.images[1].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 66vw"
                    />
                  </div>
                  {/* Third image — fills remaining space */}
                  <div className="relative aspect-[4/3] overflow-hidden md:col-span-2">
                    <Image
                      src={wedding.images[2].src}
                      alt={wedding.images[2].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 66vw"
                    />
                  </div>
                </div>

                {/* Mobile view wedding link */}
                <div className="mt-4 sm:hidden">
                  <Link
                    href={`/portfolio/${wedding.slug}`}
                    className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#087B97]"
                  >
                    View Wedding →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View full portfolio link */}
          <div className="text-center mt-14">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-black text-black text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
            >
              View Full Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#087B97] py-20 md:py-28 text-center">
        <div className="container mx-auto max-w-[700px] px-6 md:px-8">
          <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-[1.0] text-white mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-white/80 text-[17px] leading-relaxed mb-10">
            Luba has planned 500+ Cabo celebrations. Reach out today — your free consultation is one message away.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-white text-[#087B97] text-[13px] font-bold uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#F5F1EB] transition-colors duration-200"
          >
            Get My Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
