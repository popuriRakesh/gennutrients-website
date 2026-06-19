import "../styles/WhyChooseUs.css";

const items = [
  {
    title: "Premium Quality Ingredients",
    desc: "Carefully sourced and tested to ensure consistent quality and performance."
  },
  {
    title: "Comprehensive Documentation",
    desc: "We provide COA, Specifications, MSDS, TDS, and regulatory documents to support compliance and manufacturing needs."
  },
  {
    title: "Flexible MOQ (Low Minimum Order Quantity)",
    desc: "We support startups, small businesses, and large manufacturers with flexible ordering options."
  },
  {
    title: "Reliable Supply Chain",
    desc: "Consistent sourcing and timely delivery to ensure uninterrupted production."
  },
  {
    title: "Customer-Focused Support",
    desc: "Dedicated support from inquiry to delivery for a smooth sourcing experience."
  },
  {
    title: "Competitive Pricing",
    desc: "High-quality ingredients offered at cost-effective and market-competitive pricing."
  },
  {
    title: "Trust & Transparency",
    desc: "Clear communication, honest sourcing practices, and reliable business relationships."
  },
  {
    title: "Global Sourcing Network",
    desc: "Access to a wide range of nutraceutical, botanical, and functional ingredients from trusted suppliers worldwide."
  }
];

function WhyChooseUs() {
  return (
    <section id="why" className="why" data-aos="fade-up">
      <h2 data-aos="fade-right">Why Choose Gen Nutrients</h2>

      <div className="why-grid">
        {items.map((item, index) => (
          <div className="why-card" key={index} data-aos="flip-left" data-aos-delay={index * 80}>
            <span>✓</span>
            <h3>{item.title}</h3>
            <p className="why-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="why-promise" data-aos="fade-up">
        <h3>Our Promise</h3>
        <p className="promise-tagline">Quality You Trust. Service You Deserve.</p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
