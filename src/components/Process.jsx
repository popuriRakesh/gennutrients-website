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
    <section id="process" className="process">
      <h2>Manufacturing Process</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
