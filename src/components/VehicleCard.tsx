
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface VehicleCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  pricePerDay?: number;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  name,
  image,
  description,
  features,
  pricePerDay,
}) => {
  return (
    <div className="vehicle-card opacity-0 animate-slideUp" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
      <div className="vehicle-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="vehicle-card-content">
        <h3 className="vehicle-card-title">{name}</h3>
        <p className="vehicle-card-description">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <span 
              key={index} 
              className="text-xs bg-luxury-100 text-luxury-700 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {pricePerDay && (
          <div className="flex justify-between items-center mt-4 mb-4">
            <div className="font-serif">
              <span className="text-sm text-luxury-500">Starting from</span>
              <p className="text-xl font-semibold text-luxury-800">
                R{pricePerDay} <span className="text-sm font-normal">per day</span>
              </p>
            </div>
          </div>
        )}

        <div className="flex space-x-2">
          <Button 
            variant="outline"
            className="flex-1 border-luxury-accent text-luxury-accent hover:bg-luxury-accent/10"
            asChild
          >
            <Link to={`/vehicles/${id}`}>Details</Link>
          </Button>
          <Button 
            className="flex-1 bg-luxury-accent hover:bg-luxury-accent/90 text-white"
            asChild
          >
            <Link to={`/book?vehicle=${id}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
