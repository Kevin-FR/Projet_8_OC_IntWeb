import '../styles/Header.scss';
import montain from "../assets/images/montain.png"
import ocean from "../assets/images/bg-ocean.png"



function Header(background) {
  let image = montain;
if(background.background === "ocean"){
  image = ocean;
}
  return (
    <div className="kasa-header">
      <header className="kasa-header-container">
        <div className="kasa-header-highlight">
          <img src={image}  alt={background.background} />
          <div className='kasa-header-highlight-dark'></div>
          </div>
        <div className='kasa-header-info'>
            <p>
            Chez vous, partout et ailleurs
            </p>
        </div>
       
      </header>
    </div>
  );
}

export default Header;
