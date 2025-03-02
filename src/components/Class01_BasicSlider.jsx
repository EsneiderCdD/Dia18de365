
import "../styles/Class01_BasicSlider.css";

export default function Class01_BasicSlider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide active">
          <img
            src="https://definicion.com/wp-content/uploads/2022/09/imagen.jpg"
            alt="Slide 1"
          />
          <p className="caption">Este es el Slide 1</p>
        </div>
        <div className="slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXwpO9tkNjwCiBDRDPs39968UEEqq3NSbHLwWDhegae_PVuAHMqbsMN_ly7ONgAUnGno&usqp=CAU"
            alt="Slide 2"
          />
          <p className="caption">Este es el Slide 2</p>
        </div>
        <div className="slide">
          <img
            src="https://todoesculturaudiovisual.wordpress.com/wp-content/uploads/2015/07/b.jpg?w=285&h=178"
            alt="Slide 3"
          />
          <p className="caption">Este es el Slide 3</p>
        </div>
      </div>
    </div>
  );
}
