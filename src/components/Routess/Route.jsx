
const Routes = () => {
     const routes = {
    islamabad: [
      { destination: "Bannu", distance: "308km", duration: "4h 30m", features: ["Express", "AC Service"] },
      { destination: "Essa Khel", distance: "242km", duration: "3h", features: ["Standard", "AC Service"] },

      { destination: "Lakki Marwat", distance: "275km", duration: "3h 38m", features: ["Standard", "AC Service"] },
      { destination: "Naurang", distance: "300km", duration: "4h ", features: ["Express"] },
    ],
    bannu: [
      { destination: "Waziristan", distance: "210km", duration: "3h", features: ["Standard"] },
      { destination: "Lahore", distance: "550km", duration: "8  h", features: ["Premium", "AC",  "Entertainment"] }
    ]
  };
  return (
    <div>
       <div className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-primary-light opacity-10"></div>
      <div className="absolute bottom-10 left-0 w-48 h-48 rounded-full bg-secondary-light opacity-10"></div>
      
      {/* Animated Route Line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          viewBox="0 0 1200 200" 
          className="w-full h-full opacity-20"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,100 Q300,50 600,150 Q900,50 1200,100" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="10 6"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Adil Coaches</span> Routes Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting cities with comfort and reliability across Pakistan
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Islamabad Routes */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-dark to-primary"></div>
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  From <span className="text-primary">Islamabad</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                {routes.islamabad.map((route, index) => (
                  <div key={index} className="group flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="relative mt-1 mr-4">
                      <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                      {index !== routes.islamabad.length - 1 && (
                        <div className="absolute top-6 left-1/2 w-0.5 h-12 bg-gray-200 transform -translate-x-1/2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                          Islamabad → {route.destination}
                        </h4>
                        <div className="flex space-x-2">
                          {route.features.includes("Express") && (
                            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">Express</span>
                          )}
                          {route.features.includes("Premium") && (
                            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Premium</span>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="flex items-center mr-4">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {route.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          </svg>
                          {route.distance}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {route.features.includes("AC Service") && (
                          <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                            </svg>
                            AC
                          </span>
                        )}
                        {route.features.includes("WiFi") && (
                          <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-800 rounded-full flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                            </svg>
                            WiFi
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bannu Routes */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-dark to-secondary"></div>
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  From <span className="text-secondary">Bannu</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                {routes.bannu.map((route, index) => (
                  <div key={index} className="group flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="relative mt-1 mr-4">
                      <div className="w-6 h-6 rounded-full bg-secondary-light flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      </div>
                      {index !== routes.bannu.length - 1 && (
                        <div className="absolute top-6 left-1/2 w-0.5 h-12 bg-gray-200 transform -translate-x-1/2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-secondary transition-colors duration-200">
                          Bannu → {route.destination}
                        </h4>
                        <div className="flex space-x-2">
                          {route.features.includes("Express") && (
                            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">Express</span>
                          )}
                          {route.features.includes("Premium") && (
                            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Premium</span>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="flex items-center mr-4">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {route.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          </svg>
                          {route.distance}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {route.features.includes("AC") && (
                          <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                            </svg>
                            AC
                          </span>
                        )}
                        {route.features.includes("WiFi") && (
                          <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-800 rounded-full flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                            </svg>
                            WiFi
                          </span>
                        )}
                        {route.features.includes("Entertainment") && (
                          <span className="text-xs font-medium px-2 py-1 bg-pink-100 text-pink-800 rounded-full flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            Entertainment
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Can't find your desired route? Our network is expanding regularly!
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Request a New Route
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Routes
