import { Link } from "react-router-dom";

export const AboutUsBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-darkest to-primary-darker py-16 px-8 rounded-3xl shadow-2xl overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-light rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary rounded-full opacity-15"></div>
      
      {/* Floating Bus Animation */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-lg opacity-90 shadow-md animate-float">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-sm"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Journey With <span className="text-secondary-light">Adil Coaches</span>
          </h1>
          <p className="text-gray-lighter text-xl mb-8">
            Your trusted travel partner connecting <span className="font-semibold text-white">Islamabad</span>, <span className="font-semibold text-white">Lahore</span>, <span className="font-semibold text-white">Bannu</span>, and beyond with comfort and reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/routes" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Routes
            </Link>
            
          </div>
        </div>

        {/* Interactive Map Element */}
        <div className="relative w-72 h-72 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20 shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-primary-light rounded-full opacity-20 animate-pulse"></div>
          </div>
          
          {/* Map Dots */}
          <div className="relative h-full w-full">
            {['Islamabad', 'Lahore', 'Bannu', 'Waziristan', 'Essa Khel', 'Lakki Marwat', 'Naurang'].map((city, index) => (
              <div 
                key={city}
                className="absolute w-3 h-3 bg-secondary rounded-full animate-pulse"
                style={{
                  left: `${20 + (index * 10)}%`,
                  top: `${30 + (Math.sin(index) * 30)}%`
                }}
                data-tooltip={city}
              ></div>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-medium">
            Serving 7+ Destinations
          </div>
        </div>
      </div>

      {/* Animated Scrolling Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-dark bg-opacity-50 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-white">
          {Array(5).fill("🚌 Safe Travels • 🕒 On-Time Service • 💺 Comfortable Seating • 🌟 Rated 4.9/5 • 🛣️ 500+ Daily Trips").join(" • ")}
        </div>
      </div>
    </div>
  );
};

