import { Link } from 'react-router-dom'

import '../styles/homeBanner.css'
import '/src/global/styles/elementos.css'

export const HomeBanner = () => {
  return (
    <section className='home-banner'>
      <div>
        <h2>Tu futuro comienza hoy</h2>
        <p>
            Cada día en Workline las empresas publican miles de empleos disponibles 
            que son una nueva oportunidad para crecer profesionalmente.
        </p>
        <p>
            Comienza una nueva etapa en tu vida a través de nuestras
            ofertas de trabajo.  
        </p>
        <Link className='green-button' to={'/ofertasDeTrabajo/?numberPage=0'}>Encuentra empleo</Link>
      </div>
      <div>
        <img src='/images/home/cartoonTelefono.png' alt="anuncio" />
      </div>
    </section>
  )
}


