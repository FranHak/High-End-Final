/* IMPORTS */

// SCSS import:
import './Footer.scss'
// React import:
import React from 'react';
import { BsInstagram } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



/* COMPONENTS */
// Footer component:
const Footer = () => {

    return (
        <Container fluid className='Footer' id="Contacto">
            <Row>
                <Col className='FooterInstagram'>
                    <h6 name="Contacto">¡Seguinos en Instagram! <br /> Y enterate de todo</h6>
                    <a target="_blank" href='https://www.instagram.com/highend.sw/'><BsInstagram/> ¡SEGUINOS!</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;