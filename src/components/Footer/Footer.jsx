import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='content'>

      <div className='logo'>LOGO</div>

      <div className='products'>
        <Link to='/rain'>PUFI RAIN</Link>
        <Link to='/puff'>PUFI PUFF</Link>
        <Link to='/cart'>PUFI CART</Link>
        <Link to='/nap'>PUFI NAP</Link>
      </div>

      <div className='contact'>
        <h5>CONTACTO</h5>
        <h5>AYUDA</h5>
        <h5>CÓMO COMPRAR</h5>
        <h5>TÉRMINOS Y CONDICIONES</h5>
      </div>

      <div className='secure'>
        <h5>COMPRA 100% SEGURA</h5>
        <img src='' alt='compra segura certificado' />
      </div>


      <div className='social'>
        <h5>SEGUINOS EN</h5>
        <img src='' alt='facebook icon' />
        <img src='' alt='twitter icon' />
        <img src='' alt='instagram icon' />
      </div>
      
    </div>
  )
}
