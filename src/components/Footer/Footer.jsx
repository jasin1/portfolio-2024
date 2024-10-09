import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footer" >
      <nav className="Footer-nav">
        <NavLink to="/" className="nav-link color-white">
          <p>Jasin TairaIdrissi</p>
        </NavLink>
        <div className="nav-links-wrapper">
          <ul className="nav-links">
            <li>
              <NavLink to="/About" className="nav-link color-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" className="nav-link color-white">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="nav-link color-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Footer;
