export const MissionVision = () => {
  return (
    <div className="relative bg-gray-lightest py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-light opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary-light opacity-15"></div>
      
      {/* Animated Bus Icon */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <svg className="w-40 h-40 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-4">
            <div className="w-8 h-0.5 bg-secondary mr-3"></div>
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Our Foundation</span>
            <div className="w-8 h-0.5 bg-secondary ml-3"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-darkest mb-6">
            Driving <span className="text-primary">Excellence</span>, Delivering <span className="text-secondary">Trust</span>
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            The principles that guide every kilometer of our journey
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-secondary-light rounded-2xl opacity-50 group-hover:opacity-75 blur-md transition duration-300"></div>
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary-light opacity-20"></div>
              <div className="flex items-start mb-6">
                <div className="bg-primary-light p-3 rounded-lg mr-6">
                  <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-darkest mt-2">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-dark leading-relaxed mb-6">
                To revolutionize road travel in Pakistan by providing safest, most comfortable, and reliable transportation services that connect communities while setting new industry standards.
              </p>
              <ul className="space-y-3">
                {[
                  "Safety as our uncompromising priority",
                  "Customer comfort at every touchpoint",
                  "Innovative solutions for modern travelers",
                  "Sustainable transportation practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-light to-primary-light rounded-2xl opacity-50 group-hover:opacity-75 blur-md transition duration-300"></div>
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-secondary-light opacity-20"></div>
              <div className="flex items-start mb-6">
                <div className="bg-secondary-light p-3 rounded-lg mr-6">
                  <svg className="w-8 h-8 text-secondary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-darkest mt-2">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-dark leading-relaxed mb-6">
                To become Pakistan's most trusted transportation brand, recognized for transforming intercity travel through innovation, exceptional service, and unwavering commitment to passenger satisfaction.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-gray-darkest mb-3">By 2025, we aim to:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: "30+", label: "New Routes" },
                    { value: "100%", label: "Fleet Modernization" },
                    { value: "99%", label: "On-Time Performance" },
                    { value: "1M+", label: "Annual Passengers" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-primary">{item.value}</div>
                      <div className="text-sm text-gray-dark mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40+", label: "Years Experience" },
              { value: "500K+", label: "Satisfied Passengers" },
              { value: "50+", label: "Modern Coaches" },
              { value: "24/7", label: "Customer Support" }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary-dark mb-3">{item.value}</div>
                <div className="text-gray-dark uppercase text-sm tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};