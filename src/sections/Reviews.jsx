
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    service: "Bridal Makeup",
    review: "Amazing experience! The makeup was absolutely beautiful. The team was very professional.",
    rating: 5,
    initial: "P"
  },
  {
    name: "Anjali Verma",
    service: "Hair Styling",
    review: "I loved my new hairstyle. The staff understood exactly what I wanted. Highly recommended!",
    rating: 5,
    initial: "A"
  },
  {
    name: "Neha Singh",
    service: "Facial Treatment",
    review: "Very relaxing experience. The salon is beautiful and the service quality is excellent.",
    rating: 5,
    initial: "N"
  }
];

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-heading">
        <span><Star size={16} /> CLIENT TESTIMONIALS</span>
        <h2>What Our Clients <em>Say</em></h2>
        <p>Real beauty experiences deserve beautiful words.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <Quote className="quote-icon" size={35} />

            <div className="review-stars">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={17} fill="currentColor" />
              ))}
            </div>

            <p>"{review.review}"</p>

            <div className="review-author">
              <div className="review-avatar">{review.initial}</div>
              <div>
                <h4>{review.name}</h4>
                <span>{review.service}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
