import { useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import { getMovieById } from "../../services/MovieServices";
import { useNavigate, useParams } from "react-router-dom";
import errorImg from "../../assets/brokenimg.png";
import "./Movie.scss";

export const Movie = () => {
  const [movie, setMovie] = useState<IMovie>({
    id: 0,
    name: "",
    description: "",
    imageUrl: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      let data = async () => {
        const response = await getMovieById(id);

        setMovie(response);
      };
      data();
    }
  }, []);
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = errorImg;
  };
  const goBack = () => {
    navigate("/movies");
  }
  return (
    <div className="movieContainer">
      <button onClick={goBack}>Tillbaka</button>
      <div className="movieContainer__img">
        <img src={movie.imageUrl} alt={movie.name} onError={handleError} />
      </div>
      <div className="movieContainer__details">
        <h4>{movie.name}</h4>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};
