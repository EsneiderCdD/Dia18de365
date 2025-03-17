export default function SliderControls({ onPrev, onNext }) {
    return (
      <>
        <button className="previo" onClick={onPrev}>&#10094;</button>
        <button className="siguiente" onClick={onNext}>&#10095;</button>
      </>
    );
  }
  