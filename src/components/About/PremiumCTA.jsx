import { Link } from "react-router-dom";

export const PremiumCTA = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-darkest to-primary-darker py-24 px-6 shadow-2xl rounded-3xl">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-0 w-64 h-64 rounded-full bg-secondary-light blur-3xl opacity-40"></div>
        <div className="absolute right-1/3 bottom-0 w-80 h-80 rounded-full bg-primary-light blur-3xl opacity-30"></div>
      </div>
      
      {/* Moving Bus Animation */}
      <div className="absolute left-0 top-1/2 w-32 h-12 -translate-y-1/2 animate-[drive_20s_linear_infinite]">
        <svg viewBox="0 0 200 50" className="w-full h-full text-white opacity-90">
          <path fill="currentColor" d="M10,25 Q30,5 50,25 Q70,45 90,25 Q110,5 130,25 Q150,45 170,25 L190,25 L200,35 L200,50 L0,50 L0,35 Z"/>
          <circle cx="40" cy="40" r="8" fill="#1F2937"/>
          <circle cx="160" cy="40" r="8" fill="#1F2937"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready for Your <span className="text-secondary-light">Next Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Experience the Adil Coaches difference - where every mile is a testament to comfort, safety, and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="relative overflow-hidden group px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10">Contact Our Team</span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary-light to-secondary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 mr-3">
                <svg className="w-5 h-5 text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-300 text-sm">5,000+ Daily Passengers</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 mr-3">
                <svg className="w-5 h-5 text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span className="text-gray-300 text-sm">98% On-Time Arrival</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};