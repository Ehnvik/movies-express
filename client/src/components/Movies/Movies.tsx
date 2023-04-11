import { useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import { getMovies } from "../../services/MovieServices";
import "./Movies.scss";
import errorImg from "../../assets/brokenimg.png";
import { useNavigate } from "react-router-dom";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const navigate = useNavigate();
  const imageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = errorImg;
  };

  useEffect(() => {
    let data = async () => {
      const response = await getMovies();

      setMovies(response);
    };

    if (movies.length > 0) return;

    data();
  });

  const goToMovie = (id: number) => {
    navigate(`/movies/${id}`);
  };
  const html = movies.map((m) => {
    return (
      <div
        onClick={() => {
          goToMovie(m.id);
        }}
      >
        <div>
          <img src={m.imageUrl} alt={m.name} onError={imageError} />
        </div>
        <h2>{m.name}</h2>
      </div>
    );
  });
  return <div className="moviesContainer">{html}</div>;
};
