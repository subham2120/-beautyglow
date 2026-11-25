
import { useState } from "react";
import { CalendarDays, Clock, User, Phone, MessageCircle } from "lucide-react";

// Replace this demo number with the real parlour WhatsApp number.
// Country code + number, without + or spaces.
const WHATSAPP_NUMBER = "919000000000";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const message = `
Hello BeautyGlow! I want to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}

Please confirm my appointment.
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">

        <div className="booking-content">
          <span className="booking-tag">
            <CalendarDays size={17} /> BOOK YOUR VISIT
          </span>

          <h2>
            Your Beauty Journey
            <em> Starts Here.</em>
          </h2>

          <p>
            Take a moment for yourself. Book your favourite
            beauty treatment and let our experts take care of you.
          </p>

          <div className="booking-benefit">
            <CalendarDays />
            <div>
              <strong>Easy Appointment</strong>
              <span>Choose your preferred date and time.</span>
            </div>
          </div>

          <div className="booking-benefit">
            <MessageCircle />
            <div>
              <strong>WhatsApp Confirmation</strong>
              <span>Send your booking request directly to us.</span>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleBooking}>
          <h3>Book An Appointment</h3>
          <p>Fill in your details below.</p>

          <label>
            <span><User size={15} /> Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span><Phone size={15} /> Phone Number</span>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              required
            />
          </label>

          <label>
            <span>Choose Service</span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option>Hair Styling</option>
              <option>Bridal Makeup</option>
              <option>Facial Treatment</option>
              <option>Manicure</option>
              <option>Luxury Spa</option>
              <option>Hair Spa</option>
            </select>
          </label>

          <div className="booking-row">
            <label>
              <span><CalendarDays size={15} /> Date</span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toLocaleDateString("en-CA")}
                required
              />
            </label>

            <label>
              <span><Clock size={15} /> Time</span>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button type="submit" className="booking-submit">
            <MessageCircle size={19} />
            Send Booking on WhatsApp
          </button>

          <small className="booking-note">
            Your appointment will be confirmed by the salon.
          </small>
        </form>

      </div>
    </section>
  );
}
