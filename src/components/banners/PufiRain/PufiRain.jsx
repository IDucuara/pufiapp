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
        <h2>Pufi RAIN</h2>
        <p>Descripción de este producto</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit cupiditate totam ratione atque cumque sunt, quisquam placeat, soluta velit esse. </p>
        <Link to='/rain' style={{textDecoration:'none', color:'black'}}> VER MAS</Link>
      </div>
    </Col>
  </Row>
  )
}
