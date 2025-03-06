import { DarkMode, LightMode } from '@/assets/Icons';
import { Button } from "@/shared/components";
import { useTheme } from "@/shared/hooks/useTheme";
import EventsPage from './modules/events/page';

const App = () => {

  const { toggleTheme, theme } = useTheme();

  return (
    <main style={{
      padding: "1rem",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      <h1>Prevents</h1>
      <Button
        size={'icon'}
        onClick={toggleTheme}
        Icon={
          theme === "light" ?
            <DarkMode />
            :
            <LightMode />
        }
      />

      <EventsPage />
    </main>

  )
}

export default App