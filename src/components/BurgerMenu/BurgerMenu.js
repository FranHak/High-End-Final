/* IMPORTS */

// SCSS import:
import './BurgerMenu.scss';
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from "react-scroll"

const BurgerMenu = () => {

    return (
        <Container >
            <input type='checkbox' className='BurgerMenuCheckbox' id='toggle'></input>
            <label htmlFor='toggle' className='BurgerMenuButton'>
                <span className='BurgerMenuBars'>&nbsp;</span>
            </label>
            <nav className='BurgerMenuContent'>
                <ul className='BurgerMenuList'>

                    <li > 
                        <Link className='BurgerMenuLink' to="Nosotros" spy={true} smooth={true} offset={-50} duration={500}>Nosotros</Link> 
                    </li>
                    <li className='BurgerMenuLink'> 
                        <Link className='BurgerMenuLink' to="Galer" spy={true} smooth={true} offset={0} duration={500}>Galeria</Link> 
                    </li>
                    <li > 
                        <Link className='BurgerMenuLink' to="Contacto" spy={true} smooth={true} offset={0} duration={500}>Contacto</Link> 
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

export default BurgerMenu;