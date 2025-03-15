
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  backgroundImage = "/lovable-uploads/6080201b-f8c1-4e99-87e9-55a6b812bb5b.png" 
}) => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-luxury-900/50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-luxury-900/80 to-transparent" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slideDown opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-semibold mb-4">
            Luxury Chauffeur Service
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transform every journey into a premium experience with our exceptional service
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp opacity-0 animate-delay-300" style={{ animationFillMode: 'forwards' }}>
          <Link to="/book" className="luxury-btn-primary py-3 px-8 text-base">
            Book Now
          </Link>
          <Link to="/vehicles" className="luxury-btn-outline py-3 px-8 text-base border-white text-white hover:bg-white/10">
            <span>Explore Our Fleet</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-lg p-4 md:p-6 max-w-4xl mx-auto animate-fadeIn opacity-0 animate-delay-500" style={{ animationFillMode: 'forwards' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div className="text-center p-3">
                <h3 className="font-serif text-lg font-medium mb-1">Exclusive Fleet</h3>
                <p className="text-sm text-white/80">Luxury vehicles for every occasion</p>
              </div>
              <div className="text-center p-3 border-t md:border-t-0 md:border-l md:border-r border-white/20">
                <h3 className="font-serif text-lg font-medium mb-1">Professional Chauffeurs</h3>
                <p className="text-sm text-white/80">Trained and experienced drivers</p>
              </div>
              <div className="text-center p-3 border-t md:border-t-0 border-white/20">
                <h3 className="font-serif text-lg font-medium mb-1">Exceptional Service</h3>
                <p className="text-sm text-white/80">Personalized for your comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
