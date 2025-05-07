import { Box, Button, useTheme, alpha } from "@mui/material";
import ProjectCard from "../ui/Card/ProjectCard";
import { Code } from "@mui/icons-material";
import { PROJECTS_DATA } from "../../constants";
import { StyledBody, StyledHeading } from "../ui/StyledComponents";
import AnimateWrapper from "../ui/AnimateWrapper";

const Projects = () => {
  const theme = useTheme();
  return (
    <AnimateWrapper key="project">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <StyledHeading variant="h3">
          <Code />
          Projects
        </StyledHeading>
        <StyledBody variant="body2" mt={3}>
          Here are some of the personal projects I've worked on.  You can view the code for each project on GitHub.
        </StyledBody>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
            gap: 6,
            p: 3,
          }}
        >
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Box>

        <Button
          rel="noopener noreferrer"
          variant="outlined"
          component="a"
          target="_blank"
          href="https://github.com/SmudgeLord200?tab=repositories"
          size="large"
          sx={{
            padding: theme.spacing(1.5, 3),
            my: 3,
            borderColor: 'rgba(52, 211, 153, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...(theme.palette.mode === 'dark'
              ? {
                // Specific glassmorphism style for dark mode, matching original intent
                backgroundColor: 'rgba(52, 211, 153, 0.2)',
                border: 'rgba(52, 211, 153, 0.3)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  transform: 'scale(1.01)',
                  backgroundColor: 'rgba(52, 211, 153, 0.3)',
                  color: '#d1fae5',
                  boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.2), 0 10px 12px -6px rgba(0, 0, 0, 0.1)',
                },
                color: '#6ee7b7'
              }
              : {
                // Adapted style for light mode: subtle glassmorphism or more standard card
                backgroundColor: alpha(theme.palette.background.paper, 0.75),
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: theme.shadows[2],
                '&:hover': {
                  transform: 'scale(1.01)',
                  boxShadow: theme.shadows[4],
                },
              }),
            // borderRadius: 2,
          }}
        >
          For more
        </Button>
      </Box>
    </AnimateWrapper>
  );
}

export default Projects;
