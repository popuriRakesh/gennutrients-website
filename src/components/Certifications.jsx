import "../styles/Certifications.css";
import { FaCheckCircle, FaIndustry, FaShieldAlt, FaGlobe } from "react-icons/fa";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="cert-header">
        <h2>Compliance & Quality Standards</h2>
        <p>
          We are committed to sourcing ingredients that meet
          industry-recognized quality standards and documentation
          requirements for global markets.
        </p>
      </div>

      <div className="cert-logos" aria-hidden>
        <img src="/certs/FDA.png" alt="FDA" />
        <img src="/certs/FSSAI.png" alt="FSSAI" />
        <img src="/certs/GMP.png" alt="GMP" />
        <img src="/certs/ISO22000.png" alt="ISO 22000" />
      </div>

      <div className="cert-grid">
        <div className="cert-card">
          <FaCheckCircle />
          <h3>GMP Compliant</h3>
          <p>
            Ingredients sourced from facilities following
            Good Manufacturing Practices.
          </p>
        </div>

        <div className="cert-card">
          <FaIndustry />
          <h3>ISO Standards</h3>
          <p>
            Quality-focused sourcing aligned with internationally
            recognized standards.
          </p>
        </div>

        <div className="cert-card">
          <FaShieldAlt />
          <h3>Third-Party Tested</h3>
          <p>
            Documentation available to support product quality
            and consistency.
          </p>
        </div>

        <div className="cert-card">
          <FaGlobe />
          <h3>Global Sourcing</h3>
          <p>
            Reliable supplier network supporting customers
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
