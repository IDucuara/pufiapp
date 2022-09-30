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
            <h2>Pufi CART</h2>
            <p>Descripción de este producto</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit cupiditate totam ratione atque cumque sunt, quisquam placeat, soluta velit esse. </p>
            <Link to='/cart' style={{textDecoration:'none', color:'black'}}> VER MAS</Link>
          </div>
        </Col>
      </Row>

  )
}
