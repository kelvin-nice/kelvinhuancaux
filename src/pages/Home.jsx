import '../styles/Home.css'
import figma from '../assets/icono-figma.png'
/* import arrowRight from '../assets/arrow-right.png' */
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
          <h1 className='hola' >Hola, soy Kelvin</h1>
          <h1 className='abajo' >un <span>UX Senior</span> con pasión de junior</h1>
          <p>UX UI Designer &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Product designer &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; UI UX Engineer </p>
        </div>
        <div className='btns'>
          <a href="https://drive.google.com/file/d/1omPsdu_B6UJZ6Jc_S_C66knXpYj_itxo/view?usp=sharing" download><button className='btn-descargar' >Descargar mi CV <svg xmlns="http://www.w3.org/2000/svg" fill='#020817' id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="14" height="14"><path fill='#020817' d="M12.033,19.011a3.489,3.489,0,0,0,2.475-1.024l3.919-3.919-2.121-2.121-2.782,2.782L13.5,0l-3,0,.024,14.709L7.76,11.947,5.639,14.068l3.919,3.919A3.487,3.487,0,0,0,12.033,19.011Z"/><path fill='#020817' d="M21,16v5H3V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z"/></svg> </button></a>

          
          <a > 
          <button onClick={() => setIsVisible(true)}className='btn-contactar' > Contáctame {/* <img src={arrowRight} alt='arrow-right' /> */} </button>

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
          <div className='content-text'>
            <h1>Análisis, diseño, testeo, prototipado y programación.</h1>
            <span className="corner top-left"></span>
            <span className="corner top-right"></span>
            <span className="corner bottom-left"></span>
            <span className="corner bottom-right"></span>
          </div>
          <p>Involucrar la estética, funcionalidad y una buena experiencia centrado en el usuario es mi objetivo en cada proyecto. Entregar soluciones eficientes que aporten un valor al producto o negocio.</p>
          <Link to='/sobre-mi' onClick={()=> window.scrollTo(0, 0)} ><button className='btn-experiencia' > Mi experiencia  <svg viewBox="0 0 12 13" fill="white" width="12" height="13" data-astro-cid-cyzdmxr5=""><path d="M0.329505 12.4312C-0.109835 11.9919 -0.109835 11.2796 0.329505 10.8402L8.15901 3.01074H2.625C2.00368 3.01074 1.5 2.50706 1.5 1.88574C1.5 1.26442 2.00368 0.760742 2.625 0.760742H10.875C11.4963 0.760742 24 1.26442 12 1.88574V10.1357C12 10.7571 11.4963 11.2607 10.875 11.2607C10.2537 11.2607 9.75 10.7571 9.75 10.1357V4.60173L1.9205 12.4312C1.48116 12.8706 0.768844 12.8706 0.329505 12.4312Z" clipRule="evenodd" fillRule="evenodd" fill="white" data-astro-cid-cyzdmxr5=""></path></svg> </button></Link>

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
