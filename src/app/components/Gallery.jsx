"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/necklace.jpg",
  "/images/shop1.jpg",
  "/images/shop2.jpg",
  "/images/shop3.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-xs mx-auto aspect-[9/16] overflow-hidden rounded shadow-lg">
      {/* Image */}
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover transition duration-500 ease-in-out"
      />

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="
          absolute top-1/2 left-2
          -translate-y-1/2
          text-white
          p-2 rounded-full
          hover:bg-opacity-75
        "
        aria-label="Previous slide"
      ></button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="
          absolute top-1/2 right-2
          -translate-y-1/2
          text-white
          p-2 rounded-full
          hover:bg-opacity-75
        "
        aria-label="Next slide"
      ></button>
    </div>
  );
}
