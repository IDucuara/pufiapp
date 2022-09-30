import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Footer/Footer.module.css'
import pufiLogoB from '../../images/pufilogoB.png'
import secure from '../../images/secure.jpg'
import red1 from '../../images/fb.png'
import red2 from '../../images/twitter.png'
import red3 from '../../images/insta.png'

export default function Footer() {
  return (
    <div className={style.content}>

      <div className={style.logo}><img src={pufiLogoB} alt='pufi logo black' /></div>

      <div className={style.products}>
        <Link to='/rain' style={{textDecoration:'none', color:'black'}}>PUFI RAIN</Link>
        <Link to='/puff' style={{textDecoration:'none', color:'black'}}>PUFI PUFF</Link>
        <Link to='/cart' style={{textDecoration:'none', color:'black'}}>PUFI CART</Link>
        <Link to='/nap' style={{textDecoration:'none', color:'black'}}>PUFI NAP</Link>
      </div>

      <div className={style.contact}>
        <h5>CONTACTO</h5>
        <h5>AYUDA</h5>
        <h5>CÓMO COMPRAR</h5>
        <h5>TÉRMINOS Y CONDICIONES</h5>
      </div>

      <div className={style.secure}>
        <h5>COMPRA 100% SEGURA</h5>
        <img src={secure} alt='compra segura certificado'  />
      </div>


      <div className={style.social}>
        <h5>SEGUINOS EN</h5>
        <img src={red1} alt='facebook icon' />
        <img src={red2} alt='twitter icon' />
        <img src={red3} alt='instagram icon' />
      </div>
      
    </div>
  )
}
