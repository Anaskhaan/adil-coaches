import React, { useEffect, useRef } from 'react';

export function FleetBanner() {
  const busRef = useRef(null);

  useEffect(() => {
    const bus = busRef.current;
    if (!bus) return;

    let position = -200;
    let direction = 1;
    const speed = 1.5;

    const animateBus = () => {
      position += direction * speed;
      
      if (position > window.innerWidth) {
        position = -200;
      }

      bus.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animateBus);
    };

    animateBus();

    return () => cancelAnimationFrame(animateBus);
  }, []);

  return (
    <div className="relative overflow-hidden bg-primary-dark rounded-xl shadow-2xl h-64 ">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full mix-blend-overlay filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full mix-blend-overlay filter blur-xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-lightest mb-4">
            <span className="block">Our Premium</span>
            <span className="text-warning">Coach Fleet</span>
          </h1>
          
          <p className="text-lg text-secondary-light max-w-2xl mx-auto mb-6">
            Travel in comfort with our modern fleet of luxury coaches
          </p>
          
         
        </div>
      </div>
      
      {/* Animated Bus */}
      <div 
        ref={busRef}
        className="absolute bottom-8 left-0 w-48 h-24 transition-all duration-1000 ease-linear"
      >
        <svg 
          viewBox="0 0 200 100" 
          className="w-full h-full"
        >
          {/* Bus body */}
          <rect x="10" y="30" width="180" height="50" rx="5" fill="var(--secondary)" />
          
          {/* Bus windows */}
          <rect x="25" y="35" width="30" height="15" rx="2" fill="var(--primary-light)" />
          <rect x="65" y="35" width="30" height="15" rx="2" fill="var(--primary-light)" />
          <rect x="105" y="35" width="30" height="15" rx="2" fill="var(--primary-light)" />
          <rect x="145" y="35" width="30" height="15" rx="2" fill="var(--primary-light)" />
          
          {/* Bus wheels */}
          <circle cx="50" cy="80" r="10" fill="var(--gray-darkest)" />
          <circle cx="150" cy="80" r="10" fill="var(--gray-darkest)" />
          
          {/* Bus text */}
          <text 
            x="100" 
            y="65" 
            fontSize="12" 
            fontWeight="bold" 
            fill="var(--warning)" 
            textAnchor="middle" 
            dominantBaseline="middle"
          >
            AdilCoaches
          </text>
          
          {/* Bus details */}
          <line x1="10" y1="40" x2="10" y2="70" stroke="var(--warning)" strokeWidth="3" />
          <line x1="190" y1="40" x2="190" y2="70" stroke="var(--warning)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
};

