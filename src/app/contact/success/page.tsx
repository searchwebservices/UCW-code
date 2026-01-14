"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function SuccessPage() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phone = "+52 (624) 122 0146";
  const email = "luba@uniquecaboweddings.com";

  const copyToClipboard = async (text: string, type: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="py-32 md:py-48">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display mb-8 tracking-wide uppercase">
            Thank You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-sans max-w-2xl mx-auto leading-relaxed">
            Your message has been received. We&apos;re excited to learn more about your event and will get back to you within 24-48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border mt-12 text-left max-w-2xl mx-auto">
            {/* Call Us */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 block mb-2">Call Us</span>
              <div className="flex items-center gap-3">
                <a 
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-lg font-sans hover:text-accent transition-colors"
                >
                  {phone}
                </a>
                <button
                  onClick={() => copyToClipboard(phone, "phone")}
                  className="p-2 hover:bg-muted rounded transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Email */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 block mb-2">Email Us</span>
              <div className="flex items-center gap-3">
                <a 
                  href={`mailto:${email}`}
                  className="text-lg font-sans hover:text-accent transition-colors"
                >
                  {email}
                </a>
                <button
                  onClick={() => copyToClipboard(email, "email")}
                  className="p-2 hover:bg-muted rounded transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link href="/" className="btn-link">
              BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
