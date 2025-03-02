// src/components/MultiItemSlider/MultiItemSlider.jsx
import { useState } from "react";
import { images } from "../../assets/images";
import "./MultiItemSlider.css";

const ITEMS_VISIBLE = 3; // Número de imágenes visibles al mismo tiempo

export default function MultiItemSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar el slider
  const nextSlide = () => {
    if (currentIndex < images.length - ITEMS_VISIBLE) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Función para retroceder el slider
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="multi-slider-container">
      <button onClick={prevSlide} className="slider-btn">◀</button>
      <div className="multi-slider">
        <div
          className="multi-slider-track"
          style={{ transform: `translateX(-${currentIndex * (100 / ITEMS_VISIBLE)}%)` }}
        >
          {images.map((image, index) => (
            <div className="multi-slide" key={index}>
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} className="slider-btn">▶</button>
    </div>
  );
}
