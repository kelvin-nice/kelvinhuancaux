import '../styles/SobreMi.css'
import elipseFuS from '../assets/Ellipse-fu-s.png'
import foto from '../assets/foto.png'
import idc from "../assets/idc.png"
import idat from "../assets/idat.png"

const SobreMi = () => {
  return (
    <section>
      <div className='contenedor-sobremi'>
        <img src={elipseFuS} className='elipse-fu-s' alt="Elipse fuccia" />
        <img src={foto} className='foto' alt="foto" />

        <div className='datos'>

          <h1>Kelvin Huanca Arcos</h1>
          <h1><span>UX UI Designer &nbsp; | &nbsp; Product designer &nbsp; | &nbsp; UI developer </span></h1>
          <p>Cel.: <span>+51 915 173 767</span></p>
          <p>Ubicación: <span>Lima, Perú</span></p>

          <p className='text-formacion' >Formación:</p>
          <div className='carreras' >

            <div className='formacion' >
            <img className='idc' src={idc} alt="idc" /> <p><span>Diseño Publicitario</span></p> 
            </div>

            <div className='formacion' >
            <img className='idat' src={idat} alt="idat" /> <p><span>Desarrollo Frontend</span></p> 
            </div>
          </div>
          
          {/* <a href="https://www.linkedin.com/in/kelvinhuancadesigner/" target="_blank" ><img
                      src={linkedinLogo}
                      alt="LinkedIn"
                      width="30"
                      height="30"
                      className="linkedin"
                    />  </a> */}

          {/* <div className='educacion' >
          <h2>Experiencia</h2>
          </div>   */}        

          <div className='experiencias' >
            <h2>Experiencia</h2>


            {/* INTERBANK */}
            <article className='experiencia' >
            <p>Empresa: <span>INTERBANK</span></p>
            <p>Cargo: <span>UX UI designer</span></p>
            <p className='fecha' >(Setiembre 2022 - Octubre 2023) Lima, Perú</p>
            <div className='funciones' >
              <h4 >Funciones:</h4>
              <ul>
                <li>Diseño de mockups, wireframes y prototipo interactivo con herramientas como figma y sketch. Incluye diseño de pantallas del flujo happy paht, errores y casuísticas.</li>

                <li>Diseño y gestión de “System design” de Interbank para APP iOS/Android,responsive y Desktop.</li>
                
                <li>Researching de la experiencia de usuario según requerimiento. Aplicando técnicas de Benchmark, card sorting, tree testing, Entrevistas con usuarios o el uso del “Maze” para obtener muestras masivas y tener nuevos insights.</li>

                <li>Intervención en mejoras UX en flujos complejos de Banca y organización con el equipo y exposición de soluciones en la UX y UI del producto respaldados por los testeos realizados.</li>

                <li>Entregable del prototipo ordenado con flujos interactivos al equipo en Figma, Invision y Zeplin </li>

                <li>Reuniones semanales del equipo UX/UI para coordinar avances, mejoras y estar sincronizados.</li>
              </ul>
              <div className='logro' >
                <p>Logro: Gracias un exahustivo researching y testing de propuestas se logró el cambió de la interface del Login “Banca por Internet / Empresas” a un login 2.0 <br/><br/>
                <a href="https://empresas.interbank.pe/login"> https://empresas.interbank.pe/login</a></p>
              </div>
            </div>
            </article>

            <br/>
            {/* SGS */}
            <article className='experiencia' >
            <p>Empresa: <span>SGS</span></p>
            <p>Cargo: <span>UX UI designer</span></p>
            <p className='fecha' >(Marzo 2022 - Setiembre 2022) Lima, Perú</p>
            <div className='funciones' >
              <h4 >Funciones:</h4>
              <ul>
                <li>Desarrollo de Benchmark, card sorting, custumer journey map, user person, map empathize y entrevistas a usuarios para obtener insights que ayuden a solucionar según lo requerido.</li>

                <li>Entrega del “User flow” y “desarrollo de la arquitectura de la i nformación”.</li>
                
                <li>Elaboración de mockups, wireframes(baja y alta fidelidad) y diseño del prototipo
                interactivo con herramientas como: figma y sketch.</li>

                <li>Creación del Design System con el método ”Atomic design”.</li>

                <li>Coordinación con el equipo de desarrollo y entregarles un buen hand off. </li>

                <li>Aplicación de Framework “Design thinking” en proyectos, bajo marco agil scrum y apoyo a los squads en asesoría UX.</li>

                <li>Apoyo en construcción del FRONT-END con herramientas como: HTML5, CSS
                (media query, flexbox y grid), JAVASCRIPT y JQuery de manera responsive.</li>
              </ul>
              <div className='logro' >
                <p>Logro: Mejoré la UI de la aplicación “SGS Workforce | scalable global solution” a través del método “Card sorting” y “entrevistas a stakeholders”, pude ordenar la información y dar jerarquía a lo que deseaba ver el usuario en medio de un conglomerado de información.  <br/><br/>
                <a href="https://play.google.com/store/apps/details?id=com.sgsapp&hl=es_PE"> SGS Workforce</a></p>
              </div>
            </div>
            </article>

            <br/>

            {/* Farmacias Peruanas S.A. */}
            <article className='experiencia' >
            <p>Empresa: <span>Farmacias Peruanas S.A.</span></p>
            <p>Cargo: <span>UX/UI (Proyecto 3 meses)</span></p>
            <p className='fecha' >(Setiembre 2021 - Noviembre 2021) Lima, Perú</p>
            <div className='funciones' >
              <h4 >Funciones:</h4>
              <ul>
                <li>Evaluación heurística, accesibilidad y escabilidad de la web “Mi farma” y proponer
                mejoras.</li>

                <li>Elaboración de mockups, wireframes y diseño del prototipo interactivo con
                herramientas como: figma y sketch.</li>
                
                <li>Elaboración de mockups, wireframes(baja y alta fidelidad) y diseño del prototipo
                interactivo con herramientas como: figma y sketch.</li>

                <li>Diseño y gestionamiento del “Design system”</li>

                <li>Diseño de bodegones de productos de los cards para la web Mifarma.</li>

                <li>Diseño y desarrollo de interfaces para tótems, utilizando figma, illustrator,
                photoshop(retoque de fotos) y visual code (HTML, CSS y Javascript)</li>

              </ul>
            </div>
            </article>


             {/* El Pregón Digital */}
             <article className='experiencia' >
            <p>Empresa: <span>UX / UI and FRONT END</span></p>
            <p>Cargo: <span>UX/UI (Proyecto 3 meses)</span></p>
            <p className='fecha' >(Setiembre 2019 - Noviembre 2021) Lima, Perú</p>
            <div className='funciones' >
              <h4 >Funciones:</h4>
              <ul>
                <li>Diseño de Mockups, wireframes y prototipos interactivos finales.</li>

                <li>Rediseño de sitios web antiguos y creación del “Desing system” de los mismos.</li>
                
                <li>Creación de flujos en coordinación con el equipo (user flow, task flow o blue print).</li>

                <li>Análisis heurístico, usabilidad y accesibilidad en productos tales como: Apps,
                WebApp, E-commerce, websites y otras plataformas.</li>

                <li>Desarrollo de SPA WEB responsive usando REACT JS Diseño y desarrollo de interfaces para tótems, utilizando figma, illustrator, photoshop(retoque de fotos) y visual code (HTML, CSS y Javascript).</li>

              </ul>
            </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
