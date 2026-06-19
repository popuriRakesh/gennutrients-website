import "../styles/InquiryProcess.css";
import {
  FaPaperPlane,
  FaFileAlt,
  FaComments,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaFlask,
  FaBoxOpen,
  FaShippingFast
} from "react-icons/fa";

function InquiryProcess() {
  const steps = [
    { icon: <FaPaperPlane />, title: "Submit Inquiry", text: "Submit your ingredient inquiry using our quote form." },
    { icon: <FaFileAlt />, title: "Receive Product Specifications", text: "Receive COA, TDS, MSDS and product specification sheets." },
    { icon: <FaComments />, title: "Discuss Requirements", text: "Discuss application, quantities and timelines with our team." },
    { icon: <FaFileInvoiceDollar />, title: "Receive Quotation", text: "Get a competitive quotation and supply options." },
    { icon: <FaClipboardCheck />, title: "Order Confirmation", text: "Confirm your order and finalize production details." },
    { icon: <FaFlask />, title: "Sourcing & Testing", text: "We source raw materials and perform required testing." },
    { icon: <FaBoxOpen />, title: "Packaging & Documentation", text: "Packaging is prepared and documentation is provided." },
    { icon: <FaShippingFast />, title: "Global Delivery", text: "We arrange shipping and global delivery logistics." }
  ];

  return (
    <section className="inquiry-process">
      <div className="process-header">
        <h2>How It Works</h2>
        <p className="process-subtitle">
          A simple process designed to help manufacturers source premium
          ingredients efficiently.
        </p>
      </div>

      <div className="process-timeline">
        {steps.map((step, index) => (
          <div className="process-card" key={index}>
            <div className="process-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InquiryProcess;
