import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import WordPress from '../images/WordPress.png';
import web_development from '../images/web_development.png';
import cybersecurity from '../images/cybersec.png';
import javascript from '../images/javascript.png';

function Skills() {
    return (
        <Container fluid id="skills">
            <h2 style={{wdith: "100%", textAlign: "center", paddingTop: "10px"}}>Skills</h2>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%", marginBottom: "15px"}}>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ margin: "20px 0px",  display: "inline" }}>
                        <img src={WordPress} alt="WordPress" style={{ height: "50px", witdth: "50px" }} />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>WordPress</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ margin: "20px 0px", display: "inline"  }}>
                        <img src={web_development} alt="Web Development" style={{ height: "50px", witdth: "50px" }} />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Web Development</h4>
                    </div>
                </Col>
            </Row>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%", marginBottom: "20px"}}>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ margin: "20px 0px", display: "inline"  }}>
                        <img src={cybersecurity} alt="Cybersecurity" style={{ height: "50px", witdth: "50px" }} />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Cybersecurity</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ margin: "20px 0px", display: "inline"  }}>
                        <img src={javascript} alt="JavaScript" style={{ height: "50px", witdth: "50px" }} />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Programming</h4>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

export default Skills;