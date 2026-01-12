"use client";

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How far in advance should we book?",
    answer: "We typically recommend booking your wedding planner 12 to 18 months in advance, especially for popular Cabo wedding dates. This allows for the best selection of premier venues and top-tier vendors who often book up quickly in the Baja California Sur region."
  },
  {
    question: "Do you work with specific venues only?",
    answer: "No, we work with a wide range of properties including luxury resorts, private villas, and unique beachfront locations. While we have preferred partners where we know the service is exceptional, we are always happy to explore new venues that align with your vision and budget."
  },
  {
    question: "What's included in your planning packages?",
    answer: "Our packages range from full-service planning to day-of coordination. Typically, they include vendor curation, budget management, timeline creation, design conceptualization, and on-site management to ensure every detail of your celebration is executed perfectly."
  },
  {
    question: "Do you help with guest accommodations and activities?",
    answer: "Absolutely. We pride ourselves on creating a complete guest experience. This includes coordinating hotel room blocks, arranging local transportation, and organizing group activities like sunset cruises, rehearsal dinners, and farewell brunches."
  },
  {
    question: "What are your service areas in Baja California Sur?",
    answer: "We primarily serve Cabo San Lucas and San José del Cabo (Los Cabos), but we also coordinate weddings in Todos Santos, La Paz, and other beautiful destinations throughout the Baja peninsula."
  }
];

const FAQ = () => {
  return (
    <section className="bg-[#F5F1EB] py-[120px] md:py-[160px] px-8 md:px-16" id="faq">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#087B97] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            DO YOU HAVE QUESTIONS?
          </p>
          <h2 className="font-display text-[48px] md:text-[64px] text-black leading-[1.1] mb-12">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="w-full border-t border-[#CAC6C0]"
        >
          {faqData.map((item, index) => (
            <Accordion.Item
              value={`item-${index}`}
              key={index}
              className="border-bottom border-[#CAC6C0]"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="group flex flex-1 items-center justify-between py-8 text-left transition-all hover:bg-[#EBE6DF]/30 focus:outline-none">
                  <span className="font-sans text-[18px] md:text-[20px] text-black">
                    {item.question}
                  </span>
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <Plus className="h-5 w-5 text-black transition-transform duration-300 group-data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 text-black transition-transform duration-300 hidden group-data-[state=open]:block" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-8 pr-12 text-[#4D4D4D] text-[16px] md:text-[18px] leading-[1.6]">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <style jsx global>{`
        .border-bottom {
          border-bottom: 1px solid #CAC6C0;
        }
        @keyframes accordion-down {
          from { height: 0; }
          to { height: var(--radix-accordion-content-height); }
        }
        @keyframes accordion-up {
          from { height: var(--radix-accordion-content-height); }
          to { height: 0; }
        }
      `}</style>
    </section>
  );
};

export default FAQ;