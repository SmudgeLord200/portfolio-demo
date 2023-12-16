import React from 'react';
import { Container, Grid, Stack, Typography, Link } from '@mui/material';



function Contact() {
    return (
        <Container id="contact" maxWidth={false} style={{ backgroundColor: "#343a40", padding: '1rem', color: 'white' }}>
            <Stack direction="column" alignItems='center' justifyContent="center" spacing={1}>
                <Typography variant='h4' textAlign={'center'}>Contact</Typography>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
                >
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Link
                            href="https://www.linkedin.com/in/nicole-h-6773b021a"
                            target="_blank"
                            underline="none"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <i className="fab fa-linkedin-in" style={{ color: 'red' }}></i>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Link
                            href="https://github.com/SmudgeLord200"
                            target="_blank"
                            underline="none"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <i className="fab fa-github"></i>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Link
                            href="https://codepen.io/smudgelord200"
                            target="_blank"
                            underline="none"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <i className="fab fa-codepen"></i>
                        </Link>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
}

export default Contact;