import { Link } from "react-router-dom";
import { NavBarMode } from "./interfaces/NavBar.type";

const NavBar: React.FC<NavBarMode> = ({ loggedIn }) => (
  <div className="menubox">
    <nav>
      <ul className="menu">
        <li>
          <Link to="/" className="link linkcreatenw">
            Home
          </Link>
        </li>

        {!loggedIn ? (
          <li>
            <Link to="/login" className="link linkcreatenw">
              Login
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" className="link linkcreatenw">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  </div>
);

export default NavBar;
