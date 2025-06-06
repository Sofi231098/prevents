import { SkeletonTheme } from 'react-loading-skeleton';
import RoutesProvider from './core/routes';
import { useTheme } from './shared/hooks/useTheme';
import { Toaster } from 'sonner';

const App = () => {

  const { theme } = useTheme();

  return (
    <SkeletonTheme baseColor={theme === 'dark' ? '#081C36' : '#DCE9F9'} highlightColor={theme === 'dark' ? '#0b2950' : '#BCCADC'} >
      <RoutesProvider />
      <Toaster 
        richColors
      />
    </SkeletonTheme>
  )
}

export default App