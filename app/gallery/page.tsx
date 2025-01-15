"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/inside1.jpg?height=400&width=600", alt: "Restaurant Interior" },
  { src: "/inside3.jpg?height=400&width=600", alt: "Restaurant Interior 2" },
  { src: "/outside1.jpg?height=400&width=600", alt: "Restaurant Exterior" },
  { src: "/inside2.jpg?height=400&width=600", alt: "Event Setup" },
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Galerie</h1>

      <div className="relative max-w-2xl mx-auto flex items-center justify-center">
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
        >
          &#10095;
        </button>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={150}
            height={100}
            className={`rounded-lg cursor-pointer ${
              index === currentImage ? "border-4 border-amber-600" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
