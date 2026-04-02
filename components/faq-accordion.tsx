"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 16,
    },
  },
};

export default function FaqAccordion() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-28 bg-cream py-20 lg:py-28 turkish-pattern-subtle overflow-hidden"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Accordion.Item
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
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
