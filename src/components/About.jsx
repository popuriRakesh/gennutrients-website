import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="container">
        <h2 data-aos="fade-right">About Gen Nutrients</h2>

        <p data-aos="fade-left">
          Gen Nutrients is a trusted supplier of premium nutraceutical
          ingredients and botanical extracts for manufacturers, formulators, and
          wellness brands worldwide. We focus on reliable sourcing, consistent
          quality, and comprehensive documentation to support the development
          of safe and effective products.
        </p>

        <div className="about-grid">
          <div className="about-card" data-aos="fade-up">
            <h3>Our Mission</h3>
            <p>
              To provide high-quality nutraceutical ingredients through dependable
              sourcing, transparent communication, and exceptional service,
              helping our partners achieve long-term success.
            </p>
          </div>

          <div className="about-card" data-aos="fade-up" data-aos-delay="80">
            <h3>Our Vision</h3>
            <p>
              To become a globally trusted ingredient partner known for quality,
              integrity, and reliable supply solutions that support innovation
              in the health and wellness industry.
            </p>
          </div>
        </div>

        <div className="about-story" data-aos="fade-up" data-aos-delay="160">
          <h3>Our Story</h3>
          <p>
            Gen Nutrients was founded to make nutraceutical ingredient sourcing
            simple, reliable, and transparent. We work with trusted
            manufacturing partners to provide high-quality ingredients backed by
            proper documentation and quality standards. Our focus is on
            consistency, dependable supply, and building long-term relationships
            with manufacturers, formulators, and wellness brands worldwide.
          </p>
        </div>

        <div className="features">
          <div className="card" data-aos="zoom-in">
            <h3>Premium Quality</h3>
            <p>Carefully sourced and tested ingredients.</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Reliable Supply</h3>
            <p>Consistent sourcing and timely delivery.</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Global Network</h3>
            <p>Trusted suppliers worldwide.</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Documentation</h3>
            <p>COA, TDS, MSDS and specifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
