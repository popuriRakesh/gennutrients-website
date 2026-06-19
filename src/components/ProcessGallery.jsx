import { useState, useEffect } from "react";
import "../styles/ProcessGallery.css";

function ProcessGallery({ steps = [] }) {
  const filenames = [
    "Raw Material Sourcing.png",
    "Pulverization.jpg",
    "Extraction.jpg",
    "Purification.jpg",
    "Testing.jpg",
    "Packaging.jpg",
    "Documentation.jpg",
    "Global Distribution.jpg",
  ];

  const images = filenames.map((f) => encodeURI(`/process/${f}`));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = (e) => {
    e && e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e && e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  return (
    <>
      <div className="process-gallery">
        {images.map((src, idx) => (
          <div className="process-thumb" key={idx} onClick={() => openLightbox(idx)}>
            <img src={src} alt={steps?.[idx] || `Process ${idx + 1}`} />
            {steps?.[idx] && <div className="thumb-caption">{steps[idx]}</div>}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex]} alt={steps?.[currentIndex] || ""} />
            {steps?.[currentIndex] && <div className="lightbox-caption">{steps[currentIndex]}</div>}
          </div>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </>
  );
}

export default ProcessGallery;
