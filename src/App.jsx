// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Services";
import Lessons from "./components/Lessons";
import Locations from "./components/Locations";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <About />
      <Service />
      <Lessons />
      <Locations />
      <Faq />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
