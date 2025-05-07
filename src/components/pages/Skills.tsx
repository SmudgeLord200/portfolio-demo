import Grid from "@mui/material/Grid";
import SkillCard from "../ui/Card/SkillCard";
import { MemoryOutlined, OfflineBoltOutlined } from "@mui/icons-material";
import { SKILLS_DATA } from "../../constants";
import { StyledBody, StyledBox, StyledHeading, StyledSkillsWrapper, StyledSkillsWrapperBox, StyledSKillsWrapperHeading } from "../ui/StyledComponents";
import AnimateWrapper from "../ui/AnimateWrapper";

const Skills = () => {
  return (
    <AnimateWrapper key="skill">
      <StyledBox>
        <StyledHeading variant="h3">
          <OfflineBoltOutlined />
          Skills
        </StyledHeading>
        <StyledBody variant="body2">
          I'm always eager to learn and expand my skillset, but here are
          some of my key areas of expertise.
        </StyledBody>

        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {SKILLS_DATA.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.category}>
              <StyledSkillsWrapper key={category.category}>
                <StyledSKillsWrapperHeading variant="h3">
                  <MemoryOutlined />
                  {category.category}
                </StyledSKillsWrapperHeading>
                <StyledSkillsWrapperBox>
                  {category.items.map((skill) => (
                    <SkillCard key={skill} skill={skill} />
                  ))}
                </StyledSkillsWrapperBox>
              </StyledSkillsWrapper>
            </Grid>
          ))}
        </Grid>
      </StyledBox>
    </AnimateWrapper>
  );
}

export default Skills;
