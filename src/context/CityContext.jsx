import React, { createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [city, setCity] = useState("Kelowna"); // Default city is Kelowna

    // Function to set city
    const updateCity = (cityName) => {
    setCity(cityName);
    };

    return (
    <CityContext.Provider value={{ city, updateCity }}>
        {children}
    </CityContext.Provider>
    );
};


export const useCity = () => useContext(CityContext); // custom hook