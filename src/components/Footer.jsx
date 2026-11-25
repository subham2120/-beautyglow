
import { Sparkles, ArrowUp } from "lucide-react";
import {
  SiInstagram,
  SiFacebook
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <a href="#home" className="logo">
            <Sparkles size={23} />
            BeautyGlow<span>.</span>
          </a>

          <p>
            Enhancing your natural beauty with premium
            beauty and wellness experiences.
          </p>

          <div className="social-links">
            <a href="https://instagram.com/"
               target="_blank" rel="noreferrer"
               aria-label="Instagram">
              <SiInstagram />
            </a>

            <a href="https://facebook.com/"
               target="_blank" rel="noreferrer"
               aria-label="Facebook">
              <SiFacebook />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer-links">
          <h3>Information</h3>
          <a href="#reviews">Reviews</a>
          <a href="#booking">Book Appointment</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-newsletter">
          <h3>Stay Beautiful</h3>
          <p>Follow us for beauty tips and special offers.</p>
          <a href="#contact">Get in Touch →</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BeautyGlow. All rights reserved.</p>
        <a href="#home" className="back-top">
          Back to Top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
