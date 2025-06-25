import { useEffect, useState } from "react";
import img from "../../assets/images/heroimg.PNG";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const taglines = ["Luxury Travel", "Premium Comfort", "Exceptional Service"];

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-darkest/80 to-gray-darkest/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-wider leading-tight">
            Experience{" "}
            <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Adil Coaches
            </span>
          </h1>

          <div className="h-16 md:h-20 overflow-hidden relative">
            <p className="text-xl md:text-2xl mb-2 text-gray-lightest">
              Your Journey to
            </p>
            <div className="relative h-10 md:h-12">
              {taglines.map((text, index) => (
                <span
                  key={index}
                  className={`absolute text-gray-lightest inset-0 text-2xl md:text-3xl font-medium transition-all duration-1000 ${
                    index === currentTextIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-secondary to-secondary-light text-gray-lightest font-bold rounded-full hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-1">
            Book Your Ride Today
          </button>
          <button className="px-8 py-3 border-2 border-gray-lightest text-gray-lightest font-bold rounded-full hover:bg-gray-lightest hover:text-primary-darkest transition-all duration-300">
            Explore Fleet
          </button>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-lightest rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-lightest mt-2 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
