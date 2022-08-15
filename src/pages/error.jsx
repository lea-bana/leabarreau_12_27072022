import { Link } from "react-router-dom";
import "../style/error.css";

/**
 * The Error function returns the error page content and a Link to the home page.
 * @returns the error page content.
 * @component Error
 **/

function Error() {
  return (
    <div className="errorpage">
      <div className="error404">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
