import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../NavBar/NavBar'
import style from '../Landing/Landing.module.css'
import Slider from '../Slider/Slider'
import image1 from '../../images/rainbanner.jpg'
import image2 from '../../images/puffbanner.jpg'
import image3 from '../../images/cartbanner.jpg'
import image4 from '../../images/napbanner.jpg'
import image5 from '../../images/rain2.png'
import image6 from '../../images/puff2.png'
import image7 from '../../images/cart2.png'
import image8 from '../../images/nap2.png'
import { Link } from 'react-router-dom'
import Instagram from '../Instagram/Instagram'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'

export default function Landing() {

  return (
    <Container fluid className={style.container} >
      <Row >
        <NavBar />
        <Slider />
      </Row>
{/* //Products Section */}
      <Row>
        <Col className={style.image}>
          <img src={image1} alt='rain umbrellas' />
        </Col>
        <Col className={style.description}>
          <div className={style.productCart}>
            <img src={image5} alt='rain umbrellas' />
            <h3>Pufi RAIN</h3>
            <p>Descripción de este producto</p>
            <Link to='/rain'> VER MAS</Link>
          </div>
        </Col>
      </Row>

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

      <Row>
        <Col className={style.image}>
          <img src={image3} alt='cart bag ' />
        </Col>
        <Col className={style.description}>
          <div className={style.productCart}>
            <img src={image7} alt='cart bag ' />
            <h3>Pufi CART</h3>
            <p>Descripción de este producto</p>
            <Link to='/cart'> VER MAS</Link>
          </div>
        </Col>
      </Row>

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

{/* //Instagram Section */}
      <Row>
        <h6> INSTAGRAM</h6>
        <h2>#ESPUFI</h2>
        <Instagram />
      </Row>

{/* //Newsletter Section */}
     
        <Row>
          <h6> NEWSLETTER</h6>
          <Form/>
        </Row>
{/* //Footer Section */}
<Row>
  <Footer/>
</Row>







    </Container>
  )
}












