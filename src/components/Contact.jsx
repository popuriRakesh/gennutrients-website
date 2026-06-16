import "../styles/Contact.css";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Website Contact Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`
    );
    window.location.href = `mailto:sales@gennutrients.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Partner With Gen Nutrients</h2>
        <p>Premium Nutraceutical Ingredients &amp; Botanical Extracts</p>

        <div className="contact-grid">
          <div>
            <h4>Email</h4>
            <p>sales@gennutrients.com</p>
          </div>

          <div>
            <h4>Phone</h4>
            <p>+1 603-234-2174</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>New Jersey, USA</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>

          <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />

          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={4} />

          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
