import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import avatar from './avataaars.png';
import logo from './loulogo.png'
import NavbarTop from '../../components/NavbarTop';


const HeaderTop = () => {
    return (
        <>
            <Container fluid >
                <Row className="bg-info" id="home-wrap">
                    <Col md={6} className="d-flex align-items-center justify-content-center flex-column home-left bg-info ">
                        <Image fluid id="home-logo" src={logo} />

                    </Col>
                    <Col md={6} className="home-right bg-primary">
                        <Row className="d-flex h-100 pt-5 ">

                            <Col className="d-flex flex-column align-items-center justify-content-between">
                                <NavbarTop />
                                <div>
                                    <Image fluid id="home-avatar" src={avatar} />
                                    <h1 className="masthead-heading text-center mb-0 border border-info">Welcome</h1>
                                </div>
                                <p className="pre-wrap masthead-subheading font-weight-light mb-0">HTML_CSS_JS_BOOTSTRAP_REACT...</p>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeaderTop
