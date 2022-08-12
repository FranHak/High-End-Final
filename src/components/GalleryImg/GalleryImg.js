/* IMPORTS */

// SCSS import:
import './GalleryImg.scss';
import './GalleryImgMediaQuery.scss';
// Components import:
import Slider from '../Slider/Slider';
// React import:
import React from 'react';
import { MdDesignServices, MdPrecisionManufacturing } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import { HiRefresh } from "react-icons/hi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


/* COMPONENTS */
// GalleryImg component:
const GalleryImg = () => {

    return (
        <Container fluid className='GalleryImg'>
            <Row className='ProcessRow'>
                <Col  sm={6} lg={3}>
                    <div> <MdDesignServices className='Icon' size={90}/> </div>
                    <h3>Diseñamos</h3>
                    <p>Nosotros dedicamos gran parte nuestro de tiempo a la creación y diseño de los drops , buscando siempre dar un enfoque único y diferente.</p>
                </Col>
                <Col  sm={6} lg={3}>
                    <div> <MdPrecisionManufacturing className='Icon' size={90}/> </div>
                    <h3>Producimos</h3>
                    <p>Contamos con los mejores talleres del país para producir y dar vida a nuestras ideas, con el foco siempre en la calidad de nuestras prendas.</p>
                </Col>
                <Col  sm={6} lg={3}>
                    <div> <IoMdRocket className='Icon' size={90}/> </div>
                    <h3>Lanzamos</h3>
                    <p>Planeamos una estrategia y un plan de acción para cada drop teniendo siempre en la mira a nuestros clientes y como brindarles la mejor experiencia.</p>
                </Col>
                <Col  sm={6} lg={3}>
                    <div> <HiRefresh className='Icon' size={90}/> </div>
                    <h3>Refresh</h3>
                    <p>Una vez finalizado el drop eliminamos de nuestro catalogo las prendas anteriores “SOLD OUT”  y repetimos todo el proceso teniendo en cuenta el feedback de todas las personas que tengan una prenda HIGH-END</p>
                </Col>
            </Row>
        </Container>
    )
}

export default GalleryImg;