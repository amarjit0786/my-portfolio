import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
     <section id="hero" className="scroll-mt-20"> {/* Adjust for navbar height */}
  <Hero />
</section>

<section id="about" className="scroll-mt-20">
  <About />
</section>

<section id="projects" className="scroll-mt-20">
  <Projects />
</section>

<section id="contact" className="scroll-mt-20">
  <Contact />
</section>
<Footer />

      {/* Toast container should be here at the root level */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
