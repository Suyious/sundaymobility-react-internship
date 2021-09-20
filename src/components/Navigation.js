import {Link} from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return(
          <nav className="nav">
              <ul className="nav_list">
                <li className="nav_page">
                  <Link to="/">Register</Link>
                </li>
                <li className="nav_page">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav_page">
                  <Link to="/list">List</Link>
                </li>
              </ul>
          </nav>
  )
}
 export default Navigation;
