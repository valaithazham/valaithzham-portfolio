"use client"
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useMemo } from "react";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="relative" variants={scrollAnimation}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary w-64 h-64 rounded-full opacity-10 z-0" />
          </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex w-full">
          <motion.div className="mt-10 lg:mt-0" variants={scrollAnimation}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We are a passionate team of freelance website designers united by a shared journey and a vision to empower small-scale local businesses through technology. Our collective expertise and camaraderie drive us to create innovative digital solutions that enable businesses to flourish in the fast-evolving digital landscape.
            <br />
            <br />
            Let's build something amazing together — because your success is our story!

            </p>
            {/* <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  10+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  500+
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
              </div>
            </div> */}
          </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}

export default About;