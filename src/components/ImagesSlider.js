import "../styles/ImagesSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "../styles/slick.scss";
import "../styles/slick-theme.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FontAwesomeIcon
        className="kasa-showitem-star-disable"
        icon={faChevronRight}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FontAwesomeIcon
        className="kasa-showitem-star-disable"
        icon={faChevronLeft}
      />
    </div>
  );
}

function ImagesSlider(props) {
  const logement = props.logement;
  let settings = {};
  if (logement.pictures.length === 1) {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: false,
      prevArrow: false,
    };
  } else {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "30px",
            color: "gray",
            border: "1px gray solid",
          }}
        >
          {i + 1}
        </div>
      ),
    };
  }

  function numberSlides(number, index) {
    if (number > 1) {
      return (
        <p>
          {index + 1}/{logement.pictures.length}
        </p>
      );
    }
  }

  return (
    <div className="kasa-slider">
      <Slider {...settings}>
        {logement.pictures.map((pict, index) => (
          <div key={`slide${index + 1}`} className="kasa-slider-content">
            <img src={pict} alt={`Présentation du bien - ${index + 1}`} />

            {numberSlides(logement.pictures.length, index)}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImagesSlider;
