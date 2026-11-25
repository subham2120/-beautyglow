
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Pricing from "./sections/Pricing";
import Reviews from "./sections/Reviews";
import Booking from "./sections/Booking";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Reviews />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
