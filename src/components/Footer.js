import '../styles/Footer.scss'
import logo from '../assets/logo_white.svg';

function Footer() {
	return (
		<footer className='kasa-footer'>
			<div className='kasa-footer-img'><img src={logo} className="kasa-footer-logo" alt="logo" /></div>
			<div className='kasa-footer-corporate'>© 2020 Kasa. All rights reserved</div>
		</footer>
	)
}

export default Footer
