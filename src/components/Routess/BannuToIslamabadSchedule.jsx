export const BannuToIslamabadSchedule = () => {
  const buses = [
    {
      id: 1,
      busNumber: "ADL-101",
      departure: "06:00 AM",
      arrival: "11:30 AM",
      type: "EXPRESS",
      contact: "0300-1234567",
      features: ["AC", "WiFi", "Refreshments"],
      seats: 45,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: 2,
      busNumber: "ADL-202",
      departure: "08:30 AM",
      arrival: "02:00 PM",
      type: "STANDARD",
      contact: "0300-7654321",
      features: ["AC"],
      seats: 52,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      busNumber: "ADL-303",
      departure: "12:00 PM",
      arrival: "05:30 PM",
      type: "EXPRESS",
      contact: "0300-9876543",
      features: ["AC", "WiFi", "Entertainment"],
      seats: 40,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: 4,
      busNumber: "ADL-404",
      departure: "03:30 PM",
      arrival: "09:00 PM",
      type: "LUXURY",
      contact: "0300-4567890",
      features: ["AC", "WiFi", "Refreshments", "Entertainment", "Recliners"],
      seats: 35,
      color: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      id: 5,
      busNumber: "ADL-505",
      departure: "07:00 PM",
      arrival: "12:30 AM",
      type: "STANDARD",
      contact: "0300-6789012",
      features: ["AC"],
      seats: 52,
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          <span className="text-primary">Bannu → Islamabad</span> Bus Schedule
        </h1>
        <p className="text-xl text-gray-600">
          Comfortable journeys with Adil Coaches
        </p>
      </div>

      {/* Bus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.map((bus) => (
          <div 
            key={bus.id} 
            className={`relative overflow-hidden rounded-2xl shadow-xl text-white ${bus.color}`}
          >
            {/* Bus Type Ribbon */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
              {bus.type}
            </div>

            {/* Bus Number */}
            <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-mono">
              {bus.busNumber}
            </div>

            {/* Main Content */}
            <div className="p-6 pt-14">
              {/* Schedule */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{bus.departure}</div>
                  <div className="text-sm opacity-80">Departure</div>
                </div>
                <div className="flex-1 px-4 relative">
                  <div className="h-px bg-white/50 w-full absolute top-1/2"></div>
                  <div className="absolute left-1/2 -top-3 -ml-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{bus.arrival}</div>
                  <div className="text-sm opacity-80">Arrival</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {bus.features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & Seats */}
              <div className="flex justify-between items-center">
                <a 
                  href={`tel:${bus.contact.replace(/-/g, '')}`} 
                  className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  {bus.contact}
                </a>
                <div className="text-sm bg-black/20 px-3 py-1 rounded-full">
                  {bus.seats} seats
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-white/10"></div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>All schedules are subject to change. Please confirm 2 hours before departure.</p>
        <p className="mt-2">
          Customer care: <a href="tel:03001112222" className="text-primary font-medium">0300-111-2222</a>
        </p>
      </div>
    </div>
  );
};