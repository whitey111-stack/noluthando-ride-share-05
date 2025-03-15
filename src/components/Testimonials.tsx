
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Malan",
    role: "Business Executive",
    quote: "The chauffeur service provided by Noluthando Transportation was exceptional. The driver was professional, punctual, and the vehicle was immaculate. I'll definitely be using their services again for my business travels.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Event Planner",
    quote: "I hired Noluthando for a high-profile corporate event, and they exceeded expectations. The fleet was impressive, drivers were courteous, and the service was flawless. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Wedding Client",
    quote: "Our wedding day transportation was perfect thanks to Noluthando. The luxury vehicles added elegance to our special day, and the chauffeurs were attentive and professional throughout.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-luxury-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-luxury-600 max-w-3xl mx-auto">
            We pride ourselves on delivering exceptional service. Here's what some of our satisfied clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-lg p-6 relative opacity-0 animate-slideUp"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <Quote className="absolute text-luxury-accent/10 h-16 w-16 -top-2 -left-2" />
              <div className="relative z-10">
                <p className="text-luxury-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serif font-medium text-luxury-800">{testimonial.name}</h4>
                    <p className="text-sm text-luxury-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
