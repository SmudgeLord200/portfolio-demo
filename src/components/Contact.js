import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Container, Grid, Stack, Typography } from '@mui/material';

//https://www.linkedin.com/in/nicole-h-6773b021a
//https://github.com/SmudgeLord200

function Contact() {
    return (
        <Container id="contact" maxWidth={false} style={{ backgroundColor: "#343a40", padding: '2rem' }}>
            <Stack direction="column" alignItems='center' justifyContent="center">
                <Typography variant='h4'>Contact Me</Typography>
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
                >
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Typography textAlign={"center"}>LinkedIn</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Typography textAlign={"center"}>GitHub</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Typography textAlign={"center"}>CodePen</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
}

export default Contact;