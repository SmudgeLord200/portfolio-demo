import React from 'react';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';

function Project() {
    return (
        <Container fluid id="projects" style={{ backgroundColor: "#717a82", padding: "20px" }}>
            <h2 style={{ wdith: "100%", textAlign: "center", paddingTop: "10px", color: "white" }}>Project</h2>
            <Row style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Quatum Cryptography Simulation Game</Card.Title>
                            <Card.Text>
                                The game is written using HTML5, Bootstrap, CSS, and JavaScript.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title>GrandYuen</Card.Title>
                            <Card.Text>
                                WordPress project for GrandYuen company, a construction company. 
                            </Card.Text>
                            <Button href="https://grandyuen.site/" target="_blank" variant="success">Go to GrandYuen</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Panda Technology</Card.Title>
                            <Card.Text>
                                WordPress project for Panda Technology, an IT company. 
                            </Card.Text>
                            <Button href="https://panda-technology.shop/" target="_blank" variant="warning">Go to Panda Technology</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;
