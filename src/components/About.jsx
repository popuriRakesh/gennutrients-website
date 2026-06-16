import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Gen Nutrients</h2>

        <p>
          At Gen Nutrients, we believe exceptional health products begin with
          exceptional ingredients.
        </p>

        <p>
          As a trusted ingredient partner, we supply premium nutraceutical
          ingredients, botanical extracts, and functional raw materials to
          customers across the global health and wellness industry.
        </p>

        <div className="features">
          <div className="card">
            <h3>Premium Quality</h3>
            <p>Carefully sourced and tested ingredients.</p>
          </div>

          <div className="card">
            <h3>Reliable Supply</h3>
            <p>Consistent sourcing and timely delivery.</p>
          </div>

          <div className="card">
            <h3>Global Network</h3>
            <p>Trusted suppliers worldwide.</p>
          </div>

          <div className="card">
            <h3>Documentation</h3>
            <p>COA, TDS, MSDS and specifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
