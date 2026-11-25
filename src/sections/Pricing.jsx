
import { Check, Sparkles, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic Glow",
    price: "₹999",
    description: "Perfect for your regular beauty care.",
    features: [
      "Basic Facial",
      "Hair Wash & Styling",
      "Eyebrow Threading",
      "Basic Manicure"
    ]
  },
  {
    name: "Premium Beauty",
    price: "₹2,499",
    description: "Our most popular beauty experience.",
    popular: true,
    features: [
      "Premium Facial",
      "Hair Spa Treatment",
      "Luxury Manicure & Pedicure",
      "Skin Consultation",
      "Professional Hair Styling"
    ]
  },
  {
    name: "Royal Bridal",
    price: "₹6,999",
    description: "A special experience for your big day.",
    features: [
      "Professional Bridal Makeup",
      "Premium Hair Styling",
      "Pre-Bridal Facial",
      "Nail Art",
      "Personal Beauty Consultation"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">

      <div className="section-heading">
        <span><Sparkles size={16} /> OUR PRICING</span>
        <h2>Choose Your <em>Beauty Package</em></h2>
        <p>
          Luxury beauty experiences at prices you'll love.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.name}
          >
            {plan.popular && (
              <div className="popular-label">
                <Crown size={15} /> MOST POPULAR
              </div>
            )}

            <h3>{plan.name}</h3>
            <p>{plan.description}</p>

            <div className="price">
              {plan.price}
              <small> / package</small>
            </div>

            <div className="pricing-divider" />

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#booking" className="pricing-btn">
              Choose Package →
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
