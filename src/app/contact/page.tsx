import React from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import ContactHeader from "@/components/sections/contact-header";
import ContactForm from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </main>
  );
}
