import '../styles/Banner.scss'
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";


function Banner() {
	return (
		<header className='kasa-banner'>
            <div className='kasa-banner-container'>
                <div className='kasa-banner-logo'><Link to="/"><img src={logo} alt="logo" /></Link></div>
                <div className='kasa-banner-nav'>
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/apropos">A propos</Link>
                    </nav>
                </div>
            </div>
		</header>
	);
}

export default Banner