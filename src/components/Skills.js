import React from 'react';
import { Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiRedux } from "react-icons/si";

function Skills() {
    return (
        <Container id="skills" maxWidth={false} style={{ padding: '2.8rem' }}>
            <Stack direction="column" alignItems='center' justifyContent="center" spacing={2}>
                <Typography variant='h4' textAlign={'center'}>Skills</Typography>
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
                        <Card>
                            <CardContent>
                                <FaHtml5 style={{ width: '100%', height: '20vh', color: '#e34c26' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardContent>
                                <FaCss3Alt style={{ width: '100%', height: '20vh', color: 'red' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardContent>
                                <IoLogoJavascript style={{ width: '100%', height: '20vh', color: '#F0DB4F' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardContent>
                                <FaReact style={{ width: '100%', height: '20vh', color: '#09d3ac' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardContent>
                                <SiMui style={{ width: '100%', height: '20vh', color: '#66b2ff' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardContent>
                                <SiRedux style={{ width: '100%', height: '20vh', color: '#593d88' }} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" textAlign={'center'}>And many more...</Typography>
            </Stack>
        </Container >
    );
}

export default Skills;