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
        <h3>Pufi PUFF</h3>
        <p>Descripción de este producto</p>
        <Link to='/puff'> VER MAS</Link>
      </div>
    </Col>
    <Col className={style.image}>
      <img src={image2} alt='puff outdoor' />
    </Col>
  </Row>
  )
}
