import "../styles/Products.css";
import { useState } from "react";
import ProductModal from "./ProductModal";
import ashwagandha from "../assets/products/ashwagandha.jpg";
import curcumin from "../assets/products/curcumin.jpg";
import berberine from "../assets/products/berberine.jpg";
import beetroot from "../assets/products/beetroot.jpg";
import collagen from "../assets/products/collagen.jpg";
import greentea from "../assets/products/greentea.jpg";
import lionsmane from "../assets/products/lionsmane.jpg";
import boswellia from "../assets/products/boswellia.jpg";

const products = [
  { name: "Ashwagandha Extract", use: "Stress Management", img: ashwagandha },
  { name: "Curcumin Extract", use: "Joint Health", img: curcumin },
  { name: "Berberine HCL", use: "Metabolic Wellness", img: berberine },
  { name: "Beetroot Extract", use: "Sports Performance", img: beetroot },
  { name: "Collagen Peptides", use: "Skin & Joint Health", img: collagen },
  { name: "Green Tea Extract", use: "Weight Management", img: greentea },
  { name: "Lion's Mane Extract", use: "Cognitive Health", img: lionsmane },
  { name: "Boswellia Extract", use: "Mobility Support", img: boswellia },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <section id="products" className="products" data-aos="fade-up">
      <h2 data-aos="fade-right">Featured Ingredients</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index} data-aos="zoom-in" data-aos-delay={index * 80}>
            <img src={item.img} alt={item.name} className="product-image" />
            <h3>{item.name}</h3>
            <p>{item.use}</p>
            <button onClick={() => setSelectedProduct(item)}>View Details</button>
          </div>
        ))}
      </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}

export default Products;
