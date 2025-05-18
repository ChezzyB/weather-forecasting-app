import { useState } from 'react'
import { Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { ConversionProvider } from "./context/ConversionContext";
import Navbar from "./components/Navbar";


//Functional component for the app entry point
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
      <ConversionProvider>
        <Navbar />
          <main>
            <Outlet />
          </main>
      </ConversionProvider>
      </ThemeProvider>
    </>
  )
};

export default App
