import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from'../../images/image3.jpg'
import style from '../Landing/Landing.module.css'

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
 
      
    <Row className={style.box2} >
      <Carousel activeIndex={index} onSelect={handleSelect} style={{padding:'0',margin:'0'}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    </Row>
    
  );
}