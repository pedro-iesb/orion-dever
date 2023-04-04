import React from 'react'
import Pagina from '../componentes/Pagina'

const arrays = () => {

  const carros = ['Opala', 'Classic', 'Ka', 'Omega', 'Fuscão']

  return (
        <Pagina titulo="Array">
            <ol>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </ol>
        </Pagina>
  )

}
export default arrays