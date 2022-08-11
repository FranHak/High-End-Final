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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
                <Col  sm={6} lg={3}>
                    <div> <MdPrecisionManufacturing className='Icon' size={90}/> </div>
                    <h3>Producimos</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
                <Col  sm={6} lg={3}>
                    <div> <IoMdRocket className='Icon' size={90}/> </div>
                    <h3>Lanzamos</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
                <Col  sm={6} lg={3}>
                    <div> <HiRefresh className='Icon' size={90}/> </div>
                    <h3>Refresh</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, officiis.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default GalleryImg;