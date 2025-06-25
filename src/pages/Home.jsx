import AboutSection from "../components/Home/AboutSection";
import BookingSection from "../components/Home/BookingSection";
import ContactFormSection from "../components/Home/ContactFormSection";
import Hero from "../components/Home/Hero";
import ServicesSection from "../components/Home/ServicesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactFormSection />
    </div>
  );
};
