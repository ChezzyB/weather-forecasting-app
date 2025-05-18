import { useState } from 'react'
import { Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { ConversionProvider } from "./context/ConversionContext";
import { CityProvider } from "./context/CityContext";
import Navbar from "./components/Navbar";


//Functional component for the app entry point
const App = () => {
  return (
    <>
      <ThemeProvider>
      <ConversionProvider>
      <CityProvider>
        <Navbar />
          <main>
            <Outlet />
          </main>
      </CityProvider>
      </ConversionProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
