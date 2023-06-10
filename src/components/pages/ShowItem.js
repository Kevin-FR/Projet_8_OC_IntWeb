import { json, useParams } from "react-router-dom";
import logements from '../../datas/logements.json'
import '../../styles/ShowItem.scss';
import Slider from "react-slick";
import "../../styles/slick.scss";
import "../../styles/slick-theme.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"



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
            stars.push(<FontAwesomeIcon className="kasa-showitem-star-enable"icon={faStar} />);
            rating--;
        }else{
            stars.push(<FontAwesomeIcon className="kasa-showitem-star-disable"icon={faStar} />);
        }
    }
    return stars;
}

function ShowItem() {
    const logement = GetItem();
    const stars = StarsRating(logement.rating);
    console.log(stars);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    
    return (
        <div className='kasa-showitem'>

    <div className="kasa-showitem-slider">
        <Slider {...settings}>
            {logement.pictures.map((pict) => (
                <div>
                    <img src={pict} alt="Image de présentation du bien" />
                </div>
            ))}
        </Slider>
      </div>
      <div className="kasa-showitem-header">
        <div className="kasa-showitem-header-left">
        <div className="kasa-showitem-title"><h1>{logement.title}</h1></div>
        <div className="kasa-showitem-location">{logement.location}</div>
        </div>
        <div className="kasa-showitem-profil">
            <div className="kasa-showitem-profil-name">{logement.host.name}</div>
            <div className="kasa-showitem-profil-picture">
                <img src={logement.host.picture} />
            </div>
        </div>
      </div>
      <div className="kasa-showitem-header-bottom">
      <div className="kasa-showitem-tags">
            {logement.tags.map((tag) => (
                <div className="kasa-showitem-tag">{tag}</div>
            ))}
        </div>
        <div className="kasa-showitem-rating">
                {stars}
        </div>
      </div>    
        <div className="kasa-showitem-bottom">
            <div className="kasa-showitem-desciption">
                <p>{logement.description}</p>
            </div>
            <div className="kasa-showitem-equipments">
                {logement.equipments}
            </div>
        </div>
        
    
        






           
            
        </div>
    );
        
}

export default ShowItem;