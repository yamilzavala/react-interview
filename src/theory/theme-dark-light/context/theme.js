import { createContext, useState, useEffect } from "react";

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
}

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;

    const toggleTheme = () => {
        localStorage.setItem('isDark',  JSON.stringify(!isDark))
        setIsDark(!isDark)
    };

    useEffect(() => {
        localStorage.getItem('isDark') === 'true' ? setIsDark(true) : setIsDark(false)
    }, [])

    const valueToShare = {
        theme,
        toggleTheme,
        isDark
    }

    return (
        <ThemeContext.Provider value={valueToShare}>
            {children}
        </ThemeContext.Provider> 
    )
}