/* IMPORTS */

// SCSS import:
import './FeelingGreat.scss';
import './FeelingGreatMediaQuery.scss';
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



/* COMPONENTS */
// FeelingGreat component:
const FeelingGreat = () => {

    return (
        <Container fluid className='FeelingGreat' id="Nosotros">
            <Row>
                <Col xl={7} lg={7} md={7} sm={6} className='FeelingGreatArea'>
                    <div className='FeelingGreatContent'>
                        <div className='FeelingGreatSmallDevices'>
                            <div className='FeelingGreatSmallDevicesLogo'></div>
                            <h2>Nosotros</h2>
                        </div>
                        <p>Dos amigos que desde hace muchos años, apasionados por el diseño y la ropa de calidad, decidieron crear una nueva marca con un fuerte carácter urbano para ofrecer ropa original y de calidad. Pero además con un formato innovador, para romper las reglas en el mercado local.
                        Nuestra marca de ropa que busca la exclusividad con cada uno de los productos teniendo lanzamientos por drops y en poca cantidad generando una alta demanda pero una baja oferta dándole valor único a cada prenda.
                        </p>
                    </div>
                </Col>
                <Col className='FeelingGreatCropArea'>
                    <Col md={4}className='FeelingGreatCrop'></Col>
                </Col>
            </Row>
        </Container>
    )
}

export default FeelingGreat;