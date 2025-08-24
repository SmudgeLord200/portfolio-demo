import { GitHub, InfoOutline, InsertDriveFileOutlined, LinkedIn } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { StyledBody, StyledBox, StyledGridItem, StyledTitle, StyledTitleBox } from "../ui/StyledComponents";
import Grid from '@mui/material/Grid';
import CV from '../../assets/CV_Nicole_Ho.pdf';
import AnimateWrapper from "../ui/AnimateWrapper";

const About = () => {
  return (
    <AnimateWrapper key="about">
      <StyledBox>
        <StyledTitleBox>
          <InfoOutline />
          <StyledTitle variant="h2">About Me</StyledTitle>
        </StyledTitleBox>
        <StyledBody variant="body2">
          An enthusiastic web developer with international working experience in multi-disciplinary sectors across Hong Kong and the UK.
          With a strong track record in frontend development and valuable backend experience.
          Technical skill set encompasses React, TypeScript, JavaScript, MUI, Chakra UI, HTML/CSS, Python, etc.
          Eager to leverage my skills and expertise to contribute to a challenging and rewarding role.
        </StyledBody>

        <Grid container spacing={2}>
          <StyledGridItem size={{ xs: 12, md: 4, lg: 4 }}>
            <IconButton
              href="https://github.com/SmudgeLord200"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'white' }
              }}
            >
              <GitHub />
            </IconButton>
          </StyledGridItem>

          <StyledGridItem size={{ xs: 12, md: 4, lg: 4 }}>
            <IconButton
              href="https://www.linkedin.com/in/nicole-h-6773b021a"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'white' }
              }}
            >
              <LinkedIn />
            </IconButton>
          </StyledGridItem>

          <StyledGridItem size={{ xs: 12, md: 4, lg: 4 }}>
            <Tooltip title="My CV" placement="bottom" arrow>
              <IconButton
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'white' }
                }}
              >
                <InsertDriveFileOutlined />
              </IconButton>
            </Tooltip>
          </StyledGridItem>
        </Grid>
      </StyledBox>
    </AnimateWrapper>
  );
}

export default About;
