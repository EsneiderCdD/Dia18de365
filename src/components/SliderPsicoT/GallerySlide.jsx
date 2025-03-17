export default function GallerySlide({ imagenes }) {
    return (
      <div className="seccion visible">
        <div className="contenedor-galeria">
          {imagenes.map((img, idx) => (
            <div key={idx} className="contenedor-imagen-galeria">
              <img src={img} alt={`Imagen ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  