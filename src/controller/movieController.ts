import { movies } from "../data/movies";
import { Request, Response } from "express";

export const getMovies = (req: Request, res: Response): void => {
  res.json(movies);
};
