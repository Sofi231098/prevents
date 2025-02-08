import { useTheme } from "./shared/hooks/useTheme"

const App = () => {

  const {toggleTheme} = useTheme(); 

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App