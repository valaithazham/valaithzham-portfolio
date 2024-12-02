export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary w-64 h-64 rounded-full opacity-10 z-0" />
          </div>
          
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We are a team of freelance website designers brought together by a journey that began during our engineering days. United by a shared vision and camaraderie, we've joined hands to bring the power of technology to small-scale local businesses.
            <br />
            Our mission is simple yet impactful: to design innovative websites and integrate AI-powered solutions that help businesses grow and thrive in the digital age. As young professionals brimming with creativity and determination, we are dedicated to not just achieving personal success but also contributing to the betterment of society.
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
          </div>
        </div>
      </div>
    </section>
  );
}