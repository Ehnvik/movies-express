import axios from "axios";
import { IMovie } from "../models/IMovie";

const dbURL = "http://localhost:8008/movies/";

export const getMovies = async () => {
  const response = await axios.get<IMovie[]>(dbURL);

  return response.data;
};

export const getMovieById = async (id: string) => {
  const response = await axios.get<IMovie>(dbURL + id);

  return response.data;
};
