import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../NavBar/NavBar'
import style from '../Landing/Landing.module.css'
import Slider from '../Slider/Slider'



export default function Illustration() {

  

  return (
    <Container fluid className={style.container} sm={12} md={6} lg={4}>
      <Row >
      <NavBar/>
        <Slider/>
      </Row>
     





     
    </Container>
  )
}












