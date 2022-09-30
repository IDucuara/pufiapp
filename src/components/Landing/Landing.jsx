import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../NavBar/NavBar'
import style from '../Landing/Landing.module.css'
import Slider from '../Slider/Slider'


import { Link } from 'react-router-dom'
import Instagram from '../Instagram/Instagram'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import PufiRain from '../banners/PufiRain/PufiRain'
import PufiPuff from '../banners/PufiPuff/PufiPuff'
import PufiCart from '../banners/PufiCart/PufiCart'
import PufiNap from '../banners/PufiNap/PufiNap'

export default function Landing() {

  return (
    <div  className={style.container} >
      <Row >
        <NavBar />
        <Slider />
      </Row>

      {/* Products Section */}
      <PufiRain />
      <PufiPuff />
      <PufiCart />
      <PufiNap />

      {/* Instagram Section */}
      <></>
      <Row>
        <h6> INSTAGRAM</h6>
        <h1>#ESPUFI</h1>
        <Instagram />
      </Row>

      {/* Newsletter Section */}

      <Row className={style.box}>
        <h6> NEWSLETTER</h6>
        <h1>SUSCRIBITE</h1>
        <h5>Y enterate de todas las novedades</h5>
        <Form />
      </Row>
      {/* //Footer Section */}
      <Row>
        <Footer />
      </Row>







    </div>
  )
}












