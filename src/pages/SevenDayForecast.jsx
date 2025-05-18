import { useNavigate } from "react-router";

const SevenDay = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>7 Day Forecast</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default SevenDay;