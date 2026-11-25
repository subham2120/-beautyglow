
import { ArrowUpRight, Images } from "lucide-react";

const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
    title: "Bridal Makeup",
    category: "MAKEUP"
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    title: "Hair Styling",
    category: "HAIR CARE"
  },
  {
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
    title: "Nail Art",
    category: "NAIL CARE"
  },
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    title: "Skin Care",
    category: "SKIN CARE"
  },
  {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    title: "Luxury Spa",
    category: "WELLNESS"
  },
  {
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    title: "Salon Experience",
    category: "OUR SALON"
  }
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="section-heading">
        <span><Images size={17} /> OUR GALLERY</span>
        <h2>Beauty in Every <em>Detail</em></h2>
        <p>
          Explore our beauty transformations and discover
          the art of looking and feeling beautiful.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>

              <ArrowUpRight size={25} />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
