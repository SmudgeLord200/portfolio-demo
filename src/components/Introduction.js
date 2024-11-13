import styled from "@emotion/styled";
import {
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import myCV from "../files/CV_Nicole_Ho.pdf";

const MyContainer = styled(Container)(({ theme }) => ({
  padding: "2.8rem",
  backgroundColor: "#000000",
  color: "white",
}));

const MoreButton = styled(Button)(({ theme }) => ({
  padding: "1rem",
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    transition: "background-color 0.3s, color 0.3s",
  },
  textTransform: "capitalize",
}));

function Introduction() {
  return (
    <MyContainer id="introduction" maxWidth={false}>
      <Stack
        direction="column"
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
        mb={4}
      >
        <Typography variant="h4">About Me</Typography>
        <Typography variant="body1">
          An enthusiastic web developer with international working experience in
          multi-disciplinary sectors across Hong Kong and the UK. With a strong
          track record in frontend development and valuable backend experience.
          Technical skill set encompasses React, Material UI, JavaScript,
          Python, HTML, CSS, etc. Eager to leverage my skills and expertise to
          contribute to a challenging and rewarding role.
        </Typography>
        {/* <Link
          href={myCV}
          target="_blank"
          underline="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <i
            className="fa fa-file-pdf"
            style={{ color: "#fff", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#0a66c2")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          />
        </Link> */}
        <MoreButton
          variant="contained"
          component="a"
          target="_blank"
          href={myCV}
        >
          My CV
        </MoreButton>
      </Stack>
    </MyContainer>
  );
}

export default Introduction;
