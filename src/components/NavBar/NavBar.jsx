import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css';
import logoW from '../../images/pufilogoW.png'
import icon1 from '../../images/puff.png'
import icon2 from '../../images/rain.png'
import icon3 from '../../images/cart.png'
import icon4 from '../../images/nap.png'
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavBar() {
    return (
        <nav className={style.nav}>
            <Link to='/home'>
                <span className={style.linklanding}>
                    <img src={logoW} width="120px" alt=" landing" />
                </span>
            </Link>

            <div className={style.components}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className={style.icon}>
                        <img src={icon1} alt="pufi puff" />
                        <h3>PUFI PUFF</h3>
                    </div>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className={style.icon}>
                        <img src={icon2} alt="pufi rain" />
                        <h3>PUFI RAIN</h3>
                    </div>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className={style.icon}>
                        <img src={icon3} alt="pufi cart" />
                        <h3>PUFI CART</h3>
                    </div>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className={style.icon}>
                        <img src={icon4} alt="pufi nap" />
                        <h3>PUFI NAP</h3>
                    </div>
                </Link>

            </div>

            <div className={style.account}>

                <div className={style.section}>
                    <NavDropdown title="MI CUENTA" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Sign Up
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className={style.section}>
                <h6>MI COMPRA</h6>
                </div>
            </div>


        </nav>
    )
}