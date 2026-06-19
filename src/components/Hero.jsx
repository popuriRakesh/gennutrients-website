import "../styles/Hero.css";
import heroBanner from "../assets/hero.jpeg";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <img src={heroBanner} alt="Gen Nutrients banner" className="hero-banner" />
      </section>
      <section className="trust-bar" aria-label="Trust bar">
        <div className="container trust-items">
          <div className="trust-item">GMP Compliant Manufacturing Partners</div>
          <div className="trust-item">COA Available</div>
          <div className="trust-item">Third-Party Testing Support</div>
          <div className="trust-item">Global Supply Network</div>
          <div className="trust-item">Technical Documentation Provided</div>
        </div>
      </section>

      <section className="hero-copy" aria-labelledby="hero-heading">
        <div className="container">
          <h2 id="hero-heading">Premium Nutraceutical Ingredients &amp;<br/>Botanical Extracts</h2>
          <p className="hero-subheading">Trusted global sourcing partner for manufacturers, formulators, and wellness brands.</p>

          <p className="hero-description">High-quality ingredients are backed by documentation, consistency, and reliable supply.</p>

          <ul className="hero-keypoints" aria-label="Key points">
            <li>Premium Nutraceutical Ingredients</li>
            <li>Flexible MOQ for All Business Sizes</li>
            <li>Global Supply Capability</li>
            <li>Fast Quotation Support</li>
            <li>Consistent Quality Assurance</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;
