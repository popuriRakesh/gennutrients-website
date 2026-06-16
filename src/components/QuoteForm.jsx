import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/QuoteForm.css";

function QuoteForm({ productName, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      product: productName,
      fullName: formData.fullName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      quantity: formData.quantity,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Inquiry sent successfully!");
        onClose();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send inquiry");
      });
  };

  return (
    <div className="quote-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Request Quote</h2>

        <form onSubmit={sendEmail}>
          <div className="row">
            <input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <input
              name="quantity"
              placeholder="Quantity (e.g., 25kg)"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Request Quotation</button>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
