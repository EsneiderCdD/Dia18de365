import Img1 from "../../images/Img1.jpeg";
import Img2 from "../../images/Img2.jpeg";
import Img3 from "../../images/Img3.jpeg";
import Img4 from "../../images/Img4.jpeg";
import Img5 from "../../images/Img5.jpeg";
import Img6 from "../../images/Img6.jpeg";

export const diapositivas = [
  {
    id: 1,
    imagen: Img1,
    titulo: "Primera Diapositiva",
    texto: "Este es un ejemplo con una imagen a la izquierda y texto a la derecha.",
    posicion: "izquierda",
  },
  {
    id: 3,
    imagenes: [Img1, Img2, Img3, Img4, Img5, Img6 ], // Tres imágenes juntas
    tipo: "galeria", // Identificador de galería
  },
  {
    id: 2,
    imagen: Img2,
    titulo: "Segunda Diapositiva",
    texto: "Ahora tenemos la imagen a la derecha y el texto a la izquierda.",
    posicion: "derecha",
  },

];
