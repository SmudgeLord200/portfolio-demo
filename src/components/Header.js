import React from 'react';
// import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { AppBar, Box, Button, ButtonGroup, ClickAwayListener, Divider, Drawer, IconButton, ListItemText, MenuItem, MenuList, Popper, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Icon from '@mui/material/Icon';

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

function Header(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const closeDrawerButton = () => {
        setMobileOpen(false)
    }

    const drawer = (
        <Box>ABC</Box>
    )

    return (
        <>
            <AppBar>
                <StyledToolBar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        // onClick={() => onNavigate('/')}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
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
                                sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 }, }}
                            >
                                {drawer}
                            </Drawer>
                        </>}

                    {!isMobile &&
                        <ButtonGroup variant='text'>
                            <Button variant='contained' href="#about">About</Button>
                            <Button variant='contained' href="#projects">Project</Button>
                            <Button variant='contained' href="#contact">Contact</Button>
                        </ButtonGroup>
                    }
                </StyledToolBar>
            </AppBar>
            <Offset />
        </>
    );
}

export default Header;
