import '../styles/Interbank.css'
import logoInterbank from '../assets/logo-interbank.png'
import processInterbank from '../assets/process-interbank.png'
import otp from '../assets/investSBS-03.png'
import benchmark from '../assets/benchmark.png'
import debeTener from '../assets/debtener-05.png'
import userflow from '../assets/userflow.png'
import wireframe from '../assets/wireframes.png'
import prototipado from '../assets/prototipado.png'
import entrevistas from '../assets/entrevistas.png'


const Interbank = () => {
  return (
    <section>
      <div className='contenedor' >

        {/* Titulo */}
        <div className='titulo' >
          <div className='text-up' >
            <h1>Caso UX</h1><img src={logoInterbank} alt="Logo interbank" />
          </div>
          <h2>Tema: Reforzamiento de seguridad en el LOGIN</h2>
        </div>

        {/* Requerimiento */}
        <div className='requerimiento' >
          <h2>Requerimientos </h2>

          <div className='tables' >
                    <div className='tableux' >
                      <h3>Problema</h3>
                      <p>Los usuarios tienen problemas de seguridad. Hubo saboteos en sus cuentas empresariales</p>
                    </div>
                    <div className='tablefront' >
                      <h3>Metas</h3>
                      <ul>
                        <li>No sea complicado para el usuario. Sea rápido y efectivo 
                        </li>
                        <li>Que esta implementación brinde confianza al usuario.
                        </li>
                        <li>Para los desarrolladores no le tome mucho tiempo implementarlo</li>
                      </ul>
                    </div>
          </div>

        </div>

        {/* Estrategia */}

        <div className='estrategia' >
          <h2>Estrategia </h2>
          <div className='contenido'>
          <p>La solución que se aplicó fué hacer una investigación de las diferentes maneras de seguridad que existen, entrevistas y benchmarck al detalle. Además lo que conlleva a entregar un nuevo user-flow y prototipo. Usaré el framework <span>Design Thinking</span> para organizarnos en las etapas del desarrollo solutivo. </p>
          <img src={processInterbank} alt="design thinking" className='thinking-interbank' />
         {/*  <div className='content-thinking-interbank' >
            
          </div> */}
          </div>


        </div>


        {/* Empatia */}
        <div className='requerimiento' >
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
                      {/* <img src={debeTener} className='debe-tener' alt="Debe tener" /> */}
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
                      {/* <img src={debeTener} className='debe-tener' alt="Debe tener" /> */}
                      <ul>
                        <li>Modelo OTP. 
                        </li>
                        <li>Interacción rapida y usada por otras entidades y verificada por la SBS.
                        </li>
                        <li>Para los desarrolladores no le tome mucho tiempo implementarlo.</li>
                      </ul>
                      
                    </div>
          </div>

        </div>

        {/* Definicion */}
        <div className='requerimiento' >
          <h2>2. Definición</h2>
          <p>Deacuerdo al OTP (modelo elegido para la autenticación) se realizó el siguiente flujo.</p>
          <img src={userflow} className='userflow' alt="userflow" />
        </div>

        {/* Idear */}
        <div className='requerimiento' >
          <h2>3. Idear</h2>
          <h3>Benchmark</h3>
          <p>Se mapeó varios bancos peruanos como internacionales a su vez otras entidades. Se encontró similitudes como estas entidades solucionaron de manera rápida y efectiva este problema y los usuarios finales le gustaba ello.</p>
          <img src={benchmark} className='benchmarkimg' alt="Benchmarck" /> <br/>
          <h3>Conclusión del Benchmark</h3>
          <p>Debería tener los siguientes puntos</p>
          <img src={debeTener} className='debe-tener' alt="Debe tener" />
        </div>

        {/* Prototipar */}
        <div className='requerimiento' >
          <h2>4. Prototipado</h2>
          <p>Creación de pantallas finales. En cuanto al diseño solo se usó lo que ya estaba en ambiente desarrollado, solo era proponer la experiencia de autenticidad de seguridad en la app y a su vez sea raoido y efectivo.</p>
          <img src={wireframe} className='wireframe' alt="wireframe" />
          <br/>
          <img src={prototipado} className='userflow' alt="prototipo" />
        </div>

        {/* Conclusión general */}
        <div className='requerimiento' >
          <h2>Conclusión general</h2>
          <p>Este researching fué de gran impacto para la desición del equipo en un momento dado, donde el SPRINT contaba con poco tiempo y se optó una solución rápida de acuerdo con los componentes desarrollados en ambiente por el equipo de desarrollo y las escasa semana  para presentarlo. Fué exitoso!.</p>
        </div>
        <br/>
        <br/>






      </div>

    </section>
  )
}

export default Interbank
