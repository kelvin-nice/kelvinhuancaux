import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';
import Hamburger from '../assets/hamburger.png';
import HamburgerClosed from '../assets/close.png';
import '../styles/NavBar.css';
import behanceLogo from "../assets/behance.svg";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import { useState } from "react";

const NavBar = () => {

    /*   Manejo de Estados de Mobil */
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    const close = ()=>{
        setIsOpen(false);
    }

    const navigate = useNavigate();
  const location = useLocation(); // Saber en qué ruta estamos actualmente
  /*   Manejo de Estados de escritorio */

  const [active, setActive] = useState("inicio"); // Estado para el elemento activo
  
  const handleActive = (item) => {
    setActive(item); // Cambia el estado al elemento seleccionado
    window.scrollTo(0, 0);
  };

  

  /* Manejo de portafolio */
  const handleScroll = () => {
    const portafolio = document.getElementById('portafolio');
    if (portafolio) {
      portafolio.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    close(); // Cierra el menú móvil después de hacer clic
  };



  // Navegar y hacer scroll al portafolio
  const goToPortfolio = () => {
    if (location.pathname !== "/") {
      // Si no estamos en Home, primero navegamos
      navigate("/");
      setTimeout(() => handleScroll(), 100); // Esperamos para hacer el scroll
    } else {
      handleScroll(); // Si ya estamos en Home, solo hacemos scroll
    }
    close(); // Cierra el menú móvil
  };


  return (
    <>
    {/* <header className="header-containt">  */}
      <nav className="nav-bar">
      <img src={logo} alt="Logo" className="logo" />

      {/* Movil */}
      
        <div className='bar-icon' onClick={toggle}  >
            {!isOpen ? <img  src={Hamburger} alt="Logo" className="menu hamburguesa" /> : <img src={HamburgerClosed} alt="Logo" className="menu hamburguesa" /> }
        </div>
        {/* {isOpen && ( */}
        <div className={`menu-mobile ${isOpen ? "open" : ""}`} >
            <ul>
                <li className="linkuno" >
                <Link
                    to="/"
                    className="link-mobile"
                    onClick={close}
                >
                    Inicio
                </Link>
                </li>

                {/* UN STOP sobre mi */}
                <li>
                <Link
                    to="/sobre-mi"
                    className="link-mobile"
                    onClick={close}
                >
                    Sobre mí
                </Link>
                </li>


                <li>
                <a
                    to="/portafolio"
                    className="link-mobile"
                    onClick={goToPortfolio}
                >
                    Portafolio
                </a>
                </li>
            </ul>
        </div>
        {/* )  } */}


                         

       {/* Escritorio */}
        <div className="izquierda">
          <ul>
            <li>
              <Link
                to="/"
                className={`menu-item ${active === "inicio" ? "active" : ""}`}
                onClick={() => handleActive("inicio")}
              >
                Inicio
              </Link>
            </li>


          {/* UN STOP sobre mi */}

            <li>
              <Link
                to="/sobre-mi"
                className={`menu-item ${active === "sobre-mi" ? "active" : ""}`}
                onClick={() => handleActive("sobre-mi")}
              >
                Sobre mí
              </Link>
            </li>


            <li>
              <a
                to="/portafolio"
                className={`menu-item ${active === "portafolio" ? "active" : ""}`}
                onClick={() => { handleActive("portafolio"); handleScroll(); goToPortfolio(); }}
              >
                Portafolio
              </a>
            </li>
          </ul>
        </div>
        <div className="derecha">



            {/* Iconocos de redes en Ecritorio */}
          <a href="https://www.behance.net/kelvinhuanca" target="_blank" ><img
            src={behanceLogo}
            alt="Behance"
            width="30"
            height="30"
            className="behance"
          /></a>
          <a href="https://github.com/kelvin-nice" target="_blank" ><img
            src={gitHubLogo}
            alt="GitHub"
            width="30"
            height="30"
            className="github"
          /></a>
          <a href="https://www.linkedin.com/in/kelvinhuancadesigner/" target="_blank" ><img
            src={linkedinLogo}
            alt="LinkedIn"
            width="30"
            height="30"
            className="linkedin"
          /></a>
        </div>
      </nav>
  {/* </header>  */}
  </>
  );
};

export default NavBar;

