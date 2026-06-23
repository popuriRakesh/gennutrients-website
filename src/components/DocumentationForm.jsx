import { useState } from "react";
import "../styles/DocumentationForm.css";

function DocumentationForm({ onClose, productName }) {
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
        setResult("Documentation request submitted successfully!");
        event.target.reset();

        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setResult("Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to submit request.");
    }
  };

  return (
    <div className="doc-overlay" onClick={onClose}>
      <div className="doc-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <h2>Request Documentation</h2>

        <form onSubmit={onSubmit}>
          <input name="fullName" placeholder="Full Name" required />

          <input name="company" placeholder="Company" />

          <input type="email" name="email" placeholder="Email" required />

          <input name="productName" placeholder="Product Name" defaultValue={productName || ""} />

          <div className="doc-checkboxes">
            <label>
              <input type="checkbox" name="documents[]" value="COA" /> COA
            </label>

            <label>
              <input type="checkbox" name="documents[]" value="TDS" /> TDS
            </label>

            <label>
              <input type="checkbox" name="documents[]" value="MSDS" /> MSDS
            </label>

            <label>
              <input type="checkbox" name="documents[]" value="Product Specifications" /> Product Specifications
            </label>
          </div>

          <input type="hidden" name="access_key" value="ee891363-58cc-48cc-8f93-1aa93843fa32" />
          <input type="hidden" name="subject" value={productName ? `Documentation Request - ${productName}` : "Documentation Request"} />

          <button type="submit">Submit Request</button>
        </form>

        {result && (
          <div className="result-message">{result}</div>
        )}
      </div>
    </div>
  );
}

export default DocumentationForm;
