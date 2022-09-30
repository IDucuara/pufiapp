import React from 'react'
import { Col, Row } from 'react-bootstrap'
import image3 from '../../../images/cartbanner.jpg'
import image7 from '../../../images/cart2.png'
import style from '../../Landing/Landing.module.css'
import { Link } from 'react-router-dom'

export default function PufiCart() {
  return (
    <Row>
        <Col className={style.image}>
          <img src={image3} alt='cart bag ' />
        </Col>
        <Col className={style.description}>
          <div className={style.productCart}>
            <img src={image7} alt='cart bag ' />
            <h3>Pufi CART</h3>
            <p>Descripción de este producto</p>
            <Link to='/cart'> VER MAS</Link>
          </div>
        </Col>
      </Row>

  )
}
