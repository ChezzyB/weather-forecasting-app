import { useState } from 'react'
// import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { ConversionProvider } from "./context/ConversionContext";
import Navbar from "./components/Navbar";
// import AppRoutes from "./routes/AppRoutes";


import rainbowLogo from '/rainbow-svgrepo-com.svg'


//Functional component for the app entry point
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
    <ConversionProvider>
        {/* <BrowserRouter> */}
          <Navbar />
          {/* <AppRoutes /> */}
        {/* </BrowserRouter> */}
    </ConversionProvider>
    </ThemeProvider>
    
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={rainbowLogo} className="logo" alt="Rainbow logo" />
    //     </a>
        
    //   </div>
    //   <h1>Weather Forecasting App</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
        
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Rainbow logo to learn more
    //   </p>
    // </>
  )
};

export default App
