import { Shield, Zap, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security for all your data and transactions",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast response times and optimal efficiency",
  },
  {
    icon: Heart,
    title: "User Friendly",
    description: "Intuitive interface designed with users in mind",
  },
  {
    icon: Star,
    title: "Top Quality",
    description: "Premium quality service and support guaranteed",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of services to meet your needs and exceed
            your expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}