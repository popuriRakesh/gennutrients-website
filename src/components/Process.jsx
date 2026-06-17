import "../styles/Process.css";

const steps = [
  "Raw Material",
  "Pulverization",
  "Extraction",
  "Purification",
  "Testing",
  "Packaging",
  "Documentation",
  "Global Distribution"
];

function Process() {
  return (
    <section id="process" className="process" data-aos="fade-up">
      <h2 data-aos="fade-right">Manufacturing Process</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div className="step" key={index} data-aos="fade-up" data-aos-delay={index * 80}>
            <div className="circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
