import { Children, createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider=({children})=>{
    const [theme,setTheme] = useState(()=>{
        return localStorage.getItem('theme') || 'light';
    });
    useEffect(()=>{
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>prevTheme==='light'?'dark':'light');
    };
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext