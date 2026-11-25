
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Hair Styling",
    category: "HAIR CARE",
    description: "Professional haircuts, styling, coloring and hair treatments.",
    price: "₹499",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=700"
  },
  {
    id: 2,
    name: "Bridal Makeup",
    category: "MAKEUP",
    description: "Get your dream bridal look with our expert makeup artists.",
    price: "₹4,999",
    duration: "120 min",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700"
  },
  {
    id: 3,
    name: "Facial Treatment",
    category: "SKIN CARE",
    description: "Refresh your skin with our premium facial treatments.",
    price: "₹999",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700"
  },
  {
    id: 4,
    name: "Manicure",
    category: "NAIL CARE",
    description: "Beautiful nails with professional manicure services.",
    price: "₹399",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700"
  },
  {
    id: 5,
    name: "Luxury Spa",
    category: "RELAXATION",
    description: "Relax your body and mind with our luxury spa experience.",
    price: "₹1,499",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700"
  },
  {
    id: 6,
    name: "Hair Spa",
    category: "HAIR CARE",
    description: "Nourish and repair your hair with premium spa therapy.",
    price: "₹899",
    duration: "50 min",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700"
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">

      <div className="section-heading">
        <span><Sparkles size={16} /> OUR SERVICES</span>
        <h2>Beauty Services Designed <em>For You</em></h2>
        <p>
          Discover our exclusive range of beauty and wellness
          treatments designed to make you feel special.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>

            <div className="service-image">
              <img src={service.image} alt={service.name} />
              <span className="service-category">
                {service.category}
              </span>
            </div>

            <div className="service-info">
              <h3>{service.name}</h3>

              <p>{service.description}</p>

              <div className="service-meta">
                <span><Clock size={15} /> {service.duration}</span>
                <strong>From {service.price}</strong>
              </div>

              <a
                href="#booking"
                className="service-link"
              >
                Book This Service <ArrowUpRight size={18} />
              </a>
            </div>

          </article>
        ))}
      </div>

      <div className="services-bottom">
        <p>Looking for something special?</p>
        <a href="#contact">Contact Our Beauty Experts →</a>
      </div>

    </section>
  );
}
