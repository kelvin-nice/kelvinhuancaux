import logoContinental from '../assets/logo-continental.png'
import FigmaEmbed from "../componentes/FigmaEmbed";

const UniContinental = () => {

  return (
    <>


      <section>
            <div className='contenedor' >
      
              {/* Titulo */}
              <div className='titulo' >
                <div className='text-up' >
                  <h1>Caso UI</h1><img src={logoContinental} alt="Logo IT Hub" />
                </div>
                <h2>Tema: Diseño de interfaces</h2>
              </div>
      
              
      
              {/* Embebido */}
              <div className='requerimiento' >
                <h2>Vista previa del diseño en Figma</h2>
                <FigmaEmbed />
              </div>
      
              {/* 
              <div className='requerimiento' >
                <h2>Conclusión general</h2>
                <p>Hubieron personas que colaboraron con este diseño de sistema. A su vez existen varios proyectos en Interbank donde se usa un diseño de sistema un poco diferente a otros proyectos</p>
              </div> */}

      
            </div>
      
          </section>


    </>
  )
}

export default UniContinental
