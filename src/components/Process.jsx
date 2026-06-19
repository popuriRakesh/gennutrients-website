import "../styles/Process.css";
import ProcessGallery from "./ProcessGallery";

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
      <ProcessGallery steps={steps} />
    </section>
  );
}

export default Process;
