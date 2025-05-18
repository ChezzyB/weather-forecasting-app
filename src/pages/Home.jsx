import React, { Suspense, lazy } from "react";
import { useTheme } from "../context/ThemeContext";


const Home = () => {

  const { theme } = useTheme();


  return( 
    <div className={`home ${theme}`}>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

  
