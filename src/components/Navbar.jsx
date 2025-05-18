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
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <ToggleConversion/>
        <ToggleTheme /> 
        </nav>
    );
};

export default Navbar;