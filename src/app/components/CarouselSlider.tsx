"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [scrollNext, emblaApi]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div key={index} className="flex-[0_0_100%]">
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
