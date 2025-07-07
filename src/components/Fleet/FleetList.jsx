import { useState } from 'react';
import { Link } from 'react-router-dom';

export function FleetList() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedBus, setExpandedBus] = useState(null);

  // Dummy bus data - replace with your actual data
  const buses = [
    {
      id: 1,
      name: 'Executive Class',
      type: 'luxury',
      featuredImage: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Our premium Executive Class coaches offer unparalleled comfort with spacious leather seats, onboard entertainment, and premium amenities for long-distance travel.',
      images: [
        'https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      features: [
        '36 reclining leather seats',
        'Onboard WiFi',
        'Personal entertainment screens',
        'USB charging ports',
        'Climate control',
        'Onboard restroom'
      ]
    },
    {
      id: 2,
      name: 'Business Class',
      type: 'premium',
      featuredImage: 'https://images.unsplash.com/photo-1508503579828-f6837f0d7c8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'The perfect balance of comfort and value, our Business Class coaches feature plush seating, ample legroom, and modern amenities for a pleasant journey.',
      images: [
        'https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1508503579828-f6837f0d7c8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      features: [
        '44 reclining seats',
        'Overhead storage',
        'Reading lights',
        'Climate control',
        'USB charging ports'
      ]
    },
    {
      id: 3,
      name: 'Standard Coach',
      type: 'standard',
      featuredImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Reliable and comfortable, our Standard Coaches provide quality transportation with comfortable seating and essential amenities at an affordable price.',
      images: [
        'https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      features: [
        '52 comfortable seats',
        'Ample legroom',
        'Overhead storage',
        'Climate control',
        'Reading lights'
      ]
    },
    {
      id: 4,
      name: 'Mini Coach',
      type: 'mini',
      featuredImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Ideal for smaller groups, our Mini Coaches offer the same Adil Coaches quality in a more compact package, perfect for short trips and group outings.',
      images: [
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      features: [
        '24 comfortable seats',
        'Compact and maneuverable',
        'Overhead storage',
        'Climate control',
        'Perfect for small groups'
      ]
    }
  ];

  const filteredBuses = activeTab === 'all' 
    ? buses 
    : buses.filter(bus => bus.type === activeTab);

  const toggleExpand = (busId) => {
    setExpandedBus(expandedBus === busId ? null : busId);
  };

  return (
    <div className="py-12 bg-gray-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-darkest sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Fleet
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-secondary-dark">
            Discover our modern, comfortable, and reliable coaches designed for your journey.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-darkest hover:bg-gray-lightest'
              }`}
            >
              All Coaches
            </button>
            <button
              onClick={() => setActiveTab('luxury')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'luxury' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-darkest hover:bg-gray-lightest'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'premium' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-darkest hover:bg-gray-lightest'
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'standard' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-darkest hover:bg-gray-lightest'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setActiveTab('mini')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'mini' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-darkest hover:bg-gray-lightest'
              }`}
            >
              Mini
            </button>
          </div>
        </div>

        {/* Bus Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {filteredBuses.map((bus) => (
            <div 
              key={bus.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-lightest"
            >
              {/* Featured Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={bus.featuredImage}
                  alt={bus.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-2xl font-bold text-white">{bus.name}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-secondary-dark mb-4">{bus.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-darkest mb-2">Key Features:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {bus.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-4 w-4 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-secondary-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery and Expand Button */}
                <div>
                  <button
                    onClick={() => toggleExpand(bus.id)}
                    className="flex items-center text-primary hover:text-primary-dark font-medium"
                  >
                    {expandedBus === bus.id ? 'Hide Gallery' : 'View Gallery'}
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform ${expandedBus === bus.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded Gallery */}
                  {expandedBus === bus.id && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {bus.images.map((image, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg border border-gray-lightest">
                          <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            src={image}
                            alt={`${bus.name} ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to book your journey?</h3>
          <p className="text-primary-light mb-6 max-w-2xl mx-auto">
            Our fleet is maintained to the highest standards to ensure your comfort and safety on every trip.
          </p>
            <Link to="/contact" className="bg-warning text-primary-dark font-semibold py-3 px-8 rounded-lg hover:bg-error transition-colors duration-300">
                Contact Us
            </Link>
        </div>
      </div>
    </div>
  );
}