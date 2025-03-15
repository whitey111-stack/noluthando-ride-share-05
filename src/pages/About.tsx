
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BookingBanner from "@/components/BookingBanner";
import { Award, UserCheck, Clock, Heart, Target, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="h-10 w-10 text-luxury-accent" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from the quality of our vehicles to the professionalism of our chauffeurs.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-luxury-accent" />,
      title: "Reliability",
      description: "We are committed to reliability, ensuring that our clients can depend on us for punctual and consistent service.",
    },
    {
      icon: <Heart className="h-10 w-10 text-luxury-accent" />,
      title: "Customer Focus",
      description: "We place our customers at the center of everything we do, tailoring our services to meet their specific needs and preferences.",
    },
    {
      icon: <Target className="h-10 w-10 text-luxury-accent" />,
      title: "Integrity",
      description: "We conduct our business with the highest level of integrity and transparency, building trust with our clients.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-luxury-accent" />,
      title: "Innovation",
      description: "We continuously innovate to enhance our services and provide cutting-edge solutions for our clients' transportation needs.",
    },
    {
      icon: <Clock className="h-10 w-10 text-luxury-accent" />,
      title: "Punctuality",
      description: "We respect your time and schedule, ensuring that our services are always delivered promptly and efficiently.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <PageHeader 
          title="About Noluthando" 
          subtitle="Luxury transportation redefined for the discerning client"
        />
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-slideUp" style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-luxury-600">
                  <p>
                    Founded in 2015, Noluthando Transportation was born from a vision to redefine luxury transportation in South Africa. 
                    What began as a small fleet of premium vehicles has grown into a comprehensive chauffeur service trusted by discerning clients across the country.
                  </p>
                  <p>
                    Our journey has been driven by a passion for excellence and a commitment to providing exceptional service. 
                    We understand that transportation is more than just moving from one point to another—it's an experience that should reflect your style and meet your specific needs.
                  </p>
                  <p>
                    Today, Noluthando stands as a symbol of luxury, reliability, and professionalism in the transportation industry. 
                    Our expanding fleet of meticulously maintained vehicles and team of professional chauffeurs continue to deliver unparalleled service to our growing clientele.
                  </p>
                </div>
              </div>
              
              <div className="opacity-0 animate-slideUp animate-delay-200" style={{ animationFillMode: 'forwards' }}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1512621387945-efbf6f3d01d4?q=80&w=1200" 
                    alt="Luxury Chauffeur" 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-luxury-accent text-white p-4 rounded shadow-lg">
                    <p className="font-serif text-lg">Established</p>
                    <p className="text-2xl font-bold">2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission & Vision */}
        <section className="py-16 bg-luxury-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-6">
                Our Mission & Vision
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 opacity-0 animate-slideUp" style={{ animationFillMode: 'forwards' }}>
                <h3 className="text-2xl font-serif font-semibold text-luxury-800 mb-4">Our Mission</h3>
                <p className="text-luxury-600">
                  To provide premium transportation services that exceed client expectations through exceptional attention to detail, 
                  professional chauffeurs, and a fleet of luxury vehicles. We are committed to creating an experience of comfort, 
                  safety, and sophistication for every journey.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 opacity-0 animate-slideUp animate-delay-200" style={{ animationFillMode: 'forwards' }}>
                <h3 className="text-2xl font-serif font-semibold text-luxury-800 mb-4">Our Vision</h3>
                <p className="text-luxury-600">
                  To be the leading luxury transportation provider in South Africa, recognized for our unwavering commitment to excellence, 
                  innovative service offerings, and the creation of memorable journeys. We aim to set new standards in the industry while 
                  maintaining our core values and client-focused approach.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-luxury-600 max-w-3xl mx-auto">
                These principles guide every aspect of our business and define our commitment to our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border border-luxury-200 hover:border-luxury-accent luxury-transition opacity-0 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-serif font-semibold text-luxury-800 mb-2">{value.title}</h3>
                    <p className="text-luxury-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-luxury-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-luxury-600 max-w-3xl mx-auto">
                The experienced team behind Noluthando Transportation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Noluthando Nkosi",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/women/56.jpg",
                  bio: "With over 15 years of experience in the luxury transportation industry, Noluthando brings vision and leadership to our company."
                },
                {
                  name: "James Mokoena",
                  role: "Operations Director",
                  image: "https://randomuser.me/api/portraits/men/41.jpg",
                  bio: "James oversees our day-to-day operations, ensuring that our service delivery consistently meets our high standards."
                },
                {
                  name: "Thandi Zulu",
                  role: "Client Relations Manager",
                  image: "https://randomuser.me/api/portraits/women/22.jpg",
                  bio: "Thandi leads our client relations team, focusing on delivering personalized service to our diverse clientele."
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden opacity-0 animate-slideUp"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-luxury-800 mb-1">{member.name}</h3>
                    <p className="text-luxury-accent mb-3">{member.role}</p>
                    <p className="text-luxury-600">{member.bio}</p>
                  </div>
                </div>
              ))}
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

export default About;
