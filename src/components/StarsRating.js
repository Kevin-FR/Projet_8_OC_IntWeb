import "../styles/StarsRating.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StarsRating(props) {
  let rating = props.logement.rating;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating) {
      stars.push(
        <FontAwesomeIcon className="kasa-star kasa-star-enable" icon={faStar} />
      );
      rating--;
    } else {
      stars.push(
        <FontAwesomeIcon
          className="kasa-star kasa-star-disable"
          icon={faStar}
        />
      );
    }
  }
  return stars;
}

export default StarsRating;
