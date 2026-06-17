import { useState } from "react";
import "../styles/QuoteForm.css";

function QuoteForm({ productName, onClose }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Inquiry sent successfully!");

        event.target.reset();

        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setResult("Failed to send inquiry.");
      }
    } catch (err) {
      console.error(err);
      setResult("Failed to send inquiry.");
    }
  };

  return (
    <div className="quote-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Request Quote</h2>

        <form onSubmit={onSubmit}>
          <div className="row">
            <input name="fullName" placeholder="Full Name" required />

            <input name="company" placeholder="Company" />
          </div>

          <div className="row">
            <input type="email" name="email" placeholder="Email" required />

            <input name="phone" placeholder="Phone" />
          </div>

          <div className="row">
            <input name="country" placeholder="Country" />

            <input name="quantity" placeholder="Quantity (e.g., 25kg)" />
          </div>

          <textarea name="message" placeholder="Additional message" />

          <input type="hidden" name="access_key" value="55a96ea8-1523-48e5-9e08-780b0718f463" />
          <input type="hidden" name="subject" value={`New Quote Request - ${productName || ""}`} />
          <input type="hidden" name="product" value={productName || ""} />

          <button type="submit">Request Quotation</button>
        </form>

        {result && <div className="result-message">{result}</div>}
      </div>
    </div>
  );
}

export default QuoteForm;
