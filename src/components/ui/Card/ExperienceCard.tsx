import {
    CardHeader,
    CardContent,
    Typography,
    Box,
} from "@mui/material";
import SkillCard from "./SkillCard";
import type { ExperienceItem } from "../../../type";
import { StyledExperienceCard } from "../StyledComponents";
import { CARD_VARIANTS } from "../../../constants";
import { motion } from "motion/react";

interface ExperienceCardProps {
    experience: ExperienceItem;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <motion.div variants={CARD_VARIANTS}>
            <StyledExperienceCard>
                <CardHeader
                    title={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                {experience.title}
                            </Typography>
                        </Box>
                    }
                    subheader={
                        <Typography variant="body2" color="text.secondary">
                            {`${experience.company} | ${experience.dates}`}
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {experience.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        {experience.technologies.map((tech) => (
                            <SkillCard key={tech} skill={tech} />
                        ))}
                    </Box>
                </CardContent>
            </StyledExperienceCard>
        </motion.div>
    )
}

export default ExperienceCard;