import '../styles/Gallery.scss';
import logements from '../datas/logements.json'
import { Link } from "react-router-dom";
import Banner from '../components/Banner';
import image from  '../assets/images/bg-ocean.png';

function Gallery() {
    return (
        <div className='kasa-gallery'>
      <Banner background={image} text="Chez vous, partout et ailleurs" />

            <div className='kasa-gallery-cards'>
                {logements.map(({id, title, cover}) =>(
                    
                    <div key={id} className='kasa-gallery-card'>
                        <Link to={`/show/${id}`}>
                        <img src={cover} alt={`${title} cover`} />
                        <div className='kasa-gallery-card-mask'></div>
                        <p>{title}</p>
                        </Link>
                    </div>
                    
                ))}
            </div>
        </div>
    );
        
}

export default Gallery;