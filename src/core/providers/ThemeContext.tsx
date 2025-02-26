import { createContext, FC, useEffect, useState } from "react";

const ThemeContext = createContext({theme: "light", toggleTheme: () => {}});

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider:FC<ThemeProviderProps> = ({children}) => {
    
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((previousTheme) => previousTheme === "light" ? "dark" : "light");
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}; 

export { ThemeContext, ThemeProvider };
