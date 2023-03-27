import { movies } from "../data/movies";
import { Request, Response } from "express";

export const getMovies = (req: Request, res: Response): void => {
  res.json(movies);
};

export const getMovieById = (req: Request, res: Response) => {
  const movie = movies.find((m) => m.id.toString() === req.params.id);
  res.json(movie);
};
