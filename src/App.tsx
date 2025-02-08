import { DarkMode, LightMode } from '@/assets/Icons';
import { Button } from "@/shared/components/button/button";
import { useTheme } from "@/shared/hooks/useTheme";

const App = () => {

  const { toggleTheme, theme } = useTheme();

  return (
    <div style={{
      padding: "1rem",
    }}>
      <Button
        text="Toggle Theme"
        // size={'icon'}
        // variant={'ghost'}
        onClick={toggleTheme}
        Icon={
          theme === "light" ?
            <DarkMode />
            :
            <LightMode />
        }
      />
    </div>
  )
}

export default App