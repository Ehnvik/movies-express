import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div>
      <button onClick={handleClick}>Visa alla filmer</button>
    </div>
  );
};
