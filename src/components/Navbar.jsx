// import React from "react";
// import ToggleTheme from "./ToggleTheme"; 
// import ToggleConversion from "./ToggleConversion";
// import rainbowLogo from '../assets/rainbow-svgrepo-com.svg';
// import { useTheme } from "../context/ThemeContext";
// import { NavLink } from 'react-router';


// const Navbar = () => {

//     const { theme } = useTheme();

//     return (
    
//         <nav className={`home ${theme}`}>
//                 <div>
//                     <NavLink to="/"><img src={rainbowLogo} className="logo" alt="Rainbow logo" /></NavLink>      
//                 </div>
//             <NavLink to="/">Home</NavLink> | 
//             <NavLink to="/about">About</NavLink> | 
//             <ToggleConversion/>
//             <ToggleTheme /> 
//         </nav>
//     );
// };

// export default Navbar;

import React from "react";
import ToggleTheme from "./ToggleTheme";
import ToggleConversion from "./ToggleConversion";
import rainbowLogo from '../assets/rainbow-svgrepo-com.svg';
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom"; // Correct router import
import { NavLink } from 'react-router';

const Navbar = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const navigateTo = (path) => () => {
    navigate(path);
  };

  return (
    <nav className={`home ${theme}`}>
      <div>
        <NavLink to="/"><img src={rainbowLogo} className="logo" alt="Rainbow logo" /></NavLink> 
      </div>

      <button onClick={navigateTo("/")} className="nav-button">
        Home
      </button>

      <button onClick={navigateTo("/about")} className="nav-button">
        About
      </button>

      <ToggleConversion />
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
