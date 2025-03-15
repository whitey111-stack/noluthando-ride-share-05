
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "/lovable-uploads/7451e43c-2d21-4442-b890-234ed278c300.png",
}) => {
  return (
    <div 
      className="page-header relative py-24 md:py-32 bg-luxury-800"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-luxury-900/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 animate-slideDown opacity-0" style={{ animationFillMode: 'forwards' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-slideUp opacity-0 animate-delay-200" style={{ animationFillMode: 'forwards' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
