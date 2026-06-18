import "../styles/TrustedBy.css";
import {
  FaLeaf,
  FaFileAlt,
  FaGlobe,
  FaTruck
} from "react-icons/fa";

function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="trusted-header">
        <h2>Why Leading Brands Choose Us</h2>
        <p>
          We help manufacturers, formulators, and wellness brands source
          premium nutraceutical ingredients with confidence.
        </p>
      </div>

      <div className="trusted-grid">
        <div className="trusted-card">
          <FaLeaf />
          <h3>Premium Sourcing</h3>
          <p>
            Carefully selected botanical extracts and nutraceutical
            ingredients from trusted suppliers.
          </p>
        </div>

        <div className="trusted-card">
          <FaFileAlt />
          <h3>Complete Documentation</h3>
          <p>
            COA, TDS, MSDS and quality documentation available upon request.
          </p>
        </div>

        <div className="trusted-card">
          <FaGlobe />
          <h3>Global Reach</h3>
          <p>Supporting manufacturers and brands across international markets.</p>
        </div>

        <div className="trusted-card">
          <FaTruck />
          <h3>Reliable Supply Chain</h3>
          <p>Consistent sourcing and dependable delivery support.</p>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
