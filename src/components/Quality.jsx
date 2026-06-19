import "../styles/Quality.css";
import "../styles/Quality.css";
import { useState } from "react";
import { FaCertificate, FaFileAlt, FaShieldAlt, FaFlask } from "react-icons/fa";
import DocumentationForm from "./DocumentationForm";

function Quality() {
  const [showDocForm, setShowDocForm] = useState(false);

  return (
    <>
      <section id="quality" className="quality" data-aos="fade-up">
        <div className="quality-header">
          <h2>Quality Assurance</h2>
          <p>
            Every ingredient supplied by Gen Nutrients undergoes strict quality checks and documentation to ensure consistency, safety, and regulatory compliance.
          </p>

          <div className="doc-available">
            <h4>Documentation Available:</h4>
            <ul>
              <li>Certificate of Analysis (COA)</li>
              <li>Technical Data Sheet (TDS)</li>
              <li>Material Safety Data Sheet (MSDS)</li>
              <li>Product Specifications Sheet</li>
            </ul>
          </div>
        </div>

        <div className="quality-grid">
          <div className="quality-card" data-aos="zoom-in">
            <FaCertificate />
            <h3>COA</h3>
            <p>Certificate of Analysis available for all products.</p>
          </div>

          <div className="quality-card" data-aos="zoom-in" data-aos-delay="100">
            <FaFileAlt />
            <h3>TDS</h3>
            <p>Technical Data Sheets with complete specifications.</p>
          </div>

          <div className="quality-card" data-aos="zoom-in" data-aos-delay="200">
            <FaShieldAlt />
            <h3>MSDS</h3>
            <p>Material Safety Data Sheets for regulatory compliance.</p>
          </div>

          <div className="quality-card" data-aos="zoom-in" data-aos-delay="300">
            <FaFlask />
            <h3>Product Specifications</h3>
            <p>Detailed testing and quality documentation available.</p>
          </div>
        </div>

        <div className="quality-btn">
          <button onClick={() => setShowDocForm(true)}>Request Documentation</button>
        </div>
      </section>

      {showDocForm && (
        <DocumentationForm onClose={() => setShowDocForm(false)} />
      )}
    </>
  );
}

export default Quality;

