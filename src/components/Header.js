import { Link } from 'react-router-dom';
import background from '../assets/images/bg-ocean.png';
import '../styles/Header.scss';

function Header() {
  return (
    <div className="kasa-header">
      <header className="kasa-header-container">
        <div className="kasa-header-highlight">
          <img src={background}  alt="logo" />
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
