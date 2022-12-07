import { Link } from "react-router-dom";
import "./header.css";


/**
 * Header component
 *
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <header>
      <div>
        <div>
        <Link to="/">
          <img className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          />
        </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favorites">Favoritos</Link>
            </li>
          </ul><source />
        </nav>
      </div>
    </header>
  );
};

export default Header;
