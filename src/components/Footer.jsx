import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>GEN NUTRIENTS</h3>
          <p>
            Premium Nutraceutical Ingredients &
            <br />
            Botanical Extracts
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>sales@gennutrients.com</p>
          <p>+1 603-234-2174</p>
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
