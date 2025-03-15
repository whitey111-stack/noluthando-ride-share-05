
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import VehicleCard from "@/components/VehicleCard";
import BookingBanner from "@/components/BookingBanner";
import Testimonials from "@/components/Testimonials";
import { Award, Clock, Calendar, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const vehicles = [
  {
    id: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&w=1200",
    description: "Luxury sedan with premium comfort and advanced technology.",
    features: ["Premium Comfort", "Advanced Technology", "Spacious Interior"],
    pricePerDay: 2500,
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200",
    description: "Executive sedan with innovative features and elegant design.",
    features: ["Luxury Interior", "Entertainment System", "Executive Comfort"],
    pricePerDay: 2700,
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes-Benz V-Class",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200",
    description: "Spacious luxury van perfect for group travel and VIP transport.",
    features: ["Group Travel", "Spacious Interior", "Premium Comfort"],
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
        
        {/* Featured Vehicles */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vehicles.map((vehicle, index) => (
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
