export default function Slide({ imagen, titulo, texto, posicion }) {
    return (
      <div className="seccion visible">
        {posicion === "izquierda" ? (
          <>
            <div className="contenedor-imagen">
              <img src={imagen} alt="Imagen" />
            </div>
            <div className="contenedor-texto">
              <h2>{titulo}</h2>
              <p>{texto}</p>
            </div>
          </>
        ) : (
          <>
            <div className="contenedor-texto">
              <h2>{titulo}</h2>
              <p>{texto}</p>
            </div>
            <div className="contenedor-imagen">
              <img src={imagen} alt="Imagen" />
            </div>
          </>
        )}
      </div>
    );
  }
  