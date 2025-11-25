import { DashboardContainer } from './pages/Dashboard/DashboardContainer'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './quries/queryClient'


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContainer />
    </QueryClientProvider>
  )
}

export default App

