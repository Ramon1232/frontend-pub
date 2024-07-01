"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const images = [
  "https://via.placeholder.com/800x400.png?text=Image+1",
  "https://via.placeholder.com/800x400.png?text=Image+2",
  "https://via.placeholder.com/800x400.png?text=Image+3",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md"
        >
          &gt;
        </button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Card 1"
            className="h-40 w-full object-cover rounded-md"
          />
          <h2 className="mt-4 text-xl font-semibold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">This is a description for card 1.</p>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Card 2"
            className="h-40 w-full object-cover rounded-md"
          />
          <h2 className="mt-4 text-xl font-semibold">Card Title 2</h2>
          <p className="mt-2 text-gray-600">This is a description for card 2.</p>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Card 3"
            className="h-40 w-full object-cover rounded-md"
          />
          <h2 className="mt-4 text-xl font-semibold">Card Title 3</h2>
          <p className="mt-2 text-gray-600">This is a description for card 3.</p>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
