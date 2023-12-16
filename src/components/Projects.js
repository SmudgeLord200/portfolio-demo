import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Stack, Typography } from '@mui/material';
import project_1 from '../images/project_1.png';
import project_2 from '../images/project_2.png';
import styled from '@emotion/styled';

const MoreButton = styled(Button)(({ theme }) => ({
    padding: '1rem',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
        transition: 'background-color 0.3s, color 0.3s', 
    }
}));

const MyContainer = styled(Container)(({ theme }) => ({
    backgroundColor: 'grey',
    padding: '2.8rem'
}))

function Projects() {
    return (
        <MyContainer id="projects" maxWidth={false}>
            <Stack direction="column" alignItems='center' justifyContent="center" spacing={3}>
                <Typography variant='h4' textAlign={'center'} color="white">Projects</Typography>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    columns={{ xs: 2, sm: 12, md: 12, lg: 12, xl: 12 }}
                >
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Tribute Website</Typography>
                                <Typography variant="title1">I am currently developing a tribute webiste to an actor, using React and Strapi...</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Link
                            href="https://codepen.io/smudgelord200/full/PoVZWmd"
                            underline="none"
                            target="_blank"
                        >
                            <Card>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    height="100%"
                                    image={project_1}
                                />
                                <CardContent>
                                    <Typography variant="h6">Markdown Previewer</Typography>
                                    <Typography variant="title1">A freeCodeCamp project</Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Link
                            href="https://codepen.io/smudgelord200/full/rNPOaBp"
                            underline="none"
                            target="_blank"
                        >
                            <Card>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    height="100%"
                                    image={project_2}
                                />
                                <CardContent>
                                    <Typography variant="h6">Random Quote Machine</Typography>
                                    <Typography variant="title1">A freeCodeCamp project</Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
                <MoreButton variant='contained'>For More</MoreButton>
            </Stack>
        </MyContainer>
    );
}

export default Projects;
