import { useState } from "react";
import "../styles/Personalizado.css";
import Img1 from "../images/Img1.jpeg";
import Img2 from "../images/Img2.jpeg";
import Img3 from "../images/Img3.jpeg";
import Img4 from "../images/Img4.jpeg";
import Img5 from "../images/Img5.jpeg";
import Img6 from "../images/Img6.jpeg";

const diapositivas = [
  { url: Img1, alt: "Diapositiva 1" },
  { url: Img2, alt: "Diapositiva 2" },
  { url: Img3, alt: "Diapositiva 3" },
  { url: Img4, alt: "Diapositiva 4" },
  { url: Img5, alt: "Diapositiva 5" },
  { url: Img6, alt: "Diapositiva 6" },  
];

export default function Deslizador() {
  const [indiceActual, setIndiceActual] = useState(0);

  const anteriorDiapositiva = () => {
    setIndiceActual((prev) => (prev === 0 ? diapositivas.length - 1 : prev - 1));
  };

  const siguienteDiapositiva = () => {
    setIndiceActual((prev) => (prev === diapositivas.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="contenedor">
      <div className="deslizador" style={{ transform: `translateX(-${indiceActual * 100}%)` }}>
        {diapositivas.map((diapositiva, index) => (
          <div className="diapositiva" key={index}>
            <img src={diapositiva.url} alt={diapositiva.alt} />
          </div>
        ))}
      </div>
      <button className="anterior" onClick={anteriorDiapositiva}>&#10094;</button>
      <button className="siguiente" onClick={siguienteDiapositiva}>&#10095;</button>
    </div>
  );
}
