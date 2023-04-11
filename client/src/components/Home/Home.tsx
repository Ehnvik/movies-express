
import { useNavigate } from "react-router-dom";
import "./Home.scss";
export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div className="homeContainer">
      <button onClick={handleClick}>Visa alla filmer</button>
    </div>
  );
};
