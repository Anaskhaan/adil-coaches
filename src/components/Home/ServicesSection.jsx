import {
  FaTv,
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
    <section className="py-20 bg-gray-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-secondary-dark bg-secondary-lightest rounded-full mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-darkest mb-6">
            Our <span className="text-secondary">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-darker max-w-3xl mx-auto">
            Experience travel redefined with Adil Coaches' exceptional services
            designed for your comfort and convenience.
          </p>
        </div>

        {/* Route Network */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-primary-darkest mb-6 flex items-center">
              <FaMapMarkedAlt className="text-secondary mr-3" />
              Extensive Route Network
            </h3>
            <p className="text-lg text-gray-darker mb-6">
              We connect major cities across the region with our comprehensive
              network of routes, ensuring you reach your destination
              comfortably.
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Islamabad",
                "Lahore",
                "Bannu",
                "Waziristan",
                "Essa Khell",
                "Lakki Marwat",
                "Naurang",
              ].map((city) => (
                <li key={city} className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span className="text-gray-darker">{city}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-2 border-2 border-secondary text-secondary-dark hover:bg-secondary-lightest font-medium rounded-full transition-colors hover:shadow-md">
              View All Routes
            </button>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-lighter h-80">
            <img
              src={map}
              alt="Route Network"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-darkest/40 to-transparent"></div>
          </div>
        </div>

        {/* Fleet Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary-darkest mb-12 text-center">
            Our <span className="text-secondary">Luxury Fleet</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-darkest/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 bg-gray-lightest">
                  <h4 className="text-xl font-bold text-primary-darkest mb-2">
                    {fleet.title}
                  </h4>
                  <p className="text-gray-darker">{fleet.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="text-3xl font-bold text-primary-darkest mb-12 text-center">
            Premium <span className="text-secondary">Amenities</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: <FaTv className="w-8 h-8" />, name: "Television" },
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
                className="flex flex-col items-center p-6 bg-white rounded-xl hover:bg-secondary-lightest transition-colors border border-gray-lighter hover:border-secondary-light hover:shadow-md"
              >
                <div className="text-secondary mb-3">{amenity.icon}</div>
                <span className="text-primary-darkest font-medium text-center">
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
