import "../styles/Navbar.css";
import { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Gen Nutrients" className="logo-image" />
      </div>

      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={close}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={close}>
            About
          </a>
        </li>
        <li>
          <a href="#products" onClick={close}>
            Products
          </a>
        </li>
        <li>
          <a href="#contact" onClick={close}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
