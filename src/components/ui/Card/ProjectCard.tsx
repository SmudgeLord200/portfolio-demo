import { ArrowRight } from "@mui/icons-material";
import { alpha, Box, Button, CardContent, CardHeader, CardMedia, Stack, Typography, useTheme } from "@mui/material";
import SkillCard from "./SkillCard";
import type { ProjectItem } from "../../../type";
import { StyledProjectCard, StyledSkillsWrapperBox } from "../StyledComponents";
import { motion } from "motion/react"
import { CARD_VARIANTS } from "../../../constants";

interface ProjectCardProps {
    project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const theme = useTheme();
    return (
        <motion.div variants={CARD_VARIANTS}>
            <StyledProjectCard>
                <CardMedia
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                        width: "100%",
                        height: "50vh",
                        objectFit: "cover",
                    }}
                />
                <CardHeader
                    title={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                {project.title}
                            </Typography>
                        </Box>
                    }
                    subheader={
                        <Typography variant="body2" color="text.secondary">
                            {project.description}
                        </Typography>
                    }
                />
                <CardContent>
                    <Stack direction="column" spacing={3} alignItems="flex-start">
                        <Box mb={4}>
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                                Technologies:
                            </Typography>
                            <StyledSkillsWrapperBox>
                                {project.technologies.map((tech) => (
                                    <SkillCard key={tech} skill={tech} />
                                ))}
                            </StyledSkillsWrapperBox>
                        </Box>

                        <Button
                            href={project.link}
                            rel="noopener noreferrer"
                            variant="outlined"
                            target="_blank"
                            component="a"
                            sx={{
                                padding: theme.spacing(1.5, 3),
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
                            }}
                        >
                            <ArrowRight />
                            View Project

                        </Button>
                    </Stack>
                </CardContent>
            </StyledProjectCard>
        </motion.div>
    )
}

export default ProjectCard