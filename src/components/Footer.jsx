import "../styles/Footer.css";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Gen Nutrients" className="footer-logo" />
          <p>
            Premium Nutraceutical Ingredients &
            <br />
            Botanical Extracts
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/brochure/GenNutrients-Brochure.docx" download>
                📄 Download Brochure
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <a href="mailto:sales@gennutrients.com">sales@gennutrients.com</a>
          </p>
          <p>
            <a href="tel:+16032342174">+1 603-234-2174</a>
          </p>
          <p>New Jersey, USA</p>
        </div>
      </div>

      <div className="copyright">
        © 2026 Gen Nutrients. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
