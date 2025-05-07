import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, AppBar, IconButton, Stack, Toolbar, useTheme, useMediaQuery, ListItemIcon } from "@mui/material";
import { useState } from "react";
import { DRAWER_WIDTH } from "../../../constants";
import { useThemeContext } from "../../../context/ThemeProvider";
import { Link as RouterLink, useLocation } from "react-router"
import { Brightness4Outlined, Brightness7Outlined, Code, InfoOutline, MenuOutlined, OfflineBoltOutlined, PermContactCalendarOutlined, WorkOutline } from "@mui/icons-material";;

interface Props {
    window?: () => Window;
}

const getIcon = (text: string) => {
    switch (text) {
        case 'About':
            return <InfoOutline sx={{ mr: 0.5 }} />;
        case 'Experience':
            return <WorkOutline sx={{ mr: 0.5 }} />;
        case 'Projects':
            return <Code />;
        case 'Skills':
            return <OfflineBoltOutlined sx={{ mr: 0.5 }} />;
        case 'Contact':
            return <PermContactCalendarOutlined sx={{ mr: 0.5 }} />;
        default:
            return null;
    }
};

const HeaderLayout = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const { mode, toggleColorMode } = useThemeContext();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        color: 'transparent',
                        fontWeight: 'bold',
                        backgroundClip: 'text',
                        backgroundImage: 'linear-gradient(to right, #6ee7b7, #3b82f6)',
                        p: 2,
                    }}>
                    NH
                </Typography>
            </RouterLink>
            <Divider sx={{ backgroundColor: theme.palette.divider }} />
            <List>
                {(['About', 'Experience', 'Projects', 'Skills', 'Contact'] as const).map((item) => {
                    const isActive = location.pathname === `/${item.toLowerCase()}`;
                    return (
                        <ListItem key={item} disablePadding>
                            <RouterLink to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', width: '100%' }}>
                                <ListItemButton
                                    sx={{
                                        textAlign: 'center',
                                        padding: theme.spacing(2),
                                        backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
                                        color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                                        '&:hover': {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%'
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 'auto',
                                        marginRight: theme.spacing(1),
                                        color: isActive ? theme.palette.primary.main : theme.palette.text.secondary
                                    }}>
                                        {getIcon(item)}
                                    </ListItemIcon>
                                    <ListItemText primary={item} sx={{ textAlign: 'center' }} />
                                </ListItemButton>
                            </RouterLink>
                        </ListItem>
                    )
                })}
                <Divider sx={{ backgroundColor: theme.palette.divider, marginTop: theme.spacing(2) }} />
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={toggleColorMode}
                        sx={{
                            textAlign: 'center',
                            padding: theme.spacing(2),
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 'auto', marginRight: theme.spacing(1) }}>
                            {mode === 'dark' ? <Brightness7Outlined /> : <Brightness4Outlined />}
                        </ListItemIcon>
                        <ListItemText primary={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    boxShadow: 'none',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', paddingX: { xs: 4, md: 6, lg: 8 }, paddingY: { xs: 1, md: 1.5, lg: 2 } }}>
                    <RouterLink to="/" style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                color: 'transparent',
                                fontWeight: 'bold',
                                backgroundClip: 'text',
                                backgroundImage: 'linear-gradient(to right, #6ee7b7, #3b82f6)'
                            }}
                        >
                            NH
                        </Typography>
                    </RouterLink>

                    {isMobile &&
                        <>
                            <IconButton
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuOutlined />
                            </IconButton>
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': {
                                        boxSizing: 'border-box',
                                        width: DRAWER_WIDTH,
                                        backgroundColor: theme.palette.background.paper, // Apply theme background
                                        color: theme.palette.text.primary, // Apply theme color
                                    },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </>
                    }

                    {!isMobile &&
                        <Stack direction="row" spacing={{ xs: 2, md: 3, lg: 4 }} alignItems="center">
                            {(['About', 'Experience', 'Projects', 'Skills', 'Contact'] as const).map((text) => {
                                const isActive = location.pathname === `/${text.toLowerCase()}`;
                                return (
                                    <RouterLink
                                        key={text}
                                        to={`/${text.toLowerCase()}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            sx={{
                                                color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                                                '&:hover': {
                                                    color: theme.palette.primary.main,
                                                },
                                                transition: 'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
                                                fontWeight: 'medium',
                                                paddingY: 1,
                                                borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {getIcon(text)}
                                            {text}
                                        </Typography>
                                    </RouterLink>
                                )
                            })}


                            <IconButton onClick={toggleColorMode} color="inherit">
                                {mode === 'dark' ? <Brightness7Outlined /> : <Brightness4Outlined />}
                            </IconButton>
                        </Stack>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default HeaderLayout