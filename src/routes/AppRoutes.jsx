import React from "react";
import { createRoutesFromElements, Route, useRoutes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import City from "../pages/City";
import NotFound from "../pages/NotFound";
import SevenDay from "../pages/SevenDayForecast";

const AppRoutes = () => {
    
  const routes = createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="city" element={<City />} />
      <Route path="sevenday" element={<SevenDay />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );

  return useRoutes(routes);
};

export default AppRoutes;