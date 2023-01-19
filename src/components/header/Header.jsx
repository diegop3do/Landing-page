import React from 'react'
import './header.css'
import persona from '../../images/imagenes/undraw_reminder_re_fe15.svg'

export const Header = () => {
  return (
    <div className='contendHeader'>
        <div className='tituloParrafoHeader'>
            <h1 className='tituloDelHeader'>Confianza para tener su negocio <br /> con software especializado</h1>
            <p className='pararfoDelHeader'>Utilizamos las ultimas tecnologias del mercado y que <br /> mejor se adecuen para su negocio aumentado las <br /> rentabilidad y estando a la vanguardia del mercado</p>
                <div className='añosDeExperiencia_diferentesOpciones'>
                    <div className='añosDeExperiencia'>
                        <h1 className='tituloAñosDeExperiencia_diferentesOpciones'>+5</h1> 
                        <h2 className='parrafoAñosDeExperiencia_diferentesOpciones'>Años de Experiencia</h2>
                    </div>
                    <div className='diferentesOpciones'>
                        <h1 className='tituloAñosDeExperiencia_diferentesOpciones'>+7</h1>
                        <h2 className='parrafoAñosDeExperiencia_diferentesOpciones'>Diferentes Opciones</h2>
                    </div>
                </div>
        </div>
        <img className='imagenDelHeader' src={persona} alt="casa" />
    </div>
  )
}
