import React from "react";
// import { Link } from "react-router";
import ToggleTheme from "./ToggleTheme"; 
import ToggleConversion from "./ToggleConversion";
import rainbowLogo from '../assets/rainbow-svgrepo-com.svg';
import { useTheme } from "../context/ThemeContext";
import { NavLink } from 'react-router';


const Navbar = () => {

    const { theme } = useTheme();

    return (
    
        <nav className={`home ${theme}`}>
                <div>
                    <NavLink to="/"><img src={rainbowLogo} className="logo" alt="Rainbow logo" /></NavLink>      
                </div>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/city">City</NavLink> | 
            <NavLink to="/sevenday">Seven Day Forecast</NavLink> |
            <NavLink to="/about">About</NavLink> | 
            <NavLink to="/notfound">Not Found</NavLink> | 
            <ToggleConversion/>
            <ToggleTheme /> 
        </nav>
    );
};

export default Navbar;