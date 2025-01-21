import logoInterbank from '../assets/logo-interbank.png'
import primero from '../assets/primero.jpg'
import segundo from '../assets/segundo.jpg'
import tercero from '../assets/tercero.jpg'

const DesignSystemInterbank = () => {
  return (
    <>
      

      <section>
            <div className='contenedor' >
      
              {/* Titulo */}
              <div className='titulo' >
                <div className='text-up' >
                  <h1>Caso UI</h1><img src={logoInterbank} alt="Logo IT Hub" />
                </div>
                <h2>Tema: Design System</h2>
              </div>
      
              
      
              {/* Ideacion */}
              <div className='requerimiento' >
                <h2>Presentación</h2>
                <p>Colaboré con Diseño de Systema de Interbank. Tuve que ser detalloso y dar variantes como: Default, focus, activo, hover, enable y disable.</p>
                <img src={primero} className='wireframe' alt="primero" />
                <img src={segundo} className='wireframe' alt="segundo" />
                <img src={tercero} className='wireframe' alt="tercero" />
              </div>
      
              {/* Conclusión general */}
              <div className='requerimiento' >
                <h2>Conclusión general</h2>
                <p>Hubieron personas que colaboraron con este diseño de sistema. A su vez existen varios proyectos en Interbank donde se usa un diseño de sistema un poco diferente a otros proyectos</p>
              </div>
      
      
      
      
      
      
            </div>
      
          </section>


    </>
  )
}

export default DesignSystemInterbank
