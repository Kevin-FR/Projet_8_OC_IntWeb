import "../styles/ImagesSlider.scss";
import { useState } from "react";

export default function Carrousel(props) {
  const slides = props.logement.pictures;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="kasa-slider">
      {length > 1 && (
        <div className="kasa-slider-arrow kasa-slider-arrow-left" onClick={prevSlide}>
          <svg className="kasa-showitem-star-disable" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      
        </div>
      )}
      {length > 1 && (
        <div className="kasa-slider-arrow kasa-slider-arrow-right" onClick={nextSlide}>
          <svg className="kasa-showitem-star-disable" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
      )}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={
            current === index
              ? "kasa-slider-content kasa-slider-active"
              : "kasa-slider-content"
          }
        >
          {index === current && <img src={slide} alt="Logement slide" />}
          {index === current && (
            <span className={length > 1 ? "kasa-slider-number" : "kasa-hide"}>
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}
