import "../styles/ProductModal.css";
import { useState } from "react";
import QuoteForm from "./QuoteForm";

function ProductModal({ product, onClose }) {
  const [showQuote, setShowQuote] = useState(false);

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-btn" onClick={onClose}>&times;</div>

        <img src={product.img} alt={product.name} />

        <h3>{product.name}</h3>
        <p>{product.use}</p>

        <button className="primary-btn" onClick={() => setShowQuote(true)}>
          Request Quote
        </button>
      </div>

      {showQuote && (
        <QuoteForm productName={product.name} onClose={() => setShowQuote(false)} />
      )}
    </div>
  );
}

export default ProductModal;
