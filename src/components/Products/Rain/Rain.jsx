import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../../NavBar/NavBar'
import style from '../../Products/Product.module.css'
import banner from '../../../images/banner.jpg'
import image5 from '../../../images/rain2.png'

export default function Rain() {
  return (
    <Container fluid className={style.container}>
      <Row>
        <NavBar />
        <img src={banner} alt='decoration image'  />
      </Row>
      <Row >
        <Col>
        <div className={style.productImg}><img src={image5} alt='rain umbrellas' /></div>
        </Col>
        <Col className={style.product}>
          <h1 >Pufi RAIN</h1>
          <h4>Descripción de este producto.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet illo accusantium, impedit nesciunt ullam totam itaque porro. Dolor, excepturi aspernatur ducimus nulla quasi aut quos voluptates? Molestiae, dicta deleniti.</p>
        </Col>
      </Row>


    </Container>
  )
}
