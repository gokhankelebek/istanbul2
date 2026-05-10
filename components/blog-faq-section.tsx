import type { BlogPostFaqItem } from "@/lib/blog-types";

export default function BlogFaqSection({
  heading = "Questions & answers",
  faqs,
}: {
  heading?: string;
  faqs: BlogPostFaqItem[];
}) {
  if (faqs.length === 0) return null;
  return (
    <section
      className="border-t border-stone/10 pt-12"
      aria-labelledby="blog-faq-heading"
    >
      <h2
        id="blog-faq-heading"
        className="font-heading text-2xl font-bold text-stone sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-8 space-y-3">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="group overflow-hidden rounded-xl border border-stone/10 bg-white shadow-sm transition-shadow open:shadow-md"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-stone transition-colors hover:bg-cream/50 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span
                  aria-hidden
                  className="text-gold transition-transform duration-300 group-open:rotate-180"
                >
                  ▾
                </span>
              </span>
            </summary>
            <div className="border-t border-stone/8 px-5 py-4 text-sm leading-relaxed text-warm-gray">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
