import {
  FaWifi,
  FaPlug,
  FaChair,
  FaSnowflake,
  FaGlassCheers,
  FaMapMarkedAlt,
} from "react-icons/fa";
import img from "../../assets/images/exective.jpg";
import img2 from "../../assets/images/sleeper.jpg";
import img3 from "../../assets/images/standard.png";
import map from "../../assets/images/routemap.png";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-amber-600 bg-amber-100 rounded-full mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-500">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience travel redefined with Adil Coaches' exceptional services
            designed for your comfort and convenience.
          </p>
        </div>

        {/* Route Network */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FaMapMarkedAlt className="text-amber-500 mr-3" />
              Extensive Route Network
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We connect major cities across the region with our comprehensive
              network of routes, ensuring you reach your destination
              comfortably.
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {["Islamabad", "Lahore"].map((city) => (
                <li key={city} className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">{city}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-2 border border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full transition-colors">
              View All Routes
            </button>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 h-80">
            {/* Replace with your actual map image */}
            <img
              src={map}
              alt="Route Network"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Fleet Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-amber-500">Luxury Fleet</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Class",
                desc: "Premium leather seats, extra legroom, and personalized service",
                img: img,
              },
              {
                title: "Sleeper Coaches",
                desc: "Fully reclining seats for overnight journeys",
                img: img2,
              },
              {
                title: "Standard Luxury",
                desc: "Comfortable seating with all essential amenities",
                img: img3,
              },
            ].map((fleet, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={fleet.img}
                    alt={fleet.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {fleet.title}
                  </h4>
                  <p className="text-gray-600">{fleet.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Premium <span className="text-amber-500">Amenities</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: <FaWifi className="w-8 h-8" />, name: "Free Wi-Fi" },
              { icon: <FaPlug className="w-8 h-8" />, name: "Charging Ports" },
              { icon: <FaChair className="w-8 h-8" />, name: "Extra Legroom" },
              { icon: <FaSnowflake className="w-8 h-8" />, name: "AC Control" },
              {
                icon: <FaGlassCheers className="w-8 h-8" />,
                name: "Refreshments",
              },
              {
                icon: <FaMapMarkedAlt className="w-8 h-8" />,
                name: "GPS Tracking",
              },
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors"
              >
                <div className="text-amber-500 mb-3">{amenity.icon}</div>
                <span className="text-gray-800 font-medium text-center">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
