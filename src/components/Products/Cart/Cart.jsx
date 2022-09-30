import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../../NavBar/NavBar'
import style from '../../Products/Product.module.css'
import banner from '../../../images/banner.jpg'
import image7 from '../../../images/cart2.png'

export default function Cart() {
  return (
    <Container fluid className={style.container}>
      <Row>
        <NavBar />
        <img src={banner} alt='decoration image'  />
      </Row>
      <Row >
        <Col>
        <div className={style.productImg}><img src={image7} alt='cart bag ' /></div>
        </Col>
        <Col className={style.product}>
          <h1 >Pufi CART</h1>
          <h4>Descripción de este producto.</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nemo alias assumenda, exercitationem est quia praesentium minus autem rem accusamus sequi fugiat sunt expedita maxime, officia iste dolores eius cumque?</p>
        </Col>
      </Row>


    </Container>
  )
}
