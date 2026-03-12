"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/lib/gallery-data";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  open,
  onOpenChange,
  onNavigate,
}: LightboxProps) {
  const image = images[currentIndex];

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, goNext, goPrev, onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-10"
              >
                <Dialog.Title className="sr-only">
                  {image?.alt || "Gallery image"}
                </Dialog.Title>

                {/* Close */}
                <Dialog.Close className="absolute top-4 right-4 z-10 rounded-full bg-cream/10 p-2 text-cream backdrop-blur-sm hover:bg-cream/20 transition-colors">
                  <X size={24} />
                </Dialog.Close>

                {/* Previous */}
                <button
                  onClick={goPrev}
                  className="absolute left-3 z-10 rounded-full bg-cream/10 p-3 text-cream backdrop-blur-sm hover:bg-cream/20 transition-colors sm:left-6"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Image */}
                {image && (
                  <div className="relative h-full w-full max-h-[80vh] max-w-5xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="90vw"
                      priority
                    />
                  </div>
                )}

                {/* Next */}
                <button
                  onClick={goNext}
                  className="absolute right-3 z-10 rounded-full bg-cream/10 p-3 text-cream backdrop-blur-sm hover:bg-cream/20 transition-colors sm:right-6"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream/10 px-4 py-1.5 text-sm text-cream/70 backdrop-blur-sm">
                  {currentIndex + 1} / {images.length}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
