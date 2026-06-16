import "../styles/Hero.css";
import heroImage from "../assets/images/hero.svg";

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="overlay">
       {/* //<div className="hero-tagline">Laboratory • Botanicals • Capsules</div> */}

        <h1>
          Premium Nutraceutical Ingredients
          <br />
          &amp; Botanical Extracts
        </h1>

        <p className="hero-subtitle">Your Trusted Partner in Nutraceutical Innovation</p>

        <div className="hero-buttons">
          <a href="#products" className="primary-btn">Explore Products</a>
          <a href="#contact" className="secondary-btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
