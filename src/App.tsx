import { Button } from "./shared/components/button/button";
import { useTheme } from "./shared/hooks/useTheme";

const App = () => {

  const { toggleTheme } = useTheme();

  return (
    <div style={{
      padding: "1rem",
    }}>
      <Button
        text="Toggle Theme"
        onClick={toggleTheme}
      />
    </div>
  )
}

export default App