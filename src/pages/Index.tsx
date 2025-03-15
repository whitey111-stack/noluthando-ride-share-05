
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import VehicleCard from "@/components/VehicleCard";
import BookingBanner from "@/components/BookingBanner";
import Testimonials from "@/components/Testimonials";
import { Award, Clock, Calendar, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const vehicles = [
  {
    id: "renault-triber",
    name: "Renault Triber",
    image: "/lovable-uploads/6080201b-f8c1-4e99-87e9-55a6b812bb5b.png",
    description: "Spacious and comfortable, perfect for family trips.",
    features: ["Spacious Interior", "Fuel Efficient", "Comfortable Ride"],
    pricePerDay: 1800,
  },
  {
    id: "renault-captur",
    name: "Renault Captur",
    image: "/lovable-uploads/189b139c-83f2-4c0a-970d-a98f535517c1.png",
    description: "Elegant crossover with stylish design and modern features.",
    features: ["Stylish Design", "Advanced Features", "Premium Comfort"],
    pricePerDay: 2200,
  },
  {
    id: "renault-kadjar",
    name: "Renault Kadjar",
    image: "/lovable-uploads/33670401-cef1-4e4c-b6ce-81827263b331.png",
    description: "Sophisticated SUV with elegant styling and premium finish.",
    features: ["Premium Interior", "Smooth Drive", "Spacious Cabin"],
    pricePerDay: 2400,
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    image: "/lovable-uploads/7451e43c-2d21-4442-b890-234ed278c300.png",
    description: "Powerful SUV perfect for both city drives and adventures.",
    features: ["Powerful Engine", "Rugged Capability", "Luxurious Interior"],
    pricePerDay: 3200,
  },
];

const features = [
  {
    icon: <Award className="h-10 w-10 text-luxury-accent" />,
    title: "Premium Vehicles",
    description: "Our fleet consists of the latest luxury vehicles, meticulously maintained and equipped with premium amenities for your comfort.",
  },
  {
    icon: <Shield className="h-10 w-10 text-luxury-accent" />,
    title: "Professional Chauffeurs",
    description: "Our chauffeurs are highly trained, experienced professionals committed to providing exceptional service and ensuring your safety.",
  },
  {
    icon: <Clock className="h-10 w-10 text-luxury-accent" />,
    title: "Punctuality Guaranteed",
    description: "We understand the value of your time. Our drivers are always punctual, ensuring you reach your destination on schedule.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-luxury-accent" />,
    title: "Flexible Bookings",
    description: "We offer flexible booking options to accommodate your changing plans and requirements with ease.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-luxury-accent" />,
    title: "Nationwide Service",
    description: "Our services are available across major cities and airports, providing consistent luxury transportation wherever you go.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Quick Booking Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-slideUp" style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-4">
                  Book Your Luxury Ride
                </h2>
                <p className="text-lg text-luxury-600 mb-6">
                  Experience the ultimate in comfort and style with our premium chauffeur services. 
                  Perfect for business travel, special occasions, or whenever you desire a sophisticated journey.
                </p>
                <ul className="space-y-4">
                  {["Airport transfers", "Corporate travel", "Wedding transport", "Special events", "City tours"].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-luxury-accent mr-3"></div>
                      <span className="text-luxury-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="opacity-0 animate-slideUp animate-delay-200" style={{ animationFillMode: 'forwards' }}>
                <BookingForm simplified />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Vehicles Carousel */}
        <section className="py-16 bg-luxury-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-4">
                Our Luxury Fleet
              </h2>
              <p className="text-lg text-luxury-600 max-w-3xl mx-auto">
                Choose from our selection of premium vehicles, each offering exceptional comfort and style for your journey.
              </p>
            </div>
            
            <div className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {vehicles.map((vehicle) => (
                    <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
                      <VehicleCard 
                        id={vehicle.id}
                        name={vehicle.name}
                        image={vehicle.image}
                        description={vehicle.description}
                        features={vehicle.features}
                        pricePerDay={vehicle.pricePerDay}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-serif text-xl font-medium text-luxury-800 mb-2">{vehicle.name}</h3>
                    <p className="text-luxury-600 text-sm mb-4 min-h-[40px]">{vehicle.description}</p>
                    <Link 
                      to={`/vehicles/${vehicle.id}`} 
                      className="block text-center py-2 px-4 bg-luxury-accent text-white rounded hover:bg-luxury-800 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/vehicles" 
                className="luxury-btn-outline border-luxury-accent text-luxury-accent hover:bg-luxury-accent/10"
              >
                View All Vehicles
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-4">
                Why Choose Noluthando
              </h2>
              <p className="text-lg text-luxury-600 max-w-3xl mx-auto">
                We are dedicated to providing exceptional transportation solutions tailored to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border border-luxury-200 hover:border-luxury-accent luxury-transition opacity-0 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-serif font-semibold text-luxury-800 mb-2">{feature.title}</h3>
                    <p className="text-luxury-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Booking Banner */}
        <BookingBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
