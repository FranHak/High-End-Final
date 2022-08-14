/* IMPORTS */

// SCSS import:
import './BurgerMenu.scss';
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from "react-scroll"
import CloseButton from 'react-bootstrap/CloseButton'


const BurgerMenu = () => {

    return (
        <Container >
            <input type='checkbox' className='BurgerMenuCheckbox' id='toggle'></input>
            <label htmlFor='toggle' className='BurgerMenuButton'>
                <span className='BurgerMenuBars'>&nbsp;</span>
            </label>
            <nav className='BurgerMenuContent'>
                <ul className='BurgerMenuList'>
                    
                    <li className='BurgerMenuLink'> 
                        <Link  to="Nosotros" spy={true} smooth={true} offset={-50} duration={500}>Nosotros</Link> 
                    </li>

                    <li className='BurgerMenuLink'> 
                        <Link  to="Galer"    spy={true} smooth={true} offset={0} duration={500}  >Galeria</Link> 
                    </li>

                    <li className='BurgerMenuLink' > 
                        <Link  to="Contacto" spy={true} smooth={true} offset={0} duration={500}  >Contacto</Link> 
                    </li>

                    {/* <li className='BurgerMenuLink'> 
                        <a>Nosotros</a> 
                    </li>

                    <li className='BurgerMenuLink'> 
                        <a>Galeria</a> 
                    </li>
                    
                    <li className='BurgerMenuLink' > 
                        <a>Contacto</a> 
                    </li> */}

                </ul>
            </nav>
        </Container>
    )
}

export default BurgerMenu;