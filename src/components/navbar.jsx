import yoga from "../assets/yoga.png";
import strength from "../assets/strength.png";
import pool from "../assets/pool.png";
import cycle from "../assets/cycle.png";
import "../style/navbar.css";

/**
 * @returns an vertical navbar with icons.
 * @component Navbar
 */

function Navbar() {
  return (
    <div className="navbar-vertical">
      <div className="icon-boxes">
        <div className="iconcontainer">
          <img src={yoga} alt="yoga" />
        </div>
        <div className="iconcontainer">
          <img src={pool} alt="swim" />
        </div>
        <div className="iconcontainer">
          <img src={cycle} alt="cycle" />
        </div>
        <div className="iconcontainer">
          <img src={strength} alt="strength" />
        </div>
      </div>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}
export default Navbar;
