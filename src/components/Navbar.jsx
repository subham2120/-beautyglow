
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Gallery", "Contact"];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <Sparkles size={23} />
        BeautyGlow<span>.</span>
      </a>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
             onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </div>

      <a href="#booking" className="nav-btn">Book Appointment</a>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
