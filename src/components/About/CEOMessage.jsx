import CEO from "../../assets/images/CEO.jpg";

export const CEOMessage = () => {
  return (
    <div className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-primary-lightest opacity-40"></div>
      <div className="absolute bottom-10 -left-20 w-48 h-48 rounded-full bg-secondary-lightest opacity-30"></div>
      
      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* CEO Portrait */}
          <div className="relative lg:w-1/3">
            <div className="relative w-64 h-64 mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <img 
                src={CEO} 
                alt="CEO of Adil Coaches"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-darkest to-transparent opacity-30"></div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-primary-dark">Malik Bahadur Baz Khan</h3>
              <p className="text-gray-dark">Founder & CEO</p>
              <p className="text-sm text-gray mt-2">Adil Coaches</p>
            </div>
          </div>
          
          {/* Message Content */}
          <div className="lg:w-2/3">
            <div className="flex items-center mb-6">
              <div className="w-12 h-0.5 bg-secondary mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-primary font-medium">A Message From Leadership</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-darkest mb-8 leading-tight">
              Driving Excellence in <span className="text-primary">Passenger Transportation</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-dark leading-relaxed">
              <p>
                For over 40 years, Adil Coaches has been more than just a transportation service - we've been connecting lives, communities, and opportunities across Pakistan's vibrant cities and towns.
              </p>
              
              <p>
                Our journey began with a single bus and an unwavering commitment to excellence. Today, that same commitment drives our fleet of modern coaches and our team of dedicated professionals who work tirelessly to ensure your comfort and safety.
              </p>
              
              <p className="italic border-l-4 border-primary pl-6 py-2 bg-primary-lightest">
                "At Adil Coaches, we don't just move people from point A to B - we deliver experiences that set new standards in road travel. Your trust is our most valuable asset, and we honor it with every kilometer we travel together."
              </p>
              
              <p>
                As we look to the future, we remain focused on innovation, sustainability, and exceeding customer expectations. We're not just keeping pace with the evolving transportation landscape - we're helping shape it.
              </p>
            </div>
            
            <div className="mt-10 flex items-center">
              <div className="mr-4">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-dark">
                <span className="font-semibold">Our Pledge:</span> Safe, comfortable, and reliable journeys for every passenger, every time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Signature
        <div className="mt-16 flex justify-end">
          <div className="text-right">
            <img 
              src="/ceo-signature.png" // Replace with actual signature image
              alt="CEO Signature"
              className="h-16 mb-2"
            />
            <div className="w-32 h-0.5 bg-primary mx-auto"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};