import './Header.css';
import PicMe from '../../assets/me-small.png';
import {NavLink} from "react-router-dom";


function Header(){
  return(
    <nav>
      <div>
        <NavLink to="/" className="logo-wrapper">
        <img src={PicMe} alt="" />
        <span>JASIN IDRISSI</span>
        </NavLink>
      </div>
      <div className="nav-links-wrapper">
        <ul className='nav-links'>
          <li><NavLink to="/About" className='nav-link'>About</NavLink></li>
          <li><NavLink to="/Projects" className='nav-link'>Projects</NavLink></li>
          <li><NavLink to="/Contact" className='nav-link'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )

}

export default Header;