import { Link } from "react-router-dom";


function Nav(){
    return(
        <div className='kasa-banner-nav'>
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/apropos">A propos</Link>
                    </nav>
        </div>
    );
}

export default Nav;