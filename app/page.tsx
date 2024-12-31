import HeroSlider from "@/components/HeroSlider";
import About from "@/components/about";
import Services from "@/components/services";
import ContactSection from "@/components/contact-us";
import Footer from "@/components/Layout/Footer";
import OurVision from "@/components/OurVision";
import ProjectDetails from "@/components/ProjectDetails";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Slider Section */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Products Section */}
      <section id="products">
        <ProjectDetails product={undefined} />
      </section>

      {/* Team Section */}
      <section id="vision">
        <OurVision />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer Section */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}