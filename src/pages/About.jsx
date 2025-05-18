import { useLocation } from "react-router";
import { useTheme } from "../context/ThemeContext";


const About = () => {
  const { theme } = useTheme();
  const location = useLocation();
  return (
    <div className={`home ${theme}`}>
      <h1>About Page</h1>
      <p>This app uses the old 2.5 API from openweathermap.org</p>
      <p>Please navigate to the home page and enter your desired city</p>
      <p>The buttons on the top right allow for switching between Fahrenheit and Celcius as well as light and dark modes</p>
    </div>
  );
};

export default About;