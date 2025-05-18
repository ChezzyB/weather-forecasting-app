import React, { createContext, useContext, useState } from "react";

const ConversionContext = createContext();

export const ConversionProvider = ({ children }) => {
  const [theme, setConversion] = useState("Celcius"); // Default theme is Celcius

  const toggleConversion = () => {
    setConversion((prevTheme) => (prevTheme === "Celcius" ? "Fahrenheit" : "Celcius"));
  };

  return (
    <ConversionContext.Provider value={{ theme, toggleConversion }}>
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversion = () => useContext(ConversionContext); // custom hook