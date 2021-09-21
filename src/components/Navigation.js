import {Link, useHistory} from "react-router-dom";
import "./Navigation.css"

const Navigation = ({user, setUser}) => {
  
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser({})
    history.push("/")
  }

  return(
          <nav className="nav">
              <ul className="nav_list">
                {Object.keys(user).length === 0 ? <>
                <li className="nav_page">
                <Link to="/">Register</Link>
                </li>
                <li className="nav_page">
                <Link to="/login">Login</Link>
                </li>
                </> :  <>
                  <li className="nav_page">
                    <p onClick={handleLogout}>Logout</p>
                  </li>
                  <li className="nav_page">
                    <Link to="/list">List</Link>
                  </li>
                </>}
              </ul>
          </nav>
  )
}
 export default Navigation;
