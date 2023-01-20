import React from 'react'
import './Carrusel.css'

export const Carrusel = ({imagenes}) => {
  return (
    <div className='PrimerCarrusel'>
        {imagenes.map((imagen, index) =>{
            return (
                <div key={index} >
                    <img className='imagenSlider1' src={imagen.imagen}/> 
                </div>
            );
            
        })}
    </div>
  )
}