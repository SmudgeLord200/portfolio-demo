import type { PaletteMode } from "@mui/material/styles";

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'dark'
            ? {
                // palette values for dark mode
                primary: { main: '#6ee7b7' },
                secondary: { main: '#3b82f6' },
                background: {
                    default: '#0f172a',  // Dark background
                    paper: '#1e293b',
                },
                text: {
                    primary: '#f8fafc',
                    secondary: '#d1d5db',
                },
            }
            : {
                // palette values for light mode
                primary: { main: '#6ee7b7' },
                secondary: { main: '#3b82f6' },
                background: {
                    default: '#f9fafb', // Light background
                    paper: '#ffffff',
                },
                text: {
                    primary: '#1f2937',
                    secondary: '#4b5563',
                },
            }),
    },
    typography: {
        fontFamily: '"Nunito Sans", sans-serif', // Use Nunito Sans or a similar font
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Don't uppercase
                    borderRadius: '2rem', // Rounded buttons
                },
                contained: {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                    },
                },
                outlined: {
                    borderColor: 'rgba(255, 255, 255, 0.1)', // For light borders in dark mode
                    color: mode === 'dark' ? '#d1d5db' : '#4b5563',
                },
                ghost: {
                    color: mode === 'dark' ? '#d1d5db' : '#4b5563',
                    '&:hover': {
                        backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    }
                }
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    borderRadius: '2rem',
                },
                input: {
                    padding: '0.75rem 1.25rem',
                }
            }
        },
        MuiTextarea: {
            styleOverrides: {
                root: {
                    borderRadius: '1.5rem',
                },
                input: {
                    padding: '0.75rem 1.25rem',
                }
            }
        },
    }
});