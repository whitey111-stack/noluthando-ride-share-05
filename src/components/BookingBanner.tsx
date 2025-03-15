
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BookingBanner = () => {
  return (
    <section className="py-16 bg-luxury-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3ae92ccc-005e-476f-abf3-e5f868a4fb60.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-800 via-luxury-800/95 to-luxury-800/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Ready to Experience Luxury Transportation?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Book your premium chauffeur service today and travel in style and comfort.
          </p>
          <Link 
            to="/book" 
            className="inline-flex items-center gap-2 luxury-btn-primary py-3 px-8 text-base"
          >
            <span>Book Your Ride Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingBanner;
