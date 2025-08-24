import { IconButton } from "@mui/material";
import { GitHub, LinkedIn, LocalPostOfficeOutlined, PermContactCalendarOutlined } from "@mui/icons-material";
import Grid from '@mui/material/Grid';
import { StyledBody, StyledBox, StyledGridItem, StyledTitle, StyledTitleBox } from "../ui/StyledComponents";
import AnimateWrapper from "../ui/AnimateWrapper";

const Contact = () => {
  return (
    <AnimateWrapper key="contact">
      <StyledBox>
        <StyledTitleBox>
          <PermContactCalendarOutlined />
          <StyledTitle variant="h2">Contact Me</StyledTitle>
        </StyledTitleBox>
        <StyledBody variant="body1">
          Feel free to reach out to me via email or connect with me on
          social media. I'm always open to new opportunities and
          collaborations.
        </StyledBody>

        <Grid container spacing={2}>
          {/* GitHub */}
          <StyledGridItem size={{ xs: 12, md: 4, lg: 4 }}>
            <IconButton href="https://github.com/SmudgeLord200" target="_blank">
              <GitHub />
            </IconButton>
          </StyledGridItem>

          {/* LinkedIn */}
          <StyledGridItem size={{ xs: 12, md: 4, lg: 4 }}>
            <IconButton href="https://www.linkedin.com/in/nicole-h-6773b021a" target="_blank">
              <LinkedIn />
            </IconButton>
          </StyledGridItem>

          {/* Email */}
          <StyledGridItem size={{ xs: 12, md: 4, lg: 4 }}>
            <IconButton href="mailto:nicoleho1314@gmail.com" target="_blank">
              <LocalPostOfficeOutlined />
            </IconButton>
          </StyledGridItem>
        </Grid>
      </StyledBox>
    </AnimateWrapper>
  );
}

export default Contact;
