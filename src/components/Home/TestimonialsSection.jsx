import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Business Executive",
      rating: 5,
      content:
        "Adil Coaches redefined luxury travel for me. The executive class seating and professional service made my weekly commutes between cities an absolute pleasure. I've never arrived so refreshed!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Frequent Traveler",
      rating: 5,
      content:
        "The sleeper coaches are a game-changer for overnight journeys. I actually arrived at my destination more rested than when I left! The attendants were exceptionally courteous.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Usman Malik",
      role: "Tour Operator",
      rating: 4,
      content:
        "I regularly book Adil Coaches for my tour groups. Their reliability, comfort standards, and professional drivers make them the only choice for premium group travel.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-secondary-dark bg-secondary-lightest rounded-full mb-4">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-darkest mb-6">
            What Our <span className="text-secondary">Passengers Say</span>
          </h2>
          <p className="text-xl text-gray-darker max-w-3xl mx-auto">
            Hear from travelers who've experienced the Adil Coaches difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-secondary-light"></div>

              <div className="p-8">
                {/* Quote icon */}
                <FaQuoteLeft className="text-secondary-light text-3xl mb-6 opacity-20" />

                {/* Testimonial content */}
                <p className="text-gray-darker text-lg mb-6 italic">
                  {testimonial.content}
                </p>

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-secondary"
                          : "text-gray-lighter"
                      }`}
                    />
                  ))}
                </div>

                {/* Client info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-secondary-light"
                  />
                  <div>
                    <h4 className="font-bold text-primary-darkest">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-dark text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary-darkest mb-6">
            Ready to experience luxury travel?
          </h3>
          <button className="px-8 py-3 bg-gradient-to-r from-secondary to-secondary-light text-primary-darkest font-bold rounded-full hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-1">
            Book Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
