import "../styles/Quality.css";

function Quality() {
  return (
    <section id="quality" className="quality">
      <h2>Quality Assurance</h2>

      <div className="quality-grid">
        <div className="quality-card">
          <h3>COA</h3>
          <p>Certificate of Analysis</p>
        </div>

        <div className="quality-card">
          <h3>TDS</h3>
          <p>Technical Data Sheet</p>
        </div>

        <div className="quality-card">
          <h3>MSDS</h3>
          <p>Material Safety Data Sheet</p>
        </div>

        <div className="quality-card">
          <h3>Specifications</h3>
          <p>Quality Documentation</p>
        </div>
      </div>
    </section>
  );
}

export default Quality;
