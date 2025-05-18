import { useTheme } from "../context/ThemeContext";


const City = () => {

    const { theme } = useTheme();

    return( 
    <div className={`home ${theme}`}>
    <h1>City Page</h1>

    </div>
  );
};

export default City;