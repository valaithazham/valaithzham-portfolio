"use client";
import React from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useMemo, useState } from "react";

const ContactSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://valaithazham.great-site.net/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors"
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject:"", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section Header */}
        <ScrollAnimationWrapper className="">
          <motion.div className="text-center mb-12" variants={scrollAnimation}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have any questions? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Contact Form and Info */}
        {/* Contact Form */}
        
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            
          >
            <ScrollAnimationWrapper>
            {/* Contact Form */}
            <motion.div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8" variants={scrollAnimation}>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {status && (
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  {status}
                </p>
              )}
            </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
            {/* Contact Information */}
            <motion.div className="flex flex-col justify-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg gap-5" variants={scrollAnimation}>
              <motion.div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Contact Us to Join Our Developer Community
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 ">
                  Are you passionate about coding, learning, and sharing
                  knowledge? Join our vibrant developer community today! Whether
                  you're looking to collaborate on exciting projects, share your
                  expertise, or learn new skills, we welcome developers of all
                  levels to join us.
                </p>
              </motion.div>
              <ul className="space-y-4 ">
                {/* <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a4 4 0 004.22 0L23 8m-5 12H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    valaithazhamofficial@gmail.com
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l1.34-.67a8.08 8.08 0 018.26 0L23 10m-11 11v-6"
                    ></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    +91 737360435555
                  </span>
                </li> */}
              <li className="d-flex align-items-center gap-5">
                <i className="bi bi-envelope-fill text-primary icon-blue me-3"></i>
                <span className="text-dark">valaithazhamofficial@gmail.com</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-phone-vibrate-fill text-primary icon-blue me-3"></i>
                <span className="text-dark">+91 7373604355</span>
              </li>

                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 3l12 9-12 9V3z"
                    ></path>
                  </svg>
                  <a
                    href="https://discord.gg/your-invite-link" // Replace with your actual Discord invite link
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join us on Discord for real-time discussions and
                    collaborations.
                  </a>
                </li>
              </ul>
            </motion.div>
            </ScrollAnimationWrapper>
          </motion.div>
          
        
      </div>
    </section>
  );
};

export default ContactSection;
