import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import SevenDayForecast from "../pages/SevenDayForecast";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sevenDayForecast" element={<SevenDayForecast />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;