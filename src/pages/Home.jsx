import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Products from "../components/Products";
import Quality from "../components/Quality";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <Process />
      <Products />
      <Quality />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
