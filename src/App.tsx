import { DashboardContainer } from './pages/Dashboard/DashboardContainer'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './quries/queryClient'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { useTheme } from './contexts/ThemeContext'
import { lightTheme, darkTheme } from './themes/muiTheme'

/**
 * SRP: MUI 테마 적용 책임
 * - ThemeContext의 다크모드 상태에 따라 MUI 테마 전환
 */
function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <DashboardContainer />
      </QueryClientProvider>
    </MuiThemeProvider>
  );
}

function App() {
  return <AppContent />;
}

export default App
