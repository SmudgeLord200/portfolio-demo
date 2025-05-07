import { Typography } from "@mui/material";
import { StyledBody, StyledBox } from "../ui/StyledComponents";
import AnimateWrapper from "../ui/AnimateWrapper";

const Home = () => {
  return (
    <AnimateWrapper key="home">
      <StyledBox>
        <Typography variant="h1"
          sx={{
            fontSize: { xs: '4rem', md: '6rem', lg: '7rem' },
            fontWeight: 'bold',
            color: 'transparent',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, #6ee7b7, #3b82f6)',
          }}
        >
          Hi, I'm Nicole
        </Typography>
        <StyledBody variant="body2">
          Hello! I'm Nicole, a software engineer with a passion for
          building things that live on the web. I enjoy the challenge of
          turning complex problems into elegant and efficient solutions.
          My goal is to create software that is not only functional but
          also provides a delightful user experience.
        </StyledBody>
      </StyledBox>
    </AnimateWrapper>
  );
}

export default Home;
