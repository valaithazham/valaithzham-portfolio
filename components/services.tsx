"use client"
import { Brain, BookHeart, ShoppingCart, ScanEye } from "lucide-react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useMemo } from "react";

const services = [
  {
    icon: BookHeart,
    title: "Professional/Personal Websites",
    description: "Clean, professional, and informative websites that effectively showcase your business, services, and contact details in a streamlined, user-friendly form",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description: "Feature-rich online stores with secure payment integrations, product catalogs, and a seamless shopping experience for your customers.",
  },
  {
    icon: ScanEye,
    title: "Computer Vision - Enhanced Websites",
    description: "Harness the power of cutting-edge technology with websites that integrate computer vision capabilities, enabling innovative functionalities like image recognition and real-time analysis.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Chatbots: Engage your audience 24/7 with AI-driven chatbots that offer personalized support and boost customer satisfaction.",
  },
];

export default function Services() {  
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollAnimationWrapper className="">
        <motion.div className="text-center mb-16" variants={scrollAnimation}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of services to meet your needs and exceed
            your expectations.
          </p>
        </motion.div>
        </ScrollAnimationWrapper>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <motion.div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}