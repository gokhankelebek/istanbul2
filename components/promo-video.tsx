"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeOff } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

const YOUTUBE_ID = "vDrMsdyw9Mc";

interface PromoVideoProps {
  variant?: "dark" | "light";
}

export default function PromoVideo({ variant = "dark" }: PromoVideoProps) {
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;

    const next = !muted;
    setMuted(next);
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: next ? "mute" : "unMute",
      }),
      "*"
    );
  }, [muted]);

  const isDark = variant === "dark";

  const embedSrc = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&rel=0&modestbranding=1&controls=1&enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}`;

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 lg:py-28 overflow-hidden ${
        isDark ? "bg-stone" : "bg-cream"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 sm:mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className={`h-px flex-1 max-w-16 bg-gradient-to-r from-transparent ${
                isDark ? "to-gold/60" : "to-crimson/40"
              }`}
            />
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                isDark ? "text-gold" : "text-crimson"
              }`}
            >
              See It for Yourself
            </span>
            <div
              className={`h-px flex-1 max-w-16 bg-gradient-to-l from-transparent ${
                isDark ? "to-gold/60" : "to-crimson/40"
              }`}
            />
          </div>
          <h2
            className={`font-heading text-3xl font-bold sm:text-4xl ${
              isDark ? "text-cream" : "text-stone"
            }`}
          >
            Experience Istanbul 2
          </h2>
          <p
            className={`mt-3 max-w-lg mx-auto ${
              isDark ? "text-cream/60" : "text-warm-gray"
            }`}
          >
            Authentic Turkish flavors, genuine hospitality, and a vibrant
            atmosphere — right on Fremont Street.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 1,
          }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
        >
          <div className="relative aspect-video w-full bg-black">
            {inView && (
              <iframe
                ref={iframeRef}
                src={embedSrc}
                title="Istanbul Mediterranean Restaurant-2 — Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          {inView && (
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm text-cream/80 transition-all hover:bg-black/80 hover:text-cream hover:scale-110 active:scale-95"
            >
              {muted ? <VolumeOff size={18} /> : <Volume2 size={18} />}
            </button>
          )}

          <div
            className={`absolute inset-0 rounded-2xl border pointer-events-none ${
              isDark ? "border-cream/[0.06]" : "border-stone/[0.08]"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
}
