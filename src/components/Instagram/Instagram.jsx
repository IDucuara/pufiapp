import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataImages from './DataImages'
import style from './Instagram.module.css'

export default function Instagram() {
    return (
        
            <div className={style.imageBox}>
                {DataImages.map((e) => {
                    return (
                        <div>
                            <div className={style.size}><img src={e.imageSmall} /></div>
                        </div>
                    )
                })}
            </div>
       
    )
}
