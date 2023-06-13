import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import "../../styles/ShowItem.scss";
import Slider from "react-slick";
import "../../styles/slick.scss";
import "../../styles/slick-theme.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const ToggleButtonWrapper = styled.div`
  transform: ${(props) =>
    props.collapsed ? "rotate(0deg)" : "rotate(180deg)"};
`;

const PanelContent = styled.div`
  overflow: hidden;
  transition: height 500ms;
  height: ${(props) => (props.collapsed ? 0 : "100%")};
`;

const PanelContentInner = styled.div`
  padding: 20px;
`;

function GetItem() {
  const params = useParams();
  for (const logement of logements) {
    if (logement.id === params.id) {
      return logement;
    }
  }
}

function StarsRating(rating, logement) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating) {
      stars.push(
        <FontAwesomeIcon
          key={`${logement}-star-${rating}`}
          className="kasa-showitem-star kasa-showitem-star-enable"
          icon={faStar}
        />
      );
      rating--;
    } else {
      stars.push(
        <FontAwesomeIcon
          key={`${logement}-star-${rating}`}
          className="kasa-showitem-star kasa-showitem-star-disable"
          icon={faStar}
        />
      );
    }
  }
  return stars;
}

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



function ShowItem() {
  const logement = GetItem();
  if (!logement) {
    window.location.replace("/error404");
  }
  const [allPanels, setAllPanels] = useState({
    panelDescription: true,
    panelEquipements: true,
  });

  const changeHandler = (selectPanel) => {
    setAllPanels({ ...allPanels, [selectPanel]: !allPanels[selectPanel] });
  };

  const stars = StarsRating(logement.rating, logement.id);
  let settings = {};
  if(logement.pictures.length === 1){
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
  }else{
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
  
  function numerSlides(number, index){
    if(number > 1){
      return <p>{index + 1}/{logement.pictures.length}</p>
    }
  }
  return (
    <div className="kasa-showitem">
      <div className="kasa-showitem-slider">
        <Slider {...settings}>
          {logement.pictures.map((pict, index) => (
            <div
              key={`slide${index + 1}`}
              className="kasa-showitem-slider-content"
            >
              <img src={pict} alt={`Présentation du bien - ${index + 1}`} />
              
                {numerSlides(logement.pictures.length, index)}
              
            </div>
          ))}
        </Slider>
      </div>
      <div className="kasa-showitem-header">
        <div className="kasa-showitem-header-left">
          <div className="kasa-showitem-title">
            <h1>{logement.title}</h1>
          </div>
          <div className="kasa-showitem-location">{logement.location}</div>
          <div className="kasa-showitem-tags">
            {logement.tags.map((tag, index) => (
              <div key={tag + index} className="kasa-showitem-tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="kasa-showitem-header-right">
          <div className="kasa-showitem-profil">
            <div className="kasa-showitem-profil-name">
              {logement.host.name}
            </div>
            <div key="profilPicture" className="kasa-showitem-profil-picture">
              <img
                src={logement.host.picture}
                alt={`Profil de ${logement.host.name}`}
              />
            </div>
          </div>
          <div className="kasa-showitem-rating">{stars}</div>
        </div>
      </div>

      <div className="kasa-showitem-bottom">
        <div className="kasa-showitem-panel">
          <div
            key="panelDescription"
            className="kasa-showitem-panel-header"
            onClick={() => changeHandler("panelDescription")}
          >
            <span>Description</span>
            <ToggleButtonWrapper collapsed={+allPanels.panelDescription}>
              <FontAwesomeIcon
                key="chevronDescription"
                className="kasa-showitem-star-disable"
                icon={faChevronDown}
              />
            </ToggleButtonWrapper>
          </div>
          <PanelContent
            className="kasa-showitem-panel-content"
            collapsed={+allPanels.panelDescription}
          >
            <PanelContentInner>{logement.description}</PanelContentInner>
          </PanelContent>
        </div>

        <div className="kasa-showitem-panel kasa-showitem-panel__mleft">
          <div
            key="panelEquipements"
            className="kasa-showitem-panel-header"
            onClick={() => changeHandler("panelEquipements")}
          >
            <span>Équipements</span>
            <ToggleButtonWrapper collapsed={+allPanels.panelEquipements}>
              <FontAwesomeIcon
                key="chevronEquimenents"
                className="kasa-showitem-star-disable"
                icon={faChevronDown}
              />
            </ToggleButtonWrapper>
          </div>
          <PanelContent
            className="kasa-showitem-panel-content"
            collapsed={+allPanels.panelEquipements}
          >
            <PanelContentInner>
              <ul>
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </PanelContentInner>
          </PanelContent>
        </div>
      </div>
    </div>
  );
}

export default ShowItem;
