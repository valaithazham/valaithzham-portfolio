"use client"
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useMemo } from "react";

const products = [
  {
    id: 1,
    name: "E-Commerce",
    image: "./image/e-commerce.png",
    description: "Built a feature-rich E-Commerce application with a responsive interface using ReactJS, TypeScript, and NodeJS, integrated with secure payment gateways and real-time inventory management.",
  },
  {
    id: 2,
    name: "ChatPDF Personal",
    image: "./image/chatPDF.png",
    description: "An AI-powered ChatPDF project using React, TypeScript, Next.js, and Pinecone to enable seamless document processing and intelligent chat interactions.",
  },
  {
    id: 3,
    name: "Professional/Personal Portfolio",
    image: "./image/personal-portfolio.png",
    description: "A dynamic, animated personal portfolio using ReactJS, TypeScript, and GSAP, showcasing projects, skills, and achievements with interactive and visually engaging user experiences.",
  },
];

export default function Products() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper className="">
        <motion.div className="text-center" variants={scrollAnimation}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our selection of premium products designed to enhance your experience.
          </p>
        </motion.div>
        </ScrollAnimationWrapper>
        
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
            key={product.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-64"
                />
              </motion.div>
              <motion.div className="p-6">
                <motion.div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  {/* <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span> */}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}