import React from "react";

const MobileCarousel = ({ images }) => {
  return (
    <div className="carousel">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {/* Render images */}
        {images.map((src, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <img
              src={src}
              alt={`Carousel Item ${index + 1}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileCarousel;
