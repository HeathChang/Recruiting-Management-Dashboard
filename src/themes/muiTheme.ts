import { createTheme } from '@mui/material/styles';

/**
 * SRP: 라이트 모드 MUI 테마 생성 책임
 */
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

/**
 * SRP: 다크 모드 MUI 테마 생성 책임
 * - MUI 컴포넌트가 자동으로 다크모드 색상 적용
 */
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

