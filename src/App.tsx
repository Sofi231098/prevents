import { DarkMode, LightMode } from '@/assets/Icons';
import { Button, Input } from "@/shared/components";
import { useTheme } from "@/shared/hooks/useTheme";

const App = () => {

  const { toggleTheme, theme } = useTheme();

  return (
    <div style={{
      padding: "1rem",
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
      <br />
      <br />
      <Input
        id='search'
        Icon={<DarkMode />}
        placeholder='Busca un artista, banda o evento...'
      />
    </div>

  )
}

export default App