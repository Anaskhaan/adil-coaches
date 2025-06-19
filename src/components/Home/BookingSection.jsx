import { FaPhone, FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";

const DirectBookingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Tickets Directly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skip the middleman - reserve your seats directly with Adil Coaches
          </p>
        </div>

        {/* Booking Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Phone Booking */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
            <div className="flex items-start space-x-6">
              <div className="bg-amber-500 p-4 rounded-full text-white">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Call to Book
                </h3>
                <p className="text-gray-700 mb-6">
                  Speak directly with our friendly booking agents available 24/7
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+923001234567"
                    className="text-2xl font-semibold text-amber-600 hover:text-amber-700 flex items-center"
                  >
                    <span className="mr-3">📞</span>
                    +92 300 1234567
                  </a>
                  <a
                    href="tel:+923007654321"
                    className="text-xl text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <span className="mr-3">📱</span>
                    +92 300 7654321 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Booking */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-500 p-4 rounded-full text-white">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Visit Our Terminal
                </h3>
                <p className="text-gray-700 mb-6">
                  Experience our hospitality and book in person at our terminals
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Main Terminal:
                      </h4>
                      <p className="text-gray-700">
                        123 Coach Plaza, Jinnah Avenue, Bannu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaClock className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Opening Hours:
                      </h4>
                      <p className="text-gray-700">Daily 5:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaTicketAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        On-Site Benefits:
                      </h4>
                      <p className="text-gray-700">
                        Instant tickets, seat selection, and special discounts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Why Book Directly With Us?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                No booking fees
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Best seat selection
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Personalized service
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectBookingSection;
