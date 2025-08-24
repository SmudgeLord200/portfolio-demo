import { Box } from "@mui/material";
import ExperienceCard from "../ui/Card/ExperienceCard";
import { WorkOutline } from "@mui/icons-material";
import { EXPERIENCE_DATA } from "../../constants";
import { StyledBox, StyledTitle, StyledTitleBox } from "../ui/StyledComponents";
import AnimateWrapper from "../ui/AnimateWrapper";

const Experience = () => {
  return (
    <AnimateWrapper key="experience">
      <StyledBox>
        <StyledTitleBox>
          <WorkOutline />
          <StyledTitle variant="h2">Experience</StyledTitle>
        </StyledTitleBox>
        <Box>
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </Box>
      </StyledBox>
    </AnimateWrapper>
  );
}

export default Experience;
