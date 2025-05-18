import React from 'react';
import { useConversion } from '../context/ConversionContext';

const ToggleTheme = () => {
  const { theme, toggleConversion } = useConversion();

  return (
    <button onClick={toggleConversion} className="theme-toggle">
      Switch to {theme === "Celcius" ? "Fahrenheit" : "Celcius"} Conversion
    </button>
  );
};

export default ToggleTheme;