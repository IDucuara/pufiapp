import React from 'react'
import { Col, Row } from 'react-bootstrap'
import image4 from '../../../images/napbanner.jpg'
import image8 from '../../../images/nap2.png'
import style from '../../Landing/Landing.module.css'
import { Link } from 'react-router-dom'

export default function PufiNap() {
  return (
    <Row>
    <Col className={style.description}>
      <div className={style.productCart}>
        <img src={image8} alt='nap girl' />
        <h3>Pufi NAP</h3>
        <p>Descripción de este producto</p>
        <Link to='/nap'> VER MAS</Link>
      </div>
    </Col>
    <Col className={style.image}>
      <img src={image4} alt='nap girl' />
    </Col>
  </Row>
  )
}
