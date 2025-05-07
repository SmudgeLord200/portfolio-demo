import { alpha, Box, Button, Card, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid"

// In MUI, 1 = 8px

// Common styles
export const StyledMainLayoutBox = styled(Box)(({ }) => ({
    marginTop: '64px', // Add top margin to avoid overlap with AppBar.  Assumes AppBar height is 64px
    marginBottom: '64px', // Add bottom margin to avoid overlap with Footer. Assumes Footer height is 64px
    minHeight: `calc(100vh - 128px)`, //Set minimum height.
}))

export const StyledBox = styled(Box)(({ }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: '32px',
    padding: '32px',
}))

export const StyledHeading = styled(Typography)(({ theme }) => ({
    fontSize: '2.2rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.8rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '3.5rem',
    },
    fontWeight: 'bold',
    color: 'text.primary',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
}));

export const StyledBody = styled(Typography)(({ theme }) => ({
    fontSize: '1.25rem',
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.125rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
    color: 'text.secondary',
    maxWidth: '80%',
    textAlign: 'center',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
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
}));

export const StyledFooter = styled(Box)(({ theme }) => ({
    position: 'fixed',
    bottom: 0,          // Stick it to the bottom
    left: 0,            // Extend to the left edge
    right: 0,           // Extend to the right edge
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    zIndex: 1000, // Ensure it's above other content, if necessary
}));

export const StyledGridItem = styled(Grid)(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

// Home
export const StyledHomeHeading = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '6rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '7rem',
    },
    fontWeight: 'bold',
    color: 'transparent',
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(to right, #6ee7b7, #3b82f6)',
}));

// Experience
export const StyledExperienceCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    backdropFilter: 'blur(10px)',
    ...(theme.palette.mode === 'dark'
        ? {
            // Specific glassmorphism style for dark mode, matching original intent
            backgroundColor: alpha(theme.palette.common.white, 0.05),
            border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
            '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.2), 0 10px 12px -6px rgba(0, 0, 0, 0.1)',
            },
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
    margin: '1rem'
}));

// Projects
export const StyledProjectCard = styled(Card)(({ }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.2), 0 10px 12px -6px rgba(0, 0, 0, 0.1)',
    },
}));

// Skills
export const StyledSkillsWrapper = styled(Card)(({ theme }) => ({
    height: '100%',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    backdropFilter: 'blur(10px)',
    ...(theme.palette.mode === 'dark'
        ? {
            // Specific glassmorphism style for dark mode, matching original intent
            backgroundColor: alpha(theme.palette.common.white, 0.05),
            border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
            '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.2), 0 10px 12px -6px rgba(0, 0, 0, 0.1)',
            },
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
    padding: theme.spacing(3),
    borderRadius: '2rem',
}));

export const StyledSKillsWrapperHeading = styled(Typography)(({ }) => ({
    fontSize: '1.5rem',
    fontWeight: 'semibold',
    color: 'text.primary',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
}));

export const StyledSkillsWrapperBox = styled(Box)(({ }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginTop: '24px',
}));

export const StyledSkillCard = styled(Box)(({ theme }) => ({
    backdropFilter: 'blur(10px)',
    borderRadius: '2rem',
    padding: theme.spacing(1.5, 3),
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'text.primary',
    ...(theme.palette.mode === 'dark'
        ? {
            // Specific glassmorphism style for dark mode, matching original intent
            backgroundColor: alpha(theme.palette.common.white, 0.05),
            border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
            '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.2), 0 10px 12px -6px rgba(0, 0, 0, 0.1)',
            },
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
}));