import React from 'react'
import { Col, Row } from 'react-bootstrap'
import image2 from '../../../images/puffbanner.jpg'
import image6 from '../../../images/puff2.png'
import style from '../../Landing/Landing.module.css'
import { Link } from 'react-router-dom'

export default function PufiPuff() {
  return (
    <Row>
    <Col className={style.description}>
      <div className={style.productCart}>
        <img src={image6} alt='puff outdoor' />
        <h2>Pufi PUFF</h2>
        <p>Descripción de este producto</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit cupiditate totam ratione atque cumque sunt, quisquam placeat, soluta velit esse. </p>
        <Link to='/puff' style={{textDecoration:'none', color:'black'}}> VER MAS</Link>
      </div>
    </Col>
    <Col className={style.image}>
      <img src={image2} alt='puff outdoor' />
    </Col>
  </Row>
  )
}
