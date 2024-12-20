import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import project_1 from "../images/project_1.png";
import project_2 from "../images/project_2.png";
import project_3 from "../images/project_3.png";
import styled from "@emotion/styled";

const MoreButton = styled(Button)(({ theme }) => ({
  padding: "1rem",
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    transition: "background-color 0.3s, color 0.3s",
  },
}));

const MyContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#000000",
  padding: "2.8rem",
}));

const projects = [
  {
    href: "https://smudgelord200.github.io/sponsorship-web-scraper-2/",
    image: project_3,
    title: "Web Scraper",
    subtitle:
      "A Hackathon group project scrapping Hackathon sponsor data from DevPost using React, Material UI, Python",
  },
  {
    href: "https://smudgelord200.github.io/http-get-weather-app",
    image: project_1,
    title: "HTTP GET Weather App",
    subtitle: "A weather app using React, TypeScript, Material UI, OpenWeather API, Vite",
  },
  {
    href: "https://codepen.io/smudgelord200/full/rNPOaBp",
    image: project_2,
    title: "Random Quote Machine",
    subtitle: "A freeCodeCamp project using React, JavaScript, HTML, CSS",
  },
];

function Projects() {
  return (
    <MyContainer id="projects" maxWidth={false}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <Typography variant="h4" textAlign={"center"} color="white">
          Projects
        </Typography>
        <Grid
          container
          direction="row"
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          columns={{ xs: 2, sm: 12, md: 12, lg: 12, xl: 12 }}
        >
          {projects.map((p, index) => (
            <Grid item key={index} xs={2} sm={4} md={4} lg={4} xl={4}>
              <Link
                href={p.href}
                underline="none"
                target="_blank"
              >
                <Card>
                  <CardMedia
                    component="img"
                    image={p.image}
                    sx={{
                      width: "100%",
                      height: "50vh",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6">{p.title}</Typography>
                    <Typography variant="title1">{p.subtitle}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <MoreButton
          variant="contained"
          component="a"
          target="_blank"
          href="https://codepen.io/smudgelord200"
        >
          For More
        </MoreButton>
      </Stack>
    </MyContainer>
  );
}

export default Projects;
