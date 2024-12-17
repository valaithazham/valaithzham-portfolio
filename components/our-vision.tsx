import React from 'react'
import { Lightbulb, Rocket, Globe } from "lucide-react";

const visionPhases = [
  {
    icon: Lightbulb,
    title: "Innovative Foundations",
    description:
      "Our journey begins with embracing innovation at the core. We aim to build smart, efficient, and user-centric solutions that address immediate challenges while laying the groundwork for future advancements.",
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description:
      "Building on our innovative foundations, we focus on scaling our solutions to empower businesses globally. Our future-ready approach ensures seamless integration and adaptability across industries.",
    dependsOn: "Innovative Foundations",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "The final step in our vision is creating a sustainable global impact by harnessing advanced technologies and delivering unparalleled solutions that redefine industries worldwide.",
    dependsOn: "Scalable Growth",
  },
];

function OurVision() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore how we envision the future, progressing step by step to make a lasting impact on the world of technology.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {visionPhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className={`flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                  index > 0 ? "lg:ml-8" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {phase.title}
                </h3>
                {phase.dependsOn && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
                    Depends on: {phase.dependsOn}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurVision