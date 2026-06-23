/*
  Original ProcessGallery implementation (image based) commented out per request.
  Kept here for reference in case images/lightbox are needed later.

  import { useState, useEffect } from "react";
  import "../styles/ProcessGallery.css";

  function ProcessGallery({ steps = [] }) {
    ... (original code commented out)
  }

  export default ProcessGallery;
*/

import "../styles/ProcessGallery.css";

function ProcessGallery({ steps = [] }) {
  return (
    <div className="process-steps" data-aos="fade-up">
      {steps.map((label, idx) => (
        <div className="process-step" key={idx}>
          <div className={`step-circle ${idx === 0 ? "primary" : ""}`} aria-hidden>
            {idx + 1}
          </div>
          <div className="step-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default ProcessGallery;
