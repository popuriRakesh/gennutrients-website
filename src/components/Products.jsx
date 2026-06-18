import "../styles/Products.css";
import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";
import QuoteForm from "./QuoteForm";
import p1000385849 from "../assets/products/1000385849.jpeg";
import p1000385851 from "../assets/products/1000385851.jpeg";
import p1000385855 from "../assets/products/1000385855.jpeg";
import p1000385857 from "../assets/products/1000385857.jpeg";
import p1000385859 from "../assets/products/1000385859.jpeg";
import p1000385861 from "../assets/products/1000385861.jpeg";
import p1000385865 from "../assets/products/1000385865.jpeg";

const products = [
  { name: "Boswellia Serrata Extract", use: "Mobility Support", category: "Botanical Extracts", img: p1000385849 },
  { name: "Ashwagandha Extract", use: "Stress Management", category: "Botanical Extracts", img: p1000385851 },
  { name: "Green Tea Extract", use: "Weight Management", category: "Weight Management", img: p1000385855 },
  { name: "Beetroot Extract", use: "Sports Performance", category: "Sports Nutrition", img: p1000385857 },
  { name: "Berberine HCL Extract", use: "Metabolic Wellness", category: "Weight Management", img: p1000385859 },
  { name: "Curcumin Extract", use: "Joint Health", category: "Botanical Extracts", img: p1000385861 },
  { name: "Lion's Mane Extract", use: "Cognitive Health", category: "Cognitive Health", img: p1000385865 },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteProductName, setQuoteProductName] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Botanical Extracts",
    "Sports Nutrition",
    "Weight Management",
    "Cognitive Health",
    "Beauty & Wellness",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  useEffect(() => {
    const handler = (e) => {
      const p = e.target.closest && e.target.closest('.product-card');
      if (p) {
        console.log('pointerdown inside .product-card — target:', e.target, 'card:', p);
      }
    };
    document.addEventListener('pointerdown', handler, { capture: true });
    return () => document.removeEventListener('pointerdown', handler, { capture: true });
  }, []);

  return (
    <>
      <section id="products" className="products" data-aos="fade-up">
      {console.log("Products component render — selectedProduct:", selectedProduct)}
      <h2 data-aos="fade-right">Featured Ingredients</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((item, index) => (
          <div className="product-card" key={index} data-aos="zoom-in" data-aos-delay={index * 80}>
            <img src={item.img} alt={item.name} className="product-image" />
            <h3>{item.name}</h3>
            <p>{item.use}</p>
            <button
              data-product-index={index}
              data-product-name={item.name}
              onClick={() => {
                console.log("button click handler — item:", item);
                setSelectedProduct(item);
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">No ingredients found.</div>
      )}
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuote={(product) => {
          setQuoteProductName(product?.name || selectedProduct?.name);
          setShowQuoteForm(true);
        }}
      />

      {showQuoteForm && (
        <QuoteForm
          productName={quoteProductName || selectedProduct?.name}
          onClose={() => {
            setShowQuoteForm(false);
            setQuoteProductName(null);
          }}
        />
      )}
    </>
  );
}

export default Products;
