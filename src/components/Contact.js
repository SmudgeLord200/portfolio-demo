import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
        <Container fluid id="contact" style={{ backgroundColor: "#343a40", padding: "20px" }}>
            <h2 style={{ wdith: "100%", textAlign: "center", paddingTop: "5px", color: "#dee2e6" }}>Contact Me</h2>
            <Row style={{ justifyContent: "center", alignItems: "center", height: "100%", marginTop: "25px" }}>
                <Col sm={6} md={3} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SocialIcon url='https://www.linkedin.com/in/nicole-h-6773b021a/' target="_blank" />
                </Col>
                <Col sm={6} md={3} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SocialIcon url='https://github.com/SmudgeLord200' target="_blank" />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;