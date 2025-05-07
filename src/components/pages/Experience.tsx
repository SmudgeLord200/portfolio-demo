import { Box } from "@mui/material";
import ExperienceCard from "../ui/Card/ExperienceCard";
import { WorkOutline } from "@mui/icons-material";
import { EXPERIENCE_DATA } from "../../constants";
import { StyledBox, StyledHeading } from "../ui/StyledComponents";
import AnimateWrapper from "../ui/AnimateWrapper";

const Experience = () => {
  return (
    <AnimateWrapper key="experience">
      <StyledBox>
        <StyledHeading variant="h3">
          <WorkOutline />
          Experience
        </StyledHeading>
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
