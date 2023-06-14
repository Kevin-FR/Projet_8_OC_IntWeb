import { useParams } from "react-router-dom";
import logements from "../datas/logements.json";
import "../styles/ShowItem.scss";
import ImagesSlider from "../components/ImagesSlider";
import StarsRating from "../components/StarsRating";
import Collapse from "../components/Collapse";

function GetItem() {
  const params = useParams();
  for (const logement of logements) {
    if (logement.id === params.id) {
      return logement;
    }
  }
}

function ShowItem() {
  const logement = GetItem();
  
  if (!logement) {
    window.location.replace("/error404");
  }

  
  return (
    <div className="kasa-showitem">
      <ImagesSlider logement={logement} />

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
          <div className="kasa-showitem-rating">
            <StarsRating logement={logement} />
          </div>
        </div>
      </div>

      <div className="kasa-showitem-bottom">

                    <div key="collapse_description">
                      <Collapse id="collapse_description" title="Description" content={logement.description} />
                    </div>
                    <div key="collapse_equipement" className="kasa-showitem-collapse__mleft">
                      <Collapse id="collapse_equipement" title="Équipements" content={logement.equipments} />
                    </div>
      </div>
    </div>
  );
}

export default ShowItem;
