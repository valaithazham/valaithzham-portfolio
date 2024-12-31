"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Products } from "@/types";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const products = [
  {
    id: 1,
    name: "Private Limited Company",
    images: [
      "./image/privatecompany.png"
    ],
    description:
      "Developed an attendance handling system for private limited companies with a responsive interface using ReactJS, TypeScript, and NodeJS, integrated with secure authentication and real-time attendance tracking.",
    details:
      "This attendance handling system includes features such as employee login, time tracking, attendance status, automated leave management, reports generation, and admin dashboard. The system is built to enhance productivity, ensuring secure and accurate data management with real-time updates, while focusing on performance and scalability for businesses.",
  },
  {
    id: 2,
    name: "ChatPDF Personal",
    images: [
      "./image/chatPDF.png",
      "./image/chatPDF2.png",
      "./image/chatPDF3.png",
    ],
    description:
      "An AI-powered ChatPDF project using React, TypeScript, Next.js, and Pinecone to enable seamless document processing and intelligent chat interactions.",
    details:
      "The ChatPDF project leverages AI to enable users to interact with documents conversationally. It includes document embedding using Pinecone, intelligent query handling, and responsive design for a smooth user experience.",
  },
  {
    id: 3,
    name: "Business Hub",
    images: [
      "./image/carhub.png"
    ],
    description:
      "Car Hub is a comprehensive business-handling platform built using ReactJS, TypeScript, and NodeJS, offering an intuitive interface and robust features for car dealerships and automotive retailers.",
    details:
      "Car Hub combines powerful tools for inventory management, customer relationship management, and appointment scheduling, all within a responsive platform, empowering businesses to operate efficiently and deliver exceptional customer experiences.",
  },
];

interface ProjectDetailsProps {
  product: Products;
}

const ProjectDetails = ({ product }: ProjectDetailsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const openModal = (product: Products) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); // Reset image index when opening a new product
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProduct.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length
      );
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ScrollAnimationWrapper className="">
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              variants={scrollAnimation}
            >
              Featured Products
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={scrollAnimation}
            >
              Discover our selection of premium products designed to enhance
              your experience.
            </motion.p>
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover w-full h-64"
                />
              </motion.div>
              <motion.div className="p-6">
                <motion.div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <button
                  onClick={() => openModal(product)}
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors dark:bg-primary dark:text-black dark:hover:bg-primary/80"
                >
                  View More
                </button>
              </motion.div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-lg w-full"
          >
            <div className="relative">
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="object-cover w-full h-64"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2"
              >
                ✕
              </button>
              {/* Only show the Prev and Next buttons if there are multiple images */}
              {selectedProduct.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedProduct.details}
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors dark:bg-primary dark:text-black dark:hover:bg-primary/80"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;