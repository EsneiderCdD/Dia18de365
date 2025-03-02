# 📖 Clases 1 y 2: Creando un Slider en React

## 📌 Clase 1: Estructura Base de un Slider
### **Conceptos Clave**
✅ Creación de un componente modular en React.  
✅ Uso de `useState` para manejar el slide actual.  
✅ Renderizado dinámico de imágenes desde un array.  
✅ Aplicación básica de estilos en CSS.  

---

## 📌 Clase 2: Agregando Botones de Navegación

### 📂 Estructura del Código
```
📁 src  
 ┣ 📂 components  
 ┃ ┣ 📜 Class02_NavSlider.jsx  
 ┣ 📂 styles  
 ┃ ┣ 📜 Class02_NavSlider.css  
```

---

## 🛠 Explicación del Código

### 1️⃣ ¿Cómo funcionan los botones de navegación?

#### 🔹 Función `prevSlide()`
```jsx
const prevSlide = () => {
  setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
};
```
📌 **Explicación**  
- Si estamos en la **primera imagen (`0`)**, volvemos al **último slide**.  
- Si **no estamos en la primera imagen**, restamos `1` al índice actual para movernos hacia atrás.  

#### 🔹 Función `nextSlide()`
```jsx
const nextSlide = () => {
  setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
};
```
📌 **Explicación**  
- Si estamos en la **última imagen**, volvemos al inicio (`0`).  
- Si **no estamos en la última imagen**, avanzamos `1` en el índice para cambiar al siguiente slide.  

| Índice antes | Acción   | Índice después |
|-------------|---------|---------------|
| 0           | Prev    | 2 (último)    |
| 1           | Prev    | 0             |
| 2           | Prev    | 1             |
| 2           | Next    | 0 (reinicio)  |
| 1           | Next    | 2             |
| 0           | Next    | 1             |

---

### 2️⃣ ¿Cómo se mueve el slider?

```jsx
<div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
```
📌 **Explicación**  
- Cada imagen ocupa **100% del ancho del contenedor**.  
- `translateX(-X%)` **mueve el slider horizontalmente** en base al índice `currentIndex`.  

| `currentIndex` | Transform |
|--------------|-------------|
| `0`          | `translateX(0%)` |
| `1`          | `translateX(-100%)` |
| `2`          | `translateX(-200%)` |

Esto da el **efecto de desplazamiento horizontal**.

---

### 3️⃣ Renderizado de las imágenes dinámicamente  
```jsx
{slides.map((slide, index) => (
  <div className="slide" key={index}>
    <img src={slide.url} alt={slide.alt} />
  </div>
))}
```
📌 **Explicación**  
- **Usamos `.map()`** para recorrer el array de imágenes.  
- Creamos un `div.slide` por cada imagen.  
- `key={index}` ayuda a React a optimizar los cambios de estado.  

---

## 📌 Código Completo

### 📜 `Class02_NavSlider.jsx`
```jsx
import { useState } from "react";
import "../styles/Class02_NavSlider.css";

const slides = [
  { url: "https://via.placeholder.com/800x400?text=1", alt: "Slide 1" },
  { url: "https://via.placeholder.com/800x400?text=2", alt: "Slide 2" },
  { url: "https://via.placeholder.com/800x400?text=3", alt: "Slide 3" },
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
```

### 🎨 **📜 `Class02_NavSlider.css`**
```css
.slider-container {
  width: 800px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 2px solid #ccc;
  margin: 20px auto;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
}

.slide img {
  width: 100%;
  border-radius: 10px;
}

/* Botones de navegación */
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
```

---

## ✅ **Resumen y Aprendizaje**
1️⃣ **Clase 1:** Construimos la estructura base del slider.  
2️⃣ **Clase 2:** Agregamos botones de navegación con `useState`.  
3️⃣ **Entendimos el desplazamiento con `translateX()` en CSS.**  
4️⃣ **Vimos cómo funciona `prevSlide()` y `nextSlide()`.**  

---

## 🔜 ¿Qué sigue?
🔹 **Podemos agregar paginación (puntos de navegación) en la siguiente clase.**  
🔹 **¿Quieres practicar algún cambio antes de seguir?**  
