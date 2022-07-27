import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../style/header.css";

/**
 * @return an horizontal navbar with links.
 * @component Header
 */

function Header() {
  return (
    <div className="header">
      <div className="navlink">
        <Link to="/">
          <img src={logo} alt="Logo Sport See" className="sport-see-logo"></img>
        </Link>
        <Link to="/" className="pad-right">
          Accueil
        </Link>
        <Link to="/*" className="pad-right">
          Profil
        </Link>
        <Link to="/*" className="pad-right">
          Réglage
        </Link>
        <Link to="/*" className="pad-right last">
          Communauté
        </Link>
      </div>
    </div>
  );
}

export default Header;
