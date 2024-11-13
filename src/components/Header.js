import React from 'react';
import { AppBar, Box, Button, ButtonGroup, Divider, Drawer, IconButton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: 'black'
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    '&:hover': {
        color: '#484041'
    }
}))

const StyledDrawerButton = styled(Button)(({ theme }) => ({
    color: '#000',
    '&:hover': {
        color: '#484041'
    },
}))

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

function Header(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const closeDrawerButton = () => {
        setMobileOpen(false)
    }

    const drawer = (
        <Box>
            <Stack direction="column" spacing={2} alignItems={'center'} justifyContent={'center'} mt={3}>
                <StyledDrawerButton variant='text' href="#introduction" onClick={() => closeDrawerButton()}>About</StyledDrawerButton>
                <StyledDrawerButton variant='text' href="#experience" onClick={() => closeDrawerButton()}>Experience</StyledDrawerButton>
                <StyledDrawerButton variant='text' href="#projects" onClick={() => closeDrawerButton()}>Projects</StyledDrawerButton>
                <StyledDrawerButton variant="text" href="#skills" onClick={() => closeDrawerButton()}>Skills</StyledDrawerButton>
                <StyledDrawerButton variant='text' href="#contact" onClick={() => closeDrawerButton()}>Contact</StyledDrawerButton>
            </Stack>
        </Box>
    )

    return (
        <>
            <AppBar>
                <StyledToolBar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        href="#"
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: '#434371'
                            }
                        }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Nicole
                        </Typography>
                    </IconButton>

                    {isMobile &&
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 }, }}
                            >
                                {drawer}
                            </Drawer>
                        </>}

                    {!isMobile &&
                        <ButtonGroup variant='text'>
                            <StyledButton variant='text' href="#introduction">About</StyledButton>
                            <StyledButton variant='text' href="#experience">Experience</StyledButton>
                            <StyledButton variant='text' href="#projects">Projects</StyledButton>
                            <StyledButton variant="text" href="#skills">Skills</StyledButton>
                            <StyledButton variant='text' href="#contact">Contact</StyledButton>
                        </ButtonGroup>
                    }
                </StyledToolBar>
            </AppBar>
            <Offset />
        </>
    );
}

export default Header;
