// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Service />
      <Skills />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
    </div>
  );
};

export default App;
