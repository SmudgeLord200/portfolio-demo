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
        <Stack
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          // sx={{ width: "80%" }}
        >
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              underline="none"
            >
              <i
                className={social.className}
                style={{ color: "#fff", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#0a66c2")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              />
            </Link>
          ))}
        </Stack>
      </Stack>
    </MyContainer>
  );
}

export default Contact;
