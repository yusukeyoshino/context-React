import React from "react";
import { ThemeProvider } from "./components/Context/ThemeContext.jsx";
import Box from "./components/Box";

function App() {
  return (
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  );
}

export default App;
