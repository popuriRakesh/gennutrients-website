import "../styles/Hero.css";
import heroBanner from "../assets/hero.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={heroBanner} alt="Gen Nutrients banner" className="hero-banner" />
    </section>
  );
}

export default Hero;
