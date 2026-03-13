"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function ImageCarousel({ images, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -180, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-2xl">
            <Image
              src={images[currentIndex]}
              alt={`Character image ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores - AHORA MÁS PEQUEÑOS */}
      <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              h-[3px] w-[3px] 
              sm:h-1.5 sm:w-1.5 
              md:h-2 md:w-2
              rounded-full 
              transition-all 
              duration-300 
              ${index === currentIndex 
                ? "bg-accent scale-125" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }
            `}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}