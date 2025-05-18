import React from "react";
import App from "../App";
import { createRoutesFromElements, Route, useRoutes } from "react-router";
import Home from "../pages/Home";
import SevenDayForecast from "../pages/SevenDayForecast";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
      
    const routes = createRoutesFromElements(
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="/sevenDayForecast" element={<SevenDayForecast />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    );

    return useRoutes(routes);

  
};

export default AppRoutes;