import React from 'react';
import { Header } from '../components/header/Header';
import './landingpage.css'

export const Landinpage = () => {
  return (
    <div>
        <nav className='navegador'>
            <h1 className='titlePagina'>Olivo’Systems</h1>
            <div className='contendListaNavegador'>
                <li className='textNavegador'>Inicio</li>
                <li className='textNavegador'>Cliente</li>
                <li className='textNavegador'>Nosotros</li>
                <li className='textNavegadorContactanos'>Contactanos</li>
            </div>
        </nav>
        <div className='header'>
            <Header />
        </div>
    </div>
  )
}
