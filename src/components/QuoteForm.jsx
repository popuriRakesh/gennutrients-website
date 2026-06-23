import { useState } from "react";
import "../styles/QuoteForm.css";

function QuoteForm({ productName, onClose }) {
  const [result, setResult] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
        setResult(
          "Thank you! Your inquiry has been received. Our team will contact you shortly."
        );

        event.target.reset();
        setShowSuccessModal(true);

        setTimeout(() => {
          setShowSuccessModal(false);
          onClose();
        }, 3000);
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
        {showSuccessModal ? (
          <>
            <button
              className="close-btn"
              onClick={() => {
                setShowSuccessModal(false);
                onClose();
              }}
            >
              &times;
            </button>
            <h2>Inquiry Received</h2>
            <p className="success-text">
              Thank you for contacting Gen Nutrients.
              <br /> Our team will review your requirement and get back to you shortly.
            </p>
            <div style={{ textAlign: "center", marginTop: 18 }}>
              <button
                className="success-close"
                onClick={() => {
                  setShowSuccessModal(false);
                  onClose();
                }}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <>
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

          <input type="hidden" name="access_key" value="ee891363-58cc-48cc-8f93-1aa93843fa32" />
          <input type="hidden" name="subject" value={`New Quote Request - ${productName || ""}`} />
          <input type="hidden" name="product" value={productName || ""} />

          <button type="submit">Request Quotation</button>
            </form>

            {result && <div className="result-message">{result}</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default QuoteForm;
