import "../styles/TrustBar.css";
import {
  FaCheckCircle,
  FaGlobe,
  FaCertificate,
  FaFileAlt,
  FaIndustry,
} from "react-icons/fa";

function TrustBar() {
  const items = [
    {
      icon: <FaIndustry />,
      text: "GMP Compliant Manufacturing Partners",
    },
    {
      icon: <FaCertificate />,
      text: "COA Available",
    },
    {
      icon: <FaCheckCircle />,
      text: "Third-Party Testing Support",
    },
    {
      icon: <FaGlobe />,
      text: "Global Supply Network",
    },
    {
      icon: <FaFileAlt />,
      text: "Technical Documentation Provided",
    },
  ];

  return (
    <div className="trust-bar" data-aos="fade-up">
      {items.map((item, index) => (
        <div className="trust-item" key={index}>
          <span className="trust-icon">{item.icon}</span>
          <span className="trust-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TrustBar;
