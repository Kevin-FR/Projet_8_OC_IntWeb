import { useNavigate, useParams } from "react-router-dom";
import logements from '../../datas/logements.json'
import '../../styles/ShowItem.scss';
import Slider from "react-slick";
import "../../styles/slick.scss";
import "../../styles/slick-theme.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import styled from 'styled-components'




const ToggleButtonWrapper = styled.div`
  transform: ${props => props.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'}
`

const PanelContent = styled.div`
  overflow: hidden;
  transition: height 500ms;
  height: ${props => props.isCollapsed ? 0 : '100%'};
  `

  const PanelContentInner = styled.div`
  padding: 20px;
`

function GetItem(){
    const params = useParams();
    for(const logement of logements){
        if(logement.id == params.id){
            return logement;
        }
    }
}

const rating = 0;
function StarsRating(rating){
    const stars = []; 
    for(let i = 0; i <5 ; i++){
        if(rating){
            stars.push(<FontAwesomeIcon className="kasa-showitem-star kasa-showitem-star-enable"icon={faStar} />);
            rating--;
        }else{
            stars.push(<FontAwesomeIcon className="kasa-showitem-star kasa-showitem-star-disable"icon={faStar} />);
        }
    }
    return stars;
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      >
        <FontAwesomeIcon className="kasa-showitem-star-disable"icon={faChevronRight} />
        </div>
    );
  }

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      >
        <FontAwesomeIcon className="kasa-showitem-star-disable"icon={faChevronLeft} />
      </div>
    );
  }


function ShowItem() {
    const logement = GetItem();
    if(!logement){
        window.location.replace('/error404');
    }
    const [isCollapsed, setIsCollapsed] = useState(true);

    const togglePanel = () => {
        setIsCollapsed(prevState => !prevState)
    }
    const stars = StarsRating(logement.rating);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "gray",
                border: "1px gray solid"
              }}
            >
              {i + 1}
            </div>
          )
        };
      
    
    return (
        <div className='kasa-showitem'>

    <div className="kasa-showitem-slider">
        <Slider {...settings}>
            {logement.pictures.map((pict, index) => (
                <div className="kasa-showitem-slider-content">
                    <img src={pict} alt="Image de présentation du bien" />
                    <p>{index+1}/{logement.pictures.length}</p>
                </div>
            ))}
            
        </Slider>
       
      </div>
      <div className="kasa-showitem-header">
        <div className="kasa-showitem-header-left">
        <div className="kasa-showitem-title"><h1>{logement.title}</h1></div>
        <div className="kasa-showitem-location">{logement.location}</div>
        <div className="kasa-showitem-tags">
            {logement.tags.map((tag) => (
                <div className="kasa-showitem-tag">{tag}</div>
            ))}
        </div>
        </div>
        <div className="kasa-showitem-header-right">
      <div className="kasa-showitem-profil">
            <div className="kasa-showitem-profil-name">{logement.host.name}</div>
            <div className="kasa-showitem-profil-picture">
                <img src={logement.host.picture} />
            </div>
        </div>
        <div className="kasa-showitem-rating">
                {stars}
        </div>
      </div> 
      </div>
         
        <div className="kasa-showitem-bottom">
            
            <div className="kasa-showitem-panel">
            <div className="kasa-showitem-panel-header" onClick={togglePanel}>
                <span>Description</span>
                <ToggleButtonWrapper isCollapsed={isCollapsed}>
                <FontAwesomeIcon className="kasa-showitem-star-disable"icon={faChevronDown} />
                </ToggleButtonWrapper>
            </div>
            <PanelContent className="kasa-showitem-panel-content" isCollapsed={isCollapsed}>
                <PanelContentInner>
                {logement.description}
                </PanelContentInner>
            </PanelContent>
            </div>

            <div className="kasa-showitem-panel kasa-showitem-panel__mleft">
            <div className="kasa-showitem-panel-header"  onClick={togglePanel}>
                <span>Équipements</span>
                <ToggleButtonWrapper isCollapsed={isCollapsed}>
                <FontAwesomeIcon className="kasa-showitem-star-disable"icon={faChevronDown} />
                </ToggleButtonWrapper>
            </div>
            <PanelContent className="kasa-showitem-panel-content" isCollapsed={isCollapsed}>
                <PanelContentInner>
                    <ul>
                    {logement.equipments.map((equipment) => (<li>{equipment}</li>))}
                    </ul>
                </PanelContentInner>
            </PanelContent>
            </div>

        </div>
        
    
        






           
            
        </div>
    );
        
}

export default ShowItem;