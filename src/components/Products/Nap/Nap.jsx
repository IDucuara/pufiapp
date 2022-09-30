import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../../NavBar/NavBar'
import style from '../../Products/Product.module.css'
import banner from '../../../images/banner.jpg'
import image8 from '../../../images/nap2.png'

export default function Nap() {
  return (
    <Container fluid className={style.container}>
      <Row>
        <NavBar />
        <img src={banner} alt='decoration image'  />
      </Row>
      <Row >
        <Col>
        <div className={style.productImg}> <img src={image8} alt='nap girl' /></div>
        </Col>
        <Col className={style.product}>
          <h1 >Pufi NAP</h1>
          <h4>Descripción de este producto.</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aspernatur unde autem asperiores tempora modi perspiciatis, eius magni placeat dicta. Harum perspiciatis inventore eos odio recusandae reprehenderit, dolores mollitia ad.</p>
        </Col>
      </Row>


    </Container>
  )
}
