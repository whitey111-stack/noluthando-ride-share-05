
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="light" className="mb-4" />
            <p className="text-luxury-200 max-w-xs">
              Premium chauffeur services with a fleet of luxury vehicles for your 
              transportation needs. Experience comfort, style, and professionalism.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-luxury-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-luxury-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-luxury-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  Our Vehicles
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-luxury-200">Airport Transfers</li>
              <li className="text-luxury-200">Corporate Travel</li>
              <li className="text-luxury-200">Wedding Transportation</li>
              <li className="text-luxury-200">VIP Services</li>
              <li className="text-luxury-200">Special Events</li>
              <li className="text-luxury-200">Tours & Sightseeing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-luxury-accent shrink-0 mt-0.5" />
                <span className="text-luxury-200">
                  123 Luxury Drive<br />
                  Johannesburg, 2000<br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-luxury-accent" />
                <a href="tel:+27123456789" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-luxury-accent" />
                <a href="mailto:info@noluthando.com" className="text-luxury-200 hover:text-luxury-accent transition-colors">
                  info@noluthando.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-luxury-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-300 text-sm">
            &copy; {currentYear} Noluthando Transportation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-luxury-300 text-sm hover:text-luxury-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-luxury-300 text-sm hover:text-luxury-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
