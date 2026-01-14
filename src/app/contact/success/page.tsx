import React from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="py-32 md:py-48">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display mb-8 tracking-wide uppercase">
            Thank You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-sans max-w-2xl mx-auto leading-relaxed">
            Your message has been received. We're excited to learn more about your event and will get back to you within 24-48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border mt-12 text-left max-w-2xl mx-auto">
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
