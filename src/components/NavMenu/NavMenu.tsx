import './NavMenu.css'
import {NavLink} from "react-router-dom"

const NavMenu = () => {
  return (
    <header className="navmenu">
        <ul className="navmenu-ul">
            <li className="navmenu-li"><NavLink to="/Inicio" className="navmenu-link">a</NavLink></li>
            <li className="navmenu-li"><NavLink to="/Catalogo" className="navmenu-link"></NavLink></li>
            <li className="navmenu-li"><NavLink to="/Blog" className="navmenu-link"></NavLink></li>
            <li className="navmenu-li"><NavLink to="/Contacto" className="navmenu-link"></NavLink></li>
        </ul>
    </header>
  )
}

export default NavMenu