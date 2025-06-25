import { FaPhone, FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";

const DirectBookingSection = () => {
  return (
    <section className="py-16 bg-gray-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-darkest mb-4">
            Book Your Tickets Directly
          </h2>
          <p className="text-xl text-gray-darker max-w-3xl mx-auto">
            Skip the middleman - reserve your seats directly with Adil Coaches
          </p>
        </div>

        {/* Booking Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Phone Booking */}
          <div className="bg-gradient-to-br from-secondary-lightest to-secondary-lighter p-8 rounded-xl border border-secondary-light shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-6">
              <div className="bg-secondary p-4 rounded-full text-gray-lightest">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-darkest mb-3">
                  Call to Book
                </h3>
                <p className="text-gray-darker mb-6">
                  Speak directly with our friendly booking agents available 24/7
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+923001234567"
                    className="text-2xl font-semibold text-secondary-dark hover:text-secondary-darker flex items-center transition-colors"
                  >
                    <span className="mr-3">📞</span>
                    +92 (333) 973-8506
                  </a>
                  <a
                    href="tel:+923007654321"
                    className="text-xl text-gray-darker hover:text-primary-darkest flex items-center transition-colors"
                  >
                    <span className="mr-3">📱</span>
                    +92 300 7654321 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Booking */}
          <div className="bg-gradient-to-br from-primary-lightest to-primary-lighter p-8 rounded-xl border border-primary-light shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-6">
              <div className="bg-primary p-4 rounded-full text-gray-lightest">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-darkest mb-3">
                  Visit Our Terminal
                </h3>
                <p className="text-gray-darker mb-6">
                  Experience our hospitality and book in person at our terminals
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-darkest">
                        Main Terminal:
                      </h4>
                      <p className="text-gray-darker">
                        Adil Coaches, General Bus Stand, Bannu, Pakistan
                      </p>

                      <h4 className="font-semibold text-primary-darkest">
                        Islamabad Terminal:
                      </h4>
                      <p className="text-gray-darker">
                        J2PM+2HF, Pirwadhai, Rawalpindi, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaClock className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-darkest">
                        Opening Hours:
                      </h4>
                      <p className="text-gray-darker">
                        Daily 5:00 AM - 01:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaTicketAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-darkest">
                        On-Site Benefits:
                      </h4>
                      <p className="text-gray-darker">
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
        <div className="mt-12 bg-white p-6 rounded-lg border border-gray-lighter max-w-4xl mx-auto shadow-sm">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary-darkest mb-3">
              Why Book Directly With Us?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-darker">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                No booking fees
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Best seat selection
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
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
