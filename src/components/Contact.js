import React from "react";
import { Container, Grid, Stack, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";

const MyContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#000000",
  padding: "1rem",
  color: "white",
}));

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/nicole-h-6773b021a",
    className: "fab fa-linkedin-in",
  },
  {
    href: "https://github.com/SmudgeLord200",
    className: "fab fa-github",
  },
  {
    href: "https://codepen.io/smudgelord200",
    className: "fab fa-codepen",
  },
];

function Contact() {
  return (
    <MyContainer id="contact" maxWidth={false}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography variant="h4" textAlign={"center"}>
          Contact
        </Typography>
        <Grid
          container
          direction="row"
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
        >
          {socialLinks.map((social, index) => (
            <Grid item key={index} xs={2} sm={2} md={4} lg={4} xl={4}>
              <Link
                href={social.href}
                target="_blank"
                underline="none"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <i
                  className={social.className}
                  style={{ color: "#fff", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#0a66c2")}
                  onMouseLeave={(e) => (e.target.style.color = "#fff")}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </MyContainer>
  );
}

export default Contact;
