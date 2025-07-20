"use client";

import { useState, useEffect, useRef } from "react";

const images = [
  "/images/necklace.jpg",
  "/images/shop1.jpg",
  "/images/shop2.jpg",
  "/images/shop3.jpg",
  "/images/leather_hermes_gloves.jpg",
  "/images/boutique_womenswear.jpg",
  "/images/ladies_boutique_clothing.jpg",
  "/images/mens_shirt.jpg",
  "/images/gucci_sunglasses_and_necklace.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Swipe gesture handling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartXRef.current || !touchEndXRef.current) return;
      const distance = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 50;

      if (distance > minSwipeDistance) {
        // swipe left
        setIndex((prev) => (prev + 1) % images.length);
      } else if (distance < -minSwipeDistance) {
        // swipe right
        setIndex((prev) => (prev - 1 + images.length) % images.length);
      }

      touchStartXRef.current = null;
      touchEndXRef.current = null;
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xs mx-auto aspect-[9/16] overflow-hidden rounded shadow-lg"
    >
      {/* Sliding Image Strip */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/30 p-1 rounded-full"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/30 p-1 rounded-full"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 w-full flex justify-center gap-1">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-white/80" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
