import "../styles/InquiryProcess.css";
import {
  FaPaperPlane,
  FaFileAlt,
  FaComments,
  FaFileInvoiceDollar,
  FaTruck
} from "react-icons/fa";

function InquiryProcess() {
  const steps = [
    {
      icon: <FaPaperPlane />,
      title: "Submit Inquiry",
      text: "Send your ingredient requirements through our quote form."
    },
    {
      icon: <FaFileAlt />,
      title: "Receive Documentation",
      text: "COA, TDS, MSDS and specifications shared upon request."
    },
    {
      icon: <FaComments />,
      title: "Discuss Requirements",
      text: "Our team reviews your application and sourcing needs."
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Receive Quotation",
      text: "Competitive pricing and supply options are provided."
    },
    {
      icon: <FaTruck />,
      title: "Order Fulfillment",
      text: "Reliable sourcing and delivery support for your business."
    }
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
