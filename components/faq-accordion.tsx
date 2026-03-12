"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FaqAccordion() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 turkish-pattern-subtle">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="group overflow-hidden rounded-xl border border-stone/8 bg-white transition-shadow data-[state=open]:shadow-lg data-[state=open]:shadow-stone/5"
              >
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-stone transition-colors hover:text-crimson sm:text-lg [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-warm-gray transition-transform duration-300"
                  />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-5 text-sm leading-relaxed text-warm-gray">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
