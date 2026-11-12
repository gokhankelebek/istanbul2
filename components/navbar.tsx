"use client";

import { useState, useEffect } from "react";
import SiteLink, { useOnStoreHost } from "@/components/site-link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, RESTAURANT, LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  // On store.istanbul2.com the path is "/" but this isn't the home page.
  const onStore = useOnStoreHost();
  const isActive = (href: string) => !onStore && pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the phone menu after navigating (adjusting state during render,
  // as React recommends, instead of in an effect).
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_#E7E5E4,0_8px_24px_-16px_rgba(28,25,23,0.35)] py-3"
            : "bg-white border-b border-stone-200 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-between gap-4 px-5 lg:px-8">
          <SiteLink href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-istanbul.webp"
              alt="Istanbul Mediterranean 2"
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-lg font-bold uppercase tracking-wide text-stone sm:text-xl whitespace-nowrap">
                Istanbul Mediterranean 2
              </span>
              <span className="hidden text-xs text-stone-light sm:block">Halal · Fremont Street, Las Vegas</span>
            </span>
          </SiteLink>

          {/* Desktop nav */}
          <div data-ga-location="header" className="hidden flex-shrink-0 items-center gap-5 lg:flex xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <SiteLink
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-crimson"
                    : "text-stone hover:text-crimson"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-crimson"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </SiteLink>
            ))}
            <a
              href={`tel:${RESTAURANT.phone.replace(/[^0-9]/g, "")}`}
              className="hidden xl:inline-block rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone transition-all hover:border-stone hover:bg-stone-50 active:scale-95 whitespace-nowrap"
            >
              Call to Reserve
            </a>
            <a
              href={LINKS.orderOnline}
              className="flex-shrink-0 rounded-full bg-crimson px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95 whitespace-nowrap"
              aria-label={ORDER_ONLINE_COPY.ariaLabel}
            >
              {ORDER_ONLINE_COPY.label}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-stone p-2.5 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-ga-location="mobile_menu"
            className="fixed inset-0 z-40 flex flex-col bg-white pt-[76px] lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 pb-28 pt-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <SiteLink
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex min-h-14 items-center justify-between border-b border-stone-200 font-heading text-2xl font-bold uppercase tracking-wide transition-colors ${
                      isActive(item.href)
                        ? "text-crimson"
                        : "text-stone hover:text-crimson"
                    }`}
                  >
                    {item.label}
                    <ChevronRight size={22} className="text-stone-400" aria-hidden="true" />
                  </SiteLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-6 flex flex-col gap-3"
              >
                <a
                  href={LINKS.orderOnline}
                  className="flex h-[52px] items-center justify-center rounded-full bg-crimson px-7 font-bold text-white transition-colors hover:bg-crimson-light"
                  aria-label={ORDER_ONLINE_COPY.ariaLabel}
                >
                  {ORDER_ONLINE_COPY.label}
                </a>
                <a
                  href={`tel:${RESTAURANT.phone.replace(/[^0-9]/g, "")}`}
                  className="flex h-[52px] items-center justify-center gap-2 rounded-full border border-stone-300 px-6 font-semibold text-stone transition-colors hover:border-stone hover:bg-stone-50"
                >
                  <Phone size={18} aria-hidden="true" />
                  Call {RESTAURANT.phone}
                </a>
                <p className="mt-2 text-center text-sm text-stone-500">{RESTAURANT.address}</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
