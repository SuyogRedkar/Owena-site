"use client";

import { useState } from "react";
import Image from "next/image";

type ImageSliderProps = {
  images: string[];
  title: string;
};

export default function ImageSlider({
  images,
  title,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const previousImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="imageSlider">
      {/* Main Image */}
      <div className="sliderImage">
        <Image
          src={images[current]}
          alt={`${title} - Image ${current + 1}`}
          width={1800}
          height={1100}
          priority={current === 0}
        />

        {/* Previous */}
        {images.length > 1 && (
          <button
            className="sliderButton sliderPrevious"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ←
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            className="sliderButton sliderNext"
            onClick={nextImage}
            aria-label="Next image"
          >
            →
          </button>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="sliderDots">
          {images.map((image, index) => (
            <button
              key={image}
              className={`sliderDot ${
                index === current ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}