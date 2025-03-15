
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = "dark", className = "" }) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 font-serif ${variant === 'light' ? 'text-white' : 'text-luxury-800'} ${className}`}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-luxury-accent text-white font-serif font-bold">
        N
      </div>
      <span className="text-xl font-medium tracking-tight">Noluthando</span>
    </Link>
  );
};

export default Logo;
