import React from "react";
import web_developer from "../images/web_developer.jpg";
import { Container, Link, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BackgroundedContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${web_developer})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

function About() {
  return (
    <BackgroundedContainer id="about" maxWidth={false}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Typography variant="h3" color="white" textAlign={"center"}>
          Nicole Ho
        </Typography>
        <Typography fontStyle={"italic"} variant="h5" color="white">
          a web developer
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Link
            href="https://www.linkedin.com/in/nicole-h-6773b021a"
            target="_blank"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <i
              className="fab fa-linkedin-in"
              style={{ color: "#fff", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#0a66c2")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            />
          </Link>

          <Link
            href="https://github.com/SmudgeLord200"
            target="_blank"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <i
              className="fab fa-github"
              style={{ color: "#fff", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#24292e")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            />
          </Link>

          <Link
            href="https://codepen.io/smudgelord200"
            target="_blank"
            underline="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <i
              className="fab fa-codepen"
              style={{ color: "#fff", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#000")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            />
          </Link>
        </Stack>
      </Stack>
    </BackgroundedContainer>
  );
}

export default About;
