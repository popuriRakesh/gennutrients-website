import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/16032342174?text=Hello%20Gen%20Nutrients"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
