import { Link } from "react-router-dom";
import "../style/home.css";

/**
 * Home is a functionnal component that returns 2 buttons for choose a profile user
 * @return a welcome user page to connect an account.
 * @component Home
 */

function Home() {
  return (
    <div className="profile-page">
      <p className="home-user">Pour continuer, connectez-vous à un profil</p>
      <div className="box-user">
        <Link key={12} to={`user/12`}>
          <button className="button-27"> Karl &#9917;</button>
        </Link>

        <Link key={18} to={`user/18`}>
          <button className="button-27"> Cécilia &#9917;</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
