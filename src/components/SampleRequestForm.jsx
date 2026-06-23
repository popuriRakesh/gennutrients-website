import { useState } from "react";
import "../styles/SampleRequestForm.css";

function SampleRequestForm({ onClose, productName }) {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "ee891363-58cc-48cc-8f93-1aa93843fa32"
    );

    formData.append("subject", `Sample Request - ${productName || ""}`);

    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Sample request submitted!");
        e.target.reset();
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setResult("Failed to send request.");
      }
    } catch (err) {
      console.error(err);
      setResult("Failed to send request.");
    }
  };

  return (
    <div className="sample-overlay" onClick={onClose}>
      <div className="sample-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <h2>Request Sample</h2>

        <form onSubmit={onSubmit}>
          <div className="row">
            <input name="fullName" placeholder="Full Name" required />
            <input name="company" placeholder="Company" />
          </div>

          <div className="row">
            <input type="email" name="email" placeholder="Email" required />
            <input name="phone" placeholder="Phone" />
          </div>

          <input name="productName" placeholder="Product Name" defaultValue={productName || ""} />

          <textarea name="message" placeholder="Additional message" />

          <button type="submit">Request Sample</button>
        </form>

        {result && <div className="result-message">{result}</div>}
      </div>
    </div>
  );
}

export default SampleRequestForm;
