import { useState, useEffect } from "react";
import "../styles/Class03_AutoPlaySlider.css";

const slides = [
  { url: "https://picsum.photos/id/1011/800/400", alt: "Imagen 1" },
  { url: "https://picsum.photos/id/1025/800/400", alt: "Imagen 2" },
  { url: "https://picsum.photos/id/1033/800/400", alt: "Imagen 3" },
];

export default function AutoPlaySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); // Cambia de imagen cada 3 segundos

      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta o isPaused cambia
    }
  }, [isPaused]);

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.url} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
