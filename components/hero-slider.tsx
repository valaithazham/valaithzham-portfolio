"use client";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Welcome to Our Platform",
    description: "Discover amazing products and services tailored for you",
  },
  {
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
    title: "Innovation at Its Best",
    description: "Leading the way in technological advancement",
  },
  {
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Quality Guaranteed",
    description: "Experience excellence in everything we do",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                {slide.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
      
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}