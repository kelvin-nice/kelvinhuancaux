import '../styles/Footer.css'
import behanceLogo from "../assets/behance.svg";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className='contenedor-footer'>
      <h3>Redes sociales</h3>
        <div className='content-redes' >
          
            {/* Iconocos de redes*/}
                    <a href="https://www.behance.net/kelvinhuanca"><img
                      src={behanceLogo}
                      alt="Behance"
                      width="30"
                      height="30"
                      className="behance"
                    /></a>
                    <a href="https://github.com/kelvin-nice"><img
                      src={gitHubLogo}
                      alt="GitHub"
                      width="30"
                      height="30"
                      className="github"
                    /></a>
                    <a href="https://www.linkedin.com/in/kelvinhuancadesigner/"><img
                      src={linkedinLogo}
                      alt="LinkedIn"
                      width="30"
                      height="30"
                      className="linkedin"
                    /></a>
        </div>

        <p>© 2024 <span className='diseñado' >Diseñado</span> y <span className='programado' >programado</span> por <span className='mi' >mí.</span> </p>

      </div>
      
    </footer>
  )
}

export default Footer
