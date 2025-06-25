import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  return (
    <section className="relative py-24 bg-gray-lightest overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-secondary-light blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary-light blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information - Left Side */}
          <div className="space-y-10">
            <div>
              <span className="inline-block px-4 py-1 text-sm font-semibold text-secondary-dark bg-secondary-lightest rounded-full mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-darkest mb-6">
                Contact <span className="text-secondary">Adil Coaches</span>
              </h2>
              <p className="text-xl text-gray-darker">
                Our team is ready to assist you with bookings, inquiries, or any
                travel needs.
              </p>
            </div>

            <div className="space-y-8">
              {/* Contact Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-secondary"
              >
                <div className="bg-secondary-lightest p-3 rounded-lg mr-6">
                  <FaMapMarkerAlt className="text-secondary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-darkest mb-2">
                    Our Terminal
                  </h3>
                  <p className="text-gray-darker">
                    Adil Coaches, General Bus Stand,
                    <br />
                    Bannu, Pakistan
                  </p>
                </div>
              </motion.div>

              {/* Contact Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-primary"
              >
                <div className="bg-primary-lightest p-3 rounded-lg mr-6">
                  <FaPhone className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-darkest mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-darker">
                    +92 (333) 973-8506 (Office)
                    <br />
                    +92 300 7654321 (WhatsApp)
                  </p>
                </div>
              </motion.div>

              {/* Contact Card 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-secondary-dark"
              >
                <div className="bg-secondary-lightest p-3 rounded-lg mr-6">
                  <FaEnvelope className="text-secondary-dark text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-darkest mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-darker">
                    bookings@adilcoaches.com
                    <br />
                    support@adilcoaches.com
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8 sm:p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-secondary-lightest p-3 rounded-lg mr-4">
                    <FaPaperPlane className="text-secondary text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-darkest">
                    Send Us a Message
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="peer h-12 w-full border-b-2 border-gray-lighter text-gray-darker placeholder-transparent focus:border-secondary focus:outline-none"
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-darker text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                      >
                        Full Name
                      </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="peer h-12 w-full border-b-2 border-gray-lighter text-gray-darker placeholder-transparent focus:border-secondary focus:outline-none"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-darker text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      className="peer h-12 w-full border-b-2 border-gray-lighter text-gray-darker placeholder-transparent focus:border-secondary focus:outline-none"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 -top-3.5 text-gray-darker text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <select
                      id="subject"
                      className="peer h-12 w-full border-b-2 border-gray-lighter text-gray-darker focus:border-secondary focus:outline-none bg-transparent"
                    >
                      <option value="" disabled selected></option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="group">Group Travel</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                    <label
                      htmlFor="subject"
                      className="absolute left-0 -top-3.5 text-gray-darker text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                    >
                      Subject
                    </label>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows="4"
                      className="peer h-24 w-full border-b-2 border-gray-lighter text-gray-darker placeholder-transparent focus:border-secondary focus:outline-none resize-none"
                      placeholder=" "
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-0 -top-3.5 text-gray-darker text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                    >
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-secondary to-secondary-dark text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                    <FaPaperPlane className="inline ml-2" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
