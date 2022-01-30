import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import web_developer from '../images/web_developer.jpg';

function About() {
    return (
        <Container fluid id="about" style={{ backgroundColor: "#e1e6eb" }}>
            <h2 style={{ wdith: "100%", textAlign: "center", paddingTop: "10px" }}>About Me</h2>
            <Row style={{ justifyContent: "center", alignItems: "center", height: "80%" }}>
                <Col sm={6} md={5} lg={{ span: 4, offset: 1 }} style={{ paddingTop: "15px" }}>
                    <img src={web_developer} alt="Web Developer" style={{ width: "100%", height: "100%", borderRadius: "5px", paddingBottom: "15px" }} />
                </Col>
                <Col sm={9} md={10} lg={{ span: 5, offset: 1 }} style={{ paddingTop: "15px" }}>
                    <h4>Hello I am Ho Tsz Lam Nicole</h4>
                    <h5 style={{ fontWeight: "300" }}>
                        I am a student studying Information Security at The Hong Kong Polytechnic Uuniversity.
                        I am currently working on my Final Year Project (FYP) to develop a Quantum Cryptography simulation game using HTML5, Bootstrap, CSS, and JavaScript. 
                        When I am not doing it, I will probably listen to music and watch YouTube videos. 
                    </h5>
                </Col>
            </Row>
        </Container>
    );
}

export default About;