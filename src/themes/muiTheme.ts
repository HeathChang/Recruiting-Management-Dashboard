import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#1f2937',
            secondary: '#6b7280',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#60a5fa',
        },
        background: {
            default: '#111827',
            paper: '#1f2937',
        },
        text: {
            primary: '#f3f4f6',
            secondary: '#9ca3af',
        },
    },
});

