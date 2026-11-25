
import {
  ArrowRight,
  CalendarDays,
  Star,
  Sparkles,
  Flower2,
  Gem,
  Leaf,
  Award,
  Users,
  Scissors,
  ShieldCheck
} from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="hero-tag">
            <Sparkles size={18} />
            YOUR BEAUTY, OUR PASSION
          </div>

          <h1>
            Reveal Your
            <span>Natural Beauty</span>
          </h1>

          <p>
            Experience luxury beauty treatments with our expert
            stylists. Because you deserve to feel beautiful every day.
          </p>

          <div className="hero-actions">
            <a href="#booking" className="primary-btn">
              <CalendarDays size={19} />
              Book Appointment
              <ArrowRight size={18} />
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-features">
            <div>
              <Flower2 />
              <span>Expert Stylists</span>
            </div>
            <div>
              <Gem />
              <span>Premium Products</span>
            </div>
            <div>
              <Leaf />
              <span>Hygienic & Safe</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200"
            alt="Luxury beauty salon interior"
          />

          <div className="floating-card">
            <Award size={38} />
            <div>
              <strong>10+ Years</strong>
              <small>Of Beauty Excellence</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stat-item">
          <Users />
          <div><strong>5,000+</strong><span>Happy Clients</span></div>
        </div>

        <div className="stat-item">
          <Scissors />
          <div><strong>50+</strong><span>Beauty Services</span></div>
        </div>

        <div className="stat-item">
          <Star />
          <div><strong>4.9/5</strong><span>Customer Rating</span></div>
        </div>

        <div className="stat-item">
          <ShieldCheck />
          <div><strong>100%</strong><span>Hygiene Assured</span></div>
        </div>
      </section>
    </>
  );
}
