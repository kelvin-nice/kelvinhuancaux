import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import '../styles/NavBar.css'


const NavBar = () => {
  return (
    <header className="header-containt" >
        <nav className="nav-bar" >
            <div className="izquierda">
                <img src={logo} alt="Logo" />
                <ul>
                    <li>
                        <Link to="/" >Inicio</Link>
                    </li>
                    <li>
                        <Link to="/sobre-mi" >Sobre mí</Link>
                    </li>
                    <li>
                        <Link to="/portafolio" >Portafolio</Link>
                    </li>
                </ul>

            </div>
            <div className="derecha" >

            </div>
        </nav>
    </header>
  )
}

export default NavBar
