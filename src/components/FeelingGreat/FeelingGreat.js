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
            <Row >
                <Col name="Nosotros" xl={7} lg={7} md={7} sm={6} className='FeelingGreatArea'>
                    <div className='FeelingGreatContent'>
                        <div className='FeelingGreatSmallDevices'>
                            <div className='FeelingGreatSmallDevicesLogo'></div>
                            <h2 >Nosotros</h2>
                        </div>
                        <p> 
                            Somos dos amigos aficionados a la ropa, con mucha ambición e ideas que pueden mover el mundo. Buscamos fidelizar a nuestros futuros clientes con prendas totalmente exclusivas e innovadoras.
                            Nuestros productos son ideados por nosotros en base a las nuevas tendencias, con el objetivo de llegar a las personas de una manera distinta. Desarrollamos esta marca con el propósito de que los clientes se sientan identificados y pasen a ser parte de esta familia.
                            Utilizamos diferentes métodos para desarrollar cada drop con profesionalidad buscando la excelencia, calidad y una experiencia única a cada persona que forme parte de High-End.
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