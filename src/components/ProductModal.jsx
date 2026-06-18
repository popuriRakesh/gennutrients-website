import "../styles/ProductModal.css";

function ProductModal({
  product,
  onClose,
  onQuote
}) {
  console.log("ProductModal product:", product);
  if (!product) return null;

  const handleRequestQuote = () => {
    onQuote && onQuote(product);
    onClose && onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <img src={product.img} alt={product.name} className="modal-image" />

        <h2>{product.name}</h2>
        <p className="modal-use">{product.use}</p>

        <div className="modal-section">
          <h3>Benefits</h3>
          <ul>
            <li>Premium quality ingredient</li>
            <li>Suitable for nutraceutical formulations</li>
            <li>Tested for consistency and purity</li>
          </ul>
        </div>

        <div className="modal-section">
          <h3>Applications</h3>
          <ul>
            <li>Capsules</li>
            <li>Tablets</li>
            <li>Powder Blends</li>
            <li>Functional Foods</li>
          </ul>
        </div>

        <button className="quote-modal-btn" onClick={handleRequestQuote}>
          Request Quote
        </button>
        <button
          className="download-brochure-btn"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/brochure/GenNutrients-Brochure.docx";
            link.download = "GenNutrients-Brochure.docx";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          📄 Download Brochure
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
