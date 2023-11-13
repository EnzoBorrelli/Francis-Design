import "./NavMenu.css";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import {CgSearch} from "react-icons/cg"
import {RiWhatsappFill} from "react-icons/ri"
import {BsBookHalf} from "react-icons/bs"
import {FaShoppingBag} from "react-icons/fa"

import logo from "/logo.png"

const NavMenu = () => {
  return (
    <header className="navmenu">
      {/* brand divisor*/}
      <div className="navmenu-div--brand">
        <div className="brand-logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="brand-name">FrancisDesign</h1>
      </div>
      {/*searchbar divisor */}
      <div className="navmenu-searchbar">
        <input type="text" placeholder="buscar..." className="searchbar-input" />
        <button className="searchbar-btn"><CgSearch/></button>
      </div>
      {/*navbar divisor */}
      <nav className="navmenu-nav">
        <ul className="navmenu-ul">
          <li className="navmenu-li">
            <NavLink to="/Inicio" className="navmenu-link">
              <h2 className="link-h2"><ImHome /></h2>
            </NavLink>
          </li>
          <li className="navmenu-li">
            <NavLink to="/Catalogo" className="navmenu-link">
            <h2 className="link-h2"><FaShoppingBag/></h2>
            </NavLink>
          </li>
          <li className="navmenu-li">
            <NavLink to="/Blog" className="navmenu-link">
            <h2 className="link-h2"><BsBookHalf/></h2>
            </NavLink>
          </li>
        </ul>
      </nav>
      <a href="https://api.whatsapp.com/send?phone=5491123822233&text=Esto%20es%20un%20mensaje%20de%20prueba" target="_blank" className="navmenu-wp"><RiWhatsappFill/></a>
    </header>
  );
};

export default NavMenu;
