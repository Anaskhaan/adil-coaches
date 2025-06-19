import AboutSection from "../components/Home/AboutSection";
import BookingSection from "../components/Home/BookingSection";
import Hero from "../components/Home/Hero";
import ServicesSection from "../components/Home/ServicesSection";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BookingSection />
    </div>
  );
};
