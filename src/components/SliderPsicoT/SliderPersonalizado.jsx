import { useState } from "react";
import { diapositivas } from "./data";
import Slide from "./Slide";
import GallerySlide from "./GallerySlide";
import SliderControls from "./SliderControls";
import "./SliderPersonalizado.css";

export default function SliderPersonalizado() {
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? diapositivas.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === diapositivas.length - 1 ? 0 : prev + 1));
  };

  const diapositivaActual = diapositivas[indice];

  return (
    <div className="envoltura">
      <div className="contenedor-deslizable">
        {diapositivaActual.tipo === "galeria" ? (
          <GallerySlide imagenes={diapositivaActual.imagenes} />
        ) : (
          <Slide
            imagen={diapositivaActual.imagen}
            titulo={diapositivaActual.titulo}
            texto={diapositivaActual.texto}
            posicion={diapositivaActual.posicion}
          />
        )}
      </div>
      <SliderControls onPrev={anterior} onNext={siguiente} />
    </div>
  );
}
