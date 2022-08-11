/* IMPORTS */

// SCSS import:
import './HeroImg.scss'
import './HeroImgMediaQuery.scss'
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



/* COMPONENTS */
// HeroImg component:
const HeroImg = () => {

    return (
        <Container fluid className='HeroImg'>
            <Row>
                <Col xl={7} lg={7} md={12} sm={12} className='FeelingGreatArea'>
                    <div className='FeelingGreatContent'>
                        <h1>FEELING GREAT.</h1>
                        <h3>Sé tan exclusivo como nuestros Drops.</h3>
                    </div>
                </Col>
                <Col xl={5} lg={5} md={12} sm={12}className='HeroImgCropArea'>
                    <Col xl={4} lg={7} md={4} sm={12}className='HeroImgCrop'></Col>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroImg;