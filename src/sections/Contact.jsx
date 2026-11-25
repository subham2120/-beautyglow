
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919000000000";

export default function Contact() {
  const message = encodeURIComponent(
    "Hello BeautyGlow! I want to know more about your beauty services."
  );

  return (
    <section className="contact-section" id="contact">

      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Let's Make You <em>Beautiful</em></h2>
        <p>We would love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="contact-grid">

        <div className="contact-card">
          <MapPin />
          <h3>Our Location</h3>
          <p>Your Salon Address, Kolkata, West Bengal</p>
        </div>

        <div className="contact-card">
          <Phone />
          <h3>Call Us</h3>
          <p>+91 90000 00000</p>
        </div>

        <div className="contact-card">
          <Mail />
          <h3>Email Us</h3>
          <p>hello@beautyglow.com</p>
        </div>

        <div className="contact-card">
          <Clock />
          <h3>Opening Hours</h3>
          <p>Monday – Sunday: 10 AM – 8 PM</p>
        </div>

      </div>

      <div className="contact-cta">
        <div>
          <h3>Ready for your beauty transformation?</h3>
          <p>Talk to our beauty experts today.</p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={19} />
          Chat on WhatsApp
        </a>
      </div>

    </section>
  );
}
