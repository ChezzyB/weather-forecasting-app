import React from "react";
// import { Link } from "react-router";
import ToggleTheme from "./ToggleTheme"; 
import ToggleConversion from "./ToggleConversion";
import rainbowLogo from '../assets/rainbow-svgrepo-com.svg';
import { useTheme } from "../context/ThemeContext";


const Navbar = () => {

    const { theme } = useTheme();

    return (
    
        <nav className={`home ${theme}`}>
            <div>
                <a href="/" target="_blank">
                    <img src={rainbowLogo} className="logo" alt="Rainbow logo" />
                </a>        
            </div>
        {/* <NavLink to="/">Home</NavLink> | 
        <NavLink to="/city">City</NavLink> | 
        <NavLink to="/about">About</NavLink> |  */}
        <ToggleConversion/>
        <ToggleTheme /> 
        </nav>
    );
};

export default Navbar;