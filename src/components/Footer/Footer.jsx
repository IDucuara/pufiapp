import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='content'>
      <div className='logo'>LOGO</div>
      <div className='products'>
        <Link to='/rain'>PUFI RAIN</Link>
        <Link to='/puff'>PUFI PUFF</Link>
        <Link to='/cart'>PUFI CART</Link>
        <Link to='/nap'>PUFI NAP</Link>
      </div>
      <div>
        <h5></h5>
      </div>
    </div>
  )
}
