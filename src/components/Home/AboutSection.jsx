import { FaBus, FaAward, FaUserTie, FaMapMarkedAlt } from "react-icons/fa";
import img from "../../assets/images/IMG_3631.JPG";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-600 bg-amber-100 rounded-full mb-4">
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Redefining <span className="text-amber-500">Luxury Travel</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              Adil Coaches has been setting the standard for premium
              transportation since 1983, combining cutting-edge technology with
              unparalleled comfort.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={img}
                alt="Luxury Adil Coach"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg w-3/4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                40+ Years
              </h3>
              <p className="text-gray-600">
                Of excellence in luxury transportation
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Adil Coaches
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Founded with a vision to transform road travel, Adil Coaches has
              grown from a single vehicle operation to a fleet of 50+ premium
              coaches serving clients across the region. Our commitment to
              safety, comfort, and reliability has made us the preferred choice
              for discerning travelers.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaBus className="w-8 h-8 text-amber-500" />,
                  title: "Modern Fleet",
                  desc: "State-of-the-art coaches with the latest amenities",
                },
                {
                  icon: <FaUserTie className="w-8 h-8 text-amber-500" />,
                  title: "Professional Staff",
                  desc: "Highly trained drivers and attendants",
                },
                {
                  icon: <FaAward className="w-8 h-8 text-amber-500" />,
                  title: "Award Winning",
                  desc: "Recognized for excellence in service",
                },
                {
                  icon: <FaMapMarkedAlt className="w-8 h-8 text-amber-500" />,
                  title: "Extensive Routes",
                  desc: "Covering major destinations nationwide",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-xl">
                Explore Our Fleet
              </button>
              <button className="px-8 py-3 border border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 font-medium rounded-full transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
