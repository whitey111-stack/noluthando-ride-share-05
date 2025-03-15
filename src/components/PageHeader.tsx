
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "/lovable-uploads/3ae92ccc-005e-476f-abf3-e5f868a4fb60.png",
}) => {
  return (
    <div 
      className="page-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="page-header-content">
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
  );
};

export default PageHeader;
