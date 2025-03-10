import { useState } from "react";
import "../styles/PersonalizadoSlider.css";
import Img1 from "../images/Img1.jpeg";
import Img2 from "../images/Img2.jpeg";

const diapositivas = [
  {
    id: 1,
    imagen: Img1,
    titulo: "Primera Diapositiva",
    texto: "Este es un ejemplo con una imagen a la izquierda y texto a la derecha.",
    posicion: "izquierda",
  },
  {
    id: 2,
    imagen: Img2,
    titulo: "Segunda Diapositiva",
    texto: "Ahora tenemos la imagen a la derecha y el texto a la izquierda.",
    posicion: "derecha",
  },
];

export default function SliderPersonalizado() {
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? diapositivas.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === diapositivas.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="envoltura">
      <div className="contenedor-deslizable">
        {diapositivas.map((diapositiva, index) => (
          <div
            key={diapositiva.id}
            className={`seccion ${index === indice ? "visible" : "oculto"}`}
          >
            {diapositiva.posicion === "izquierda" ? (
              <>
                <div className="contenedor-imagen">
                  <img src={diapositiva.imagen} alt={`Imagen ${diapositiva.id}`} />
                </div>
                <div className="contenedor-texto">
                  <h2>{diapositiva.titulo}</h2>
                  <p>{diapositiva.texto}</p>
                </div>
              </>
            ) : (
              <>
                <div className="contenedor-texto">
                  <h2>{diapositiva.titulo}</h2>
                  <p>{diapositiva.texto}</p>
                </div>
                <div className="contenedor-imagen">
                  <img src={diapositiva.imagen} alt={`Imagen ${diapositiva.id}`} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button className="previo" onClick={anterior}>&#10094;</button>
      <button className="siguiente" onClick={siguiente}>&#10095;</button>
    </div>
  );
}
