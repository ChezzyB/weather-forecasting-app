// import { useNavigate } from "react-router";

// const SevenDay = () => {

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>7 Day Forecast</h1>
//       <button onClick={() => navigate("/")}>Go Home</button>
//     </div>
//   );
// };

// export default SevenDay;

import { useTheme } from "../context/ThemeContext";


const SevenDay = () => {

  const { theme } = useTheme();

  return( 
    <div className={`home ${theme}`}>
      <h1>7 Day Forecast</h1>

    </div>
  );
};

export default SevenDay;