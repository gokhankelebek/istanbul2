"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { CATERING_VIDEOS, type CateringVideo } from "@/lib/catering-data";

function VideoCard({
  youtubeId,
  title,
  description,
  orientation = "landscape",
  index,
}: CateringVideo & { index: number }) {
  const [playing, setPlaying] = useState(false);
  const portrait = orientation === "portrait";

  // hqdefault always exists; maxresdefault may 404 on older/low-res uploads.
  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-stone/8 bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-stone/5 ${
        portrait ? "w-full max-w-[330px]" : "w-full"
      }`}
    >
      <div
        className={`relative w-full bg-black ${
          portrait ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {playing ? (
          <iframe
            src={embedSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crimson/90 text-cream shadow-xl transition-all group-hover:scale-110 group-hover:bg-crimson">
              <Play size={26} className="ml-1 fill-current" />
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading text-base font-bold text-stone">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-warm-gray">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function CateringVideos() {
  // Hide entries that still have a placeholder ID so the section never shows
  // broken thumbnails before real videos are wired in.
  const videos = CATERING_VIDEOS.filter(
    (v) => v.youtubeId && !v.youtubeId.startsWith("REPLACE_WITH_")
  );

  if (videos.length === 0) return null;

  const single = videos.length === 1;

  const videoJsonLd = videos.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
  }));

  return (
    <section className="bg-stone/5 py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-crimson">
            See It in Action
          </p>
          <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
            Catering, On the Table
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-warm-gray">
            Real spreads from real Las Vegas events — fresh off our Fremont
            kitchen line.
          </p>
        </div>
        <div
          className={
            single
              ? "flex justify-center"
              : "grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {videos.map((v, i) => (
            <VideoCard key={v.youtubeId} index={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
