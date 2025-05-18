import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === 'Light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ToggleTheme;