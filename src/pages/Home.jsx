import '../styles/Home.css'
import figma from '../assets/icono-figma.png'
import arrowRight from '../assets/arrow-right.png'
import cerebro from '../assets/cerebro.png'
import sombra from '../assets/cerebro-sombra.png'
import uxui from '../assets/uxui.png'
import frontend from '../assets/frontend.png'
import interbank from '../assets/interbank.png'
import itHub from '../assets/ithub.png'
import { Link } from 'react-router-dom'
import elipseFuS from '../assets/Ellipse-fu-s.png'
import elipseBluS from '../assets/Ellipse-blu-s.png'
import invision from '../assets/invision.png'
import maze from '../assets/maze.png'
import designSystemInterbank from '../assets/design-system-interbank.png';
import behanceCard from '../assets/behance-card.png';
import uniContinental from '../assets/uni-continental.png';
/* import { useNavigate } from 'react-router-dom' */
import { useState } from 'react';
import Modal from 'react-awesome-modal';
import { PiPhoneCallFill } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";



const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (

    <>

    <section>

      <div className='contenedor' >

      <img src={elipseFuS} className='elipse-fu-s' alt="Elipse fuccia" />
      <img src={elipseBluS} className='elipse-blu-s' alt="Elipse blue" /> 
      <img src={maze} alt="maze" className='maze' />
      <img src={invision} className='invision' alt="invision" />
      <img src={figma} alt='icono figma' className='figma-ico' />

        <div className='text-head' >
          <h1>Hola, soy Kelvin</h1>
          <h1>un <span>UX UI Senior</span> </h1>
          <p>UX UI Designer &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Product designer &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; UI Developer </p>
        </div>
        <div className='btns'>
          <a href="https://drive.google.com/file/d/18LPrPhdUqPtmQ2er0VlLYJjYHb7PRVQN/view?usp=sharing" download><button className='btn-descargar' >Descargar mi CV</button></a>

          
          <a > 
          <button onClick={() => setIsVisible(true)}className='btn-contactar' > Contáctame <img src={arrowRight} alt='arrow-right' /> </button>

          <Modal visible={isVisible} width="400" height="300" effect="fadeInUp" onClickAway={() => setIsVisible(false)}>
          <div className='content-modal'>
                <h2>Datos de contacto</h2>
                <p> <PiPhoneCallFill className='telf' /> +51 915173767 </p> 
                <p> <SiMinutemailer  className='telf' /> kelvin18_6hotmail.com </p>

                <a className='btn-cerrar' onClick={() => setIsVisible(false)}>Cerrar</a>
              </div>
          </Modal>
          </a>

          
          
        </div>
      </div>
    </section>



    <section>
      <div className='contenedor-dos' >
        <div className='text-head-dos' >
          <h1>Análisis, diseño, testeo  y programación.</h1>
          <p>Involucrar la estética, funcionalidad y una buena experiencia centrado en el usuario es mi objetivo en cada proyecto. Entregar soluciones eficientes que aporten un valor al producto o negocio.</p>
          <a href="/sobre-mi" ><button className='btn-experiencia' > Mi experiencia <img src={arrowRight} alt='arrow-right' /> </button></a>

        </div>
        <div className='cebrero-ux' >
          <img src={cerebro} className='brain' alt="brain" />
          <img src={sombra} alt="shadow" />
        </div>
      </div>
    </section>

    <section>
      <div className='contenedor-tres' >
        <div className='text-head-tres' >
          <h1>Tecnologías que uso</h1>
          <p>Como <span>UX UI</span> domino las siguientes herramientas que me permiten <span>prototipar, diseñar, organizarme en equipo y hacer researching</span> para alcanzar los objetivos. A su vez me gusta programar lo que diseño ya que también participé como frontend en diferentes proyectos.</p>
          
        </div>
        <div className='tables' >
          <div className='tableux' >
            <h3>UX / UI</h3>
            <img src={uxui} className='uxui' alt="uxui" />
          </div>
          <div className='tablefront' >
          <h3>Frontend</h3>
          <img src={frontend} className='frontend' alt="frontend" />
          </div>
        </div>
      </div>
    </section>


    <section id='portafolio' >
      <div className='contenedor-cuatro' >
        <div className='text-head-cuatro' >
          <h1>Portafolio</h1>
        </div>
        <div className='portafolio' >
          <Link to='/interbank' onClick={()=> window.scrollTo(0, 0)} >
            <article>
              <img src={interbank} className='articulo' alt="interbank" />
            </article>
          </Link>
          <Link to='/it-hub' onClick={()=> window.scrollTo(0, 0)} >
            <article>
              <img src={itHub} className='articulo' alt="IT Hub" />
            </article>
          </Link>
          <Link to='/design-system' onClick={()=> window.scrollTo(0, 0)} >
            <article>
              <img src={designSystemInterbank} className='articulo' alt="design-system-interbank" />
            </article>
          </Link>
          <Link to='/universidad-continental' onClick={()=> window.scrollTo(0, 0)} >
            <article>
              <img src={uniContinental} className='articulo' alt="Universidad Continental" />
            </article>
          </Link>
          <a href='https://www.behance.net/kelvinhuanca' target='_blank' onClick={()=> window.scrollTo(0, 0)} >
            <article>
              <img src={behanceCard} className='articulo' alt="behanceCard" />
            </article>
          </a>
        </div>
      </div>
    </section>

    </>
  )
}

export default Home
