import "../styles/Header.scss";
import logo from "../assets/logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="kasa-header">
      <header className="kasa-header-container">
        <div className="kasa-header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="kasa-header-nav">
          <Nav />
        </div>
      </header>
    </div>
  );
}

export default Header;
