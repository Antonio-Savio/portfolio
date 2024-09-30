import { createContext, ReactNode, useState } from "react";

interface ThemeProviderProps{
    children: ReactNode;
}

type ThemeContextData = {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(true)

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return(
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }