/* IMPORTS */

// SCSS import:
import './BurgerMenu.scss';
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';


const BurgerMenu = () => {

    return (
        <Container className='BurgerMenu'>
            <input type='checkbox' className='BurgerMenuCheckbox' id='toggle'></input>
            <label htmlFor='toggle' className='BurgerMenuButton'>
                <span className='BurgerMenuBars'>&nbsp;</span>
            </label>
            <nav className='BurgerMenuContent'>
                <ul className='BurgerMenuList'>
                    <li className='BurgerMenuLink'> <a>Nosotros</a> </li>
                    <li className='BurgerMenuLink'> <a>Galería</a> </li>
                    <li className='BurgerMenuLink'> <a>Contacto</a> </li>
                </ul>
            </nav>
        </Container>
    )
}

export default BurgerMenu;