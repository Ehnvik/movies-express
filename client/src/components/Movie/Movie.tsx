import { useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import { getMovieById } from "../../services/MovieServices";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const [movie, setMovie] = useState<IMovie>({
    id: 0,
    name: "",
    description: "",
    imageUrl: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      let data = async () => {
        const response = await getMovieById(id);

        setMovie(response);
      };
      data();
    }
  }, []);
  console.log(movie);
  return <div>{movie.name}</div>;
};
