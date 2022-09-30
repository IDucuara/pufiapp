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
        <h2>Pufi NAP</h2>
        <p>Descripción de este producto</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit cupiditate totam ratione atque cumque sunt, quisquam placeat, soluta velit esse. </p>
        <Link to='/nap' style={{textDecoration:'none', color:'black'}}> VER MAS</Link>
      </div>
    </Col>
    <Col className={style.image}>
      <img src={image4} alt='nap girl' />
    </Col>
  </Row>
  )
}
