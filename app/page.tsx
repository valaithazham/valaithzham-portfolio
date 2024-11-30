import HeroSlider from "@/components/hero-slider";
import About from "@/components/about";
import Services from "@/components/services";
import Products from "@/components/products";
import TeamSection from "@/components/team";
import ContactSection from "@/components/contact-us";
import Footer from "@/components/footer";

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
        <Products />
      </section>

      {/* Team Section */}
      <section id="team">
        <TeamSection />
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