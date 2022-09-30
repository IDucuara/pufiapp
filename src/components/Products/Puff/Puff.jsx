import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../../NavBar/NavBar'
import style from '../../Products/Product.module.css'
import banner from '../../../images/banner.jpg'
import image6 from '../../../images/puff2.png'

export default function Puff() {
  return (
    <Container fluid className={style.container}>
      <Row>
        <NavBar />
        <img src={banner} alt='decoration image'  />
      </Row>
      <Row >
        <Col>
        <div className={style.productImg}><img src={image6} alt='puff outdoor' /></div>
        </Col>
        <Col className={style.product}>
          <h1 >Pufi PUFF</h1>
          <h4>Descripción de este producto.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero dicta vitae omnis reiciendis et quod veritatis architecto. Facilis, tempore odio Rem aperiam blanditiis cupiditate perferendis provident temporibus. Suscipit, odit</p>
        </Col>
      </Row>


    </Container>
  )
}
