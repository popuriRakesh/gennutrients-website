import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Mission from "../components/Mission";
import OurStory from "../components/OurStory";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Products from "../components/Products";
import Quality from "../components/Quality";
import Certifications from "../components/Certifications";
import TrustedBy from "../components/TrustedBy";
import InquiryProcess from "../components/InquiryProcess";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <OurStory />
      <WhyChooseUs />
      <Process />
      <Products />
      <Quality />
      <Certifications />
      <TrustedBy />
      <InquiryProcess />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
