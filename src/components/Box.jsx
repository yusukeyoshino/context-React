import React,{useContext} from 'react'
import {useTheme,useThemeUpdate} from "./Context/ThemeContext"

const Box = () => {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();


  return (
    <>
      <div style={{width:"200px",height:"200px",color:darkTheme? "white":"black",backgroundColor:darkTheme ? "black":"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto"}}>
        {darkTheme ? "It's dark": "It's not dark"}
      </div>
      <button style={{marginLeft:"40vw"}} onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default Box
