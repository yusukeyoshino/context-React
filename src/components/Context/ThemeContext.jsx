import React,{useState,useContext} from 'react'


const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = ()=>{
  return useContext(ThemeContext)
}

export const useThemeUpdate = ()=>{
  return useContext(ThemeUpdateContext)
}
export const ThemeProvider = ({children})=>{

  const [darkTheme, setDarkTheme] = useState(false);
  const updateTheme = ()=>{
    setDarkTheme(prevState=>!prevState)
  }





  return (
    <ThemeContext.Provider value={darkTheme}> 
      <ThemeUpdateContext.Provider value={updateTheme}>
      {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}