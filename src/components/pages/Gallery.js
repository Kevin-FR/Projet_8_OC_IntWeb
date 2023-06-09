import '../../styles/Gallery.scss';
import logements from '../../datas/logements.json'


function Gallery() {

    return (
        <div className='kasa-gallery-container'>
            <div className='kasa-gallery-cards'>
                {logements.map(({id, title, cover}) =>(
                    <div key={id} className='kasa-gallery-card'>
                        <img src={cover} alt={`${title} cover`} />
                        <p>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
        
}

export default Gallery;