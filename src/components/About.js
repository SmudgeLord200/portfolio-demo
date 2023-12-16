import React from 'react';
import web_developer from '../images/web_developer.jpg';
import { Container, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';

const BackgroundedContainer = styled(Container)(({ theme }) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${web_developer})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}))

function About() {
    return (
        <BackgroundedContainer id="about" maxWidth={false}>
            <Stack direction="column" alignItems="center" justifyContent="center">
                <Typography variant="h3" color="white" textAlign={"center"}>Hello I am Nicole</Typography>
                <Typography fontStyle={'italic'} variant="h6" color="white">a web developer</Typography>
            </Stack>
        </BackgroundedContainer>
    );
}

export default About;
