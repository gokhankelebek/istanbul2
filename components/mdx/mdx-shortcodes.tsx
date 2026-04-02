import Link from "next/link";
import { DISH_PAGES } from "@/lib/dish-pages-data";

export function Callout({
  children,
  variant = "tip",
}: {
  children: React.ReactNode;
  variant?: "tip" | "hours" | "halal";
}) {
  const styles = {
    tip: "border-gold/40 bg-gold/10 text-cream",
    hours: "border-crimson/30 bg-crimson/10 text-cream",
    halal: "border-olive/40 bg-olive/15 text-olive-light",
  } as const;

  return (
    <aside
      className={`my-8 rounded-xl border px-5 py-4 text-sm leading-relaxed ${styles[variant]}`}
    >
      {children}
    </aside>
  );
}

export function MenuLink({
  href = "/menu",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-semibold text-crimson underline decoration-crimson/40 underline-offset-2 hover:text-crimson-light"
    >
      {children}
    </Link>
  );
}

export function DishLink({
  slug,
  children,
}: {
  slug: string;
  children?: React.ReactNode;
}) {
  const dish = DISH_PAGES[slug];
  if (!dish) {
    return <span className="text-stone/50">{children ?? slug}</span>;
  }
  const label = children ?? dish.englishName;
  return (
    <Link
      href={`/${slug}`}
      className="font-semibold text-crimson underline decoration-crimson/40 underline-offset-2 hover:text-crimson-light"
    >
      {label}
    </Link>
  );
}
