import { useState } from "react";
import "../styles/Class02_NavSlider.css";

const slides = [
  { url: "https://definicion.com/wp-content/uploads/2022/09/imagen.jpg", alt: "Slide 1" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXwpO9tkNjwCiBDRDPs39968UEEqq3NSbHLwWDhegae_PVuAHMqbsMN_ly7ONgAUnGno&usqp=CAU", alt: "Slide 2" },
  { url: "https://todoesculturaudiovisual.wordpress.com/wp-content/uploads/2015/07/b.jpg?w=285&h=178", alt: "Slide 3" },
];

export default function Class02_NavSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.url} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}
