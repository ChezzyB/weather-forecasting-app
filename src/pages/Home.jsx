import React, { Suspense, lazy } from "react";
import { useTheme } from "../context/ThemeContext";

//const ProductList = lazy(() => import("../components/ProductList"));

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <h1>Your City</h1>
      {/* <Suspense fallback={<div>Loading city...</div>}>
         <CityCard />
      </Suspense> */}
    </div>
  );
};

export default Home;