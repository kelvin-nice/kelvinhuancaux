import '../styles/ItHub.css'
import logoItHub from '../assets/log-ithub.png'
import researching from '../assets/researching.png'
import problemasWeb from '../assets/problemas-web.png'
import userflowIthub from '../assets/userflow-ithub.png'
import bocetoIthub from '../assets/bocetos-ithub.png'
import nuevosCambios from '../assets/nuevos-cambiosweb-ithub.png'
import webFinalIthub from '../assets/webfinal-ithub.png'
import webFinalIthubDos from '../assets/webfinal-ithub-02.png'


const ItHub = () => {
  return (
    <section>
      <div className='contenedor' >

        {/* Titulo */}
        <div className='titulo' >
          <div className='text-up' >
            <h1>Caso UX</h1><img src={logoItHub} alt="Logo IT Hub" />
          </div>
          <h2>Tema: Rediseño del Home</h2>
          <p>Esta plataforma es para el uso exclusivo de miembros de la empresa donde descargan softwares, solicitan tickets para tramitar requerimientos y hacen consultas. Toda operación es de caracter de trabajo de la misma empresa. 
          </p>
          <p>Solo es un requerimiento sencillo para rediseñar el home de la plataforma, ya que, tiene una mala experiencia UX. Por lo tanto no se usara ningún FRAMEWORK.</p>
        </div>

        {/* Requerimiento */}
        <div className='requerimiento' >
          <h2>Requerimientos </h2>
          
          <div className='tables' >
                    <div className='tableux' >
                      <h3>Problemas</h3>
                      <ul>
                        <li>Mala experiencia de usuario al no saber resolver sus propias inquietudes en la web.</li>
                        <li>Congestión visual</li>
                        <li>El usuario no es autónomo al sacar su ticket y ubicar los cursos para su desarrollo.
                        </li>
                        <li>El usuario encuentra torpesas en el flujo ya que no define desde el comienzo si es usuario común o un lider.</li>
                        <li>No hay jerarquías ni orden en el diseño.</li>
                      </ul>
                    </div>
                    <div className='tablefront' >
                      <h3>Metas</h3>
                      <ul>
                        <li>Independencia y autonomía del usuario.</li>
                        <li>Orden y sencilles en el diseño</li>
                        <li>Que no haya ninguna reunión para entender la plataforma
                        </li>
                        <li>El propio usuario haga las preguntas correctas como usuario común o líder técnico</li>
                        <li>Que el usuario tenga interés por las noticias</li>
                      </ul>
                    </div>
          </div>
        </div>

        {/* problemas Web IT hub */}
        <div className='requerimiento' >
          <img src={problemasWeb} className='userflow' alt="problemas Web IT hub" />
        </div>

        {/* Texto Izquierda e imagen derecha */}

        {/* <div className='estrategia' >
          <h2>Researching </h2>
          <div className='contenido'>
          <p>La solución que se aplicó fué hacer una investigación de las diferentes maneras de seguridad que existen, entrevistas y benchmarck al detalle. Además lo que conlleva a entregar un nuevo user-flow y prototipo. Usaré el framework <span>Design Thinking</span> para organizarnos en las etapas del desarrollo solutivo. </p>
          <img src={processInterbank} alt="design thinking" className='thinking-interbank' />
          </div>


        </div> */}


        {/* Empatia */}
        {/* <div className='requerimiento' >
          <h2>1. Empatía </h2>

          <div className='tables' >
                    <div className='investigacion' >
                      <h3>Investigación</h3>
                      <p>Maneras de registro personales.</p>
                      <div>
                      <img src={otp} alt="" />
                      </div>
                    </div>
                    <div className='benchmarck' >
                      <h3>Entrevistas</h3>
                      <p className='interview-text' >Seleccionamos a 5 clientes colaboradores para poder conversar y hacerles preguntas tanto cuantitativas como cualitativas y así obtener insights nuevos o confirmar lo que suponemos.</p>
                      <img src={entrevistas} className='benchmarkimg' alt="entrevistas" /> <br/>
                      <h3>Insights</h3>
                      <p>La información que logramos obtener fue esta:</p>
                      
                      <ul>
                        <li>Deseaban que fuera rápido o breve. 
                        </li>
                        <li>Que la confirmación para ingresar a su plataforma web fuera a través del E-mail.
                        </li>
                        <li>Para los desarrolladores no le tome mucho tiempo implementarlo</li>
                      </ul>
                      <br/>
                      <h3>Conlusión</h3>
                      <p className='interview-text'  >Según la información que logramos obtener de los usuarios y la tecnología y recursos con que contamos y tambien el tiempo con que contabamos para poder solucionar este requerimiento tomamos la siguiente decisión:</p>
                      
                      <ul>
                        <li>Modelo OTP. 
                        </li>
                        <li>Interacción rapida y usada por otras entidades y verificada por la SBS.
                        </li>
                        <li>Para los desarrolladores no le tome mucho tiempo implementarlo.</li>
                      </ul>
                      
                    </div>
          </div>

        </div> */}

        {/* Researching */}
        <div className='requerimiento' >
          <h2>Researching</h2>
          <p>Comencé por investigar las actitudes y hábitos  del usuario en el uso de la plataforma. Cuáles son las funciones principales y requiere el usuario y cuál es más su interes al momento de buscar información.</p>
          <p>Hice un <span>“MAZE”</span> de preguntas y lo dividí en grupos de dos; Usuarios Comunes y Líderes Técnicos. Coloqué preguntas cuantitativas como abiertas. Envié el “Maze” a 100 usuarios y todos cumplieron con el cuestionario ya que era obligatorio exigirlo a sus empleados.</p>
          <img src={researching} className='userflow' alt="Researching IT hub" />
        </div>

        {/* Userflow*/}
        <div className='requerimiento' >
          <h2>Userflow</h2>
          {/* <h3>Benchmark</h3> */}
          <p>Realicé un flujo de usuario para poder construir el aterrizaje esperado para el usuario final.
          Antes los dos tipos de usuarios se ubicaban en el mismo home y el usuario final encontraba en desorden sus consultas propias y requerimientos.</p>
          <img src={userflowIthub} className='benchmarkimg' alt="Userflow IT Hub" /> <br/>
        </div>

        {/* Ideacion */}
        <div className='requerimiento' >
          <h2>Ideación</h2>
          <p>Con los requerimientos mapeados, un nuevo flujo de usuario y las principales necesidades del usuario también mapeadas se idea las posibles soluciones. Presento rafeos a mano alzada y uso el Invision para colocar los screens de las ideas y conversar con el equipo de desarrollo.</p>
          <img src={bocetoIthub} className='wireframe' alt="bocetoIthub" />
        </div>

        {/* Nuevos cambios de web*/}
        <div className='requerimiento' >
          <h2>Nuevos cambios</h2>
          {/* <h3>Benchmark</h3> */}
          <p>Rescaté las secciones más importantes; aquellas que cumplen los objetivos de la web y escondí el resto de la información en la siguientes páginas.</p>
          <ul>
            <li>Propuse un buscador en una sección con las preguntas más frecuentes que se suelen usar.</li>
            <li>Usé iconos para los textos principales para que refuercen las categorías.</li>
            <li>Coloqué un slider con diferentes eventos o noticias principales.</li>
            <li>Coloqué otra sección para la generación de tickets.</li>
            <li>Retiré información que coloqué en otra categoría para que hubiera más orden.</li>
            <li>Retiré el aside que había en un comienzo para hacerlo más sencillo aún.</li>
            <li>Coloqué otra sección para las noticias.</li>
          </ul>
          <img src={nuevosCambios} className='benchmarkimg' alt="nuevos cambios en IT hub" /> <br/> <br/><br/>

          <h2>Presentación final de screens</h2>
          <h3>Paso 1. Elegir el tipo de usuario</h3><br/>
          <img src={webFinalIthub} className='benchmarkimg' alt="Web Final IT hub" />
          <br/><br/><br/>
          <h3>Paso 2. New home - Lider Usuario</h3><br/>
          <img src={webFinalIthubDos} className='benchmarkimg' alt="Web Final 02 IT hub" />
        </div>

        {/* Conclusión general */}
        <div className='requerimiento' >
          <h2>Conclusión general</h2>
          <p>No se necesito de un framework (Design Thinking u otro) para solucionarlo por etapas porque era un requerimiento de un sprint de 2 semanas que incluía el UX researching, diseño UI y el desarrollo web. Además de las limitaciones de los componentes se tenía que usar los ya existían en la UI de los developers, Aunque propuse nuevos componentes porponiento el método Atomic design como design system. A pesar del tiempo en contra se cumplió con las expectativas de los usuarios y la satisfacción del mismo.</p>
        </div>
        <br/>
        <br/>






      </div>

    </section>
  )
}


export default ItHub
