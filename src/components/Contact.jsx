import "../styles/Contact.css";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResult("Sending...");

    const formData = new FormData();

    formData.append(
      "access_key",
      "ee891363-58cc-48cc-8f93-1aa93843fa32"
    );

    formData.append(
      "subject",
      "New Contact Form Inquiry"
    );

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("company", form.company);
    formData.append("message", form.message);

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
        setResult("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setResult("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <div className="contact-container">
        <h2 data-aos="fade-right">Partner With Gen Nutrients</h2>
        <p data-aos="fade-left">Premium Nutraceutical Ingredients &amp; Botanical Extracts</p>

        <div className="contact-grid">
          <div data-aos="fade-right">
            <h4>Email</h4>
            <p>sales@gennutrients.com</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="100">
            <h4>Phone</h4>
            <p>+1 603-234-2174</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="200">
            <h4>Location</h4>
            <p>New Jersey, USA</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
          <div className="row">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>

          <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />

          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={4} />

          <button type="submit" className="primary-btn">Send Message</button>
          {result && (
            <div className="result-message">{result}</div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
