import "../styles/WhyChooseUs.css";

// NOTE: Place your images in `src/assets/why/` named why-1.png .. why-8.png
import why1 from "../assets/why/Premium Quality Ingredients.png";
import why2 from "../assets/why/Comprehensive Documentation.png";
import why3 from "../assets/why/Flexible MOQ.png";
import why4 from "../assets/why/Reliable Supply Chain.png";
import why5 from "../assets/why/Customer-Focused Support.png";
import why6 from "../assets/why/Competitive Pricing.png";
import why7 from "../assets/why/Trust & Transparency.png";
import why8 from "../assets/why/Global Sourcing Network.png";

const icons = [why1, why2, why3, why4, why5, why6, why7, why8];

// Items mapped to the provided images (why-1 .. why-8)
const items = [
  { title: "Premium Quality Ingredients", subtitle: "Laboratory & Testing" },
  { title: "Comprehensive Documentation", subtitle: "Documents & Certificate" },
  { title: "Flexible MOQ", subtitle: "Product Packaging" },
  { title: "Reliable Supply Chain", subtitle: "Warehouse & Truck" },
  { title: "Customer-Focused Support", subtitle: "Customer Support Agent" },
  { title: "Competitive Pricing", subtitle: "Calculator & Growth Chart" },
  { title: "Trust & Transparency", subtitle: "Handshake Shield" },
  { title: "Global Sourcing Network", subtitle: "World Map" },
];

function WhyChooseUs() {
  return (
    <section id="why" className="why" data-aos="fade-up">
      <h2 data-aos="fade-right">Why Leading Brands Choose Gen Nutrients</h2>

      <div className="why-grid">
        {items.map((item, index) => (
          <div className="why-card" key={index} data-aos="flip-left" data-aos-delay={index * 80}>
            <img src={icons[index]} alt={item.title} className="why-icon" />
            <h3 className="why-title">{item.title}</h3>
            <p className="why-subtitle">{item.subtitle}</p>
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
