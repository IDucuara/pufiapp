import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataImages from './DataImages'
import style from './Instagram.module.css'

export default function Instagram() {
    return (
        <Container>
            <Row >
                {DataImages.map((e) => {
                    return (
                        <Col key={e.id} sm={12} md={6} lg={4}>
                            <div className={style.size}><img src={e.imageSmall} /></div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
