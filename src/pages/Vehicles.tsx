
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import VehicleCard from "@/components/VehicleCard";
import BookingBanner from "@/components/BookingBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const vehicles = [
  // Sedans
  {
    id: "mercedes-s-class",
    type: "sedan",
    name: "Mercedes-Benz S-Class",
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&w=1200",
    description: "Luxury sedan with premium comfort and advanced technology.",
    features: ["Premium Comfort", "Advanced Technology", "Spacious Interior", "Elegant Design"],
    pricePerDay: 2500,
  },
  {
    id: "bmw-7-series",
    type: "sedan",
    name: "BMW 7 Series",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200",
    description: "Executive sedan with innovative features and elegant design.",
    features: ["Luxury Interior", "Entertainment System", "Executive Comfort", "Advanced Technology"],
    pricePerDay: 2700,
  },
  {
    id: "audi-a8",
    type: "sedan",
    name: "Audi A8",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200",
    description: "Premium sedan offering sophisticated luxury and cutting-edge technology.",
    features: ["Sophisticated Design", "Advanced Tech", "Luxury Comfort", "Smooth Ride"],
    pricePerDay: 2600,
  },
  {
    id: "lexus-ls",
    type: "sedan",
    name: "Lexus LS",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200",
    description: "Refined luxury sedan with exceptional comfort and craftsmanship.",
    features: ["Refined Luxury", "Japanese Craftsmanship", "Quiet Cabin", "Smooth Performance"],
    pricePerDay: 2400,
  },
  
  // SUVs
  {
    id: "range-rover",
    type: "suv",
    name: "Range Rover Autobiography",
    image: "https://images.unsplash.com/photo-1615589658982-a95a3a1a9224?q=80&w=1200",
    description: "Flagship luxury SUV combining elegance with off-road capability.",
    features: ["Luxury Interior", "Off-road Capability", "Advanced Technology", "Premium Sound System"],
    pricePerDay: 3500,
  },
  {
    id: "mercedes-gls",
    type: "suv",
    name: "Mercedes-Benz GLS",
    image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93eb?q=80&w=1200",
    description: "Spacious luxury SUV offering superior comfort and technology.",
    features: ["7-Seater Luxury", "Advanced Technology", "Premium Interior", "Powerful Performance"],
    pricePerDay: 3300,
  },
  {
    id: "bmw-x7",
    type: "suv",
    name: "BMW X7",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1200",
    description: "BMW's largest and most luxurious SUV with exceptional comfort.",
    features: ["Spacious Interior", "Premium Features", "Executive Comfort", "Advanced Technology"],
    pricePerDay: 3400,
  },
  
  // Vans
  {
    id: "mercedes-v-class",
    type: "van",
    name: "Mercedes-Benz V-Class",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200",
    description: "Spacious luxury van perfect for group travel and VIP transport.",
    features: ["Group Travel", "Spacious Interior", "Premium Comfort", "Business Ready"],
    pricePerDay: 3200,
  },
  {
    id: "vw-multivan",
    type: "van",
    name: "Volkswagen Multivan",
    image: "https://images.unsplash.com/photo-1609520505218-7421df49ced7?q=80&w=1200",
    description: "Versatile van offering comfort and space for group transportation.",
    features: ["Versatile Seating", "Comfortable Interior", "Ample Space", "Modern Technology"],
    pricePerDay: 2800,
  }
];

const Vehicles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <PageHeader 
          title="Our Luxury Fleet" 
          subtitle="Explore our collection of premium vehicles available for your journey"
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-luxury-100">
                  <TabsTrigger value="all" className="text-sm md:text-base px-4 md:px-6">All Vehicles</TabsTrigger>
                  <TabsTrigger value="sedan" className="text-sm md:text-base px-4 md:px-6">Luxury Sedans</TabsTrigger>
                  <TabsTrigger value="suv" className="text-sm md:text-base px-4 md:px-6">Premium SUVs</TabsTrigger>
                  <TabsTrigger value="van" className="text-sm md:text-base px-4 md:px-6">Executive Vans</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vehicles.map((vehicle) => (
                    <VehicleCard 
                      key={vehicle.id}
                      id={vehicle.id}
                      name={vehicle.name}
                      image={vehicle.image}
                      description={vehicle.description}
                      features={vehicle.features}
                      pricePerDay={vehicle.pricePerDay}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sedan" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vehicles.filter(v => v.type === 'sedan').map((vehicle) => (
                    <VehicleCard 
                      key={vehicle.id}
                      id={vehicle.id}
                      name={vehicle.name}
                      image={vehicle.image}
                      description={vehicle.description}
                      features={vehicle.features}
                      pricePerDay={vehicle.pricePerDay}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="suv" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vehicles.filter(v => v.type === 'suv').map((vehicle) => (
                    <VehicleCard 
                      key={vehicle.id}
                      id={vehicle.id}
                      name={vehicle.name}
                      image={vehicle.image}
                      description={vehicle.description}
                      features={vehicle.features}
                      pricePerDay={vehicle.pricePerDay}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="van" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vehicles.filter(v => v.type === 'van').map((vehicle) => (
                    <VehicleCard 
                      key={vehicle.id}
                      id={vehicle.id}
                      name={vehicle.name}
                      image={vehicle.image}
                      description={vehicle.description}
                      features={vehicle.features}
                      pricePerDay={vehicle.pricePerDay}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Fleet Information */}
        <section className="py-16 bg-luxury-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-slideUp" style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-6">
                  Fleet Excellence
                </h2>
                <div className="space-y-4 text-luxury-600">
                  <p>
                    Our fleet of luxury vehicles is meticulously maintained to ensure your safety, comfort, and satisfaction. 
                    Each vehicle undergoes regular maintenance and thorough cleaning before every journey.
                  </p>
                  <p>
                    We select only the finest vehicles from renowned manufacturers, equipped with advanced features and amenities. 
                    From premium sedans to spacious SUVs and executive vans, our diverse fleet caters to all your transportation needs.
                  </p>
                  <p>
                    All vehicles in our fleet are:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-luxury-accent mr-3"></div>
                      <span>Less than 3 years old</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-luxury-accent mr-3"></div>
                      <span>Fully insured with comprehensive coverage</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-luxury-accent mr-3"></div>
                      <span>Equipped with WiFi and device charging</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-luxury-accent mr-3"></div>
                      <span>Stocked with complimentary refreshments</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-luxury-accent mr-3"></div>
                      <span>Sanitized before each journey</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="opacity-0 animate-slideUp animate-delay-200" style={{ animationFillMode: 'forwards' }}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200" 
                    alt="Luxury Fleet" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-900/80 to-transparent flex items-end p-8">
                    <p className="text-white text-xl font-serif">Experience the difference with our premium vehicles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Banner */}
        <BookingBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Vehicles;
