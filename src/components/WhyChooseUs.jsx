import "../styles/WhyChooseUs.css";

const data = [
  "Premium Quality Ingredients",
  "Comprehensive Documentation",
  "Flexible MOQ",
  "Reliable Supply Chain",
  "Customer-Focused Support",
  "Competitive Pricing",
  "Trust & Transparency",
  "Global Sourcing Network"
];

function WhyChooseUs() {
  return (
    <section id="why" className="why" data-aos="fade-up">
      <h2 data-aos="fade-right">Why Choose Gen Nutrients</h2>

      <div className="why-grid">
        {data.map((item, index) => (
          <div className="why-card" key={index} data-aos="flip-left" data-aos-delay={index * 80}>
            <span>✓</span>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
