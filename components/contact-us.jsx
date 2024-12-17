import React from "react";

const ContactSection = () => {
  // Sample profiles
  const profiles = [
    {
      name: "Yogabalajee V",
      designation: "Graphic Designer",
      email: "yogabalajee@gmail.com",
      phone: "+123 456 7890",
    },
    {
      name: "Santheesh A",
      designation: "Full Stack Developer",
      email: "santheesh16@gmail.com",
      phone: "+959 751 6993",
    },
    {
      name: "Tamilvanan Gowran",
      designation: "Cloud and DevOps Engineer",
      email: "tamilbecse139@gmail.com",
      phone: "+112 358 1321",
    },
    {
      name: "Saran Kiruthic",
      designation: "AI Developer",
      email: "saranabcd465@gmail.com",
      phone: "+442 123 4455",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have any questions? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
            <form action="#" method="POST">
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
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
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
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Feel free to reach out to us through any of the channels below.
              </p>
            </div>
            <ul className="space-y-4">
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
                  +737 360 4355
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-[100px]">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {profile.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {profile.designation}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {profile.email}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {profile.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;