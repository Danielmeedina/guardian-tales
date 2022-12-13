import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo-guardian.png";

function Navbar() {
  let activeStyle = {
    borderBottom: "3px solid var(--optional-color)",
    color: "var(--optional-color)",
  };

  return (
    <>
      <div className="nav-container">
        <nav className="nav-menu">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo guardian tales" />
            </Link>
          </div>
          <div className="nav-links">
            <ul className="links">
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to={"/heroes"}
                >
                  Heroes
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
