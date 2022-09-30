import React from 'react'
import { Col, Row } from 'react-bootstrap'
import image1 from '../../../images/rainbanner.jpg'
import image5 from '../../../images/rain2.png'
import style from '../../Landing/Landing.module.css'
import { Link } from 'react-router-dom'

export default function PufiRain() {
  return (
    <Row >
    <Col className={style.image}>
      <img src={image1} alt='rain umbrellas' />
    </Col>
    <Col className={style.description}>
      <div className={style.productCart}>
        <img src={image5} alt='rain umbrellas' />
        <h3>Pufi RAIN</h3>
        <p>Descripción de este producto</p>
        <Link to='/rain'> VER MAS</Link>
      </div>
    </Col>
  </Row>
  )
}
