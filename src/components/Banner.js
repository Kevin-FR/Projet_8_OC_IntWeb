import '../styles/Banner.scss'
import logo from '../assets/logo.svg';


function Banner() {
	return (
		<header className='kasa-banner'>
            <div className='kasa-banner-container'>
                <div className='kasa-banner-logo'><img src={logo} alt="logo" /></div>
                <div className='kasa-banner-btn'>
                    <button>Accueil</button>
                    <button>A propos</button>
                </div>
            </div>
		</header>
	)
}

export default Banner