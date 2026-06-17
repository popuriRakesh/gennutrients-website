import "../styles/Quality.css";

function Quality() {
  return (
    <section id="quality" className="quality" data-aos="fade-up">
      <h2 data-aos="fade-right">Quality Assurance</h2>

      <div className="quality-grid">
        <div className="quality-card" data-aos="flip-left">
          <h3>COA</h3>
          <p>Certificate of Analysis</p>
        </div>

        <div className="quality-card" data-aos="flip-left" data-aos-delay="100">
          <h3>TDS</h3>
          <p>Technical Data Sheet</p>
        </div>

        <div className="quality-card" data-aos="flip-left" data-aos-delay="200">
          <h3>MSDS</h3>
          <p>Material Safety Data Sheet</p>
        </div>

        <div className="quality-card" data-aos="flip-left" data-aos-delay="300">
          <h3>Specifications</h3>
          <p>Quality Documentation</p>
        </div>
      </div>
    </section>
  );
}

export default Quality;
