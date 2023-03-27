import { movies } from "../data/movies";
import { Request, Response } from "express";
import { IMovie } from "../models/IMovie";

export const getMovies = (req: Request, res: Response): void => {
  res.json(movies);
};

export const getMovieById = (req: Request, res: Response) => {
  const movie = movies.find((m) => m.id.toString() === req.params.id);
  res.json(movie);
};

export const createMovie = (req: Request, res: Response) => {
  const lastMovie = movies.slice(-1)[0];
  let id = lastMovie.id;
  id = id ? id + 1 : 1;

  const newMovie: IMovie = {
    id: id,
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  };

  movies.push({
    id: newMovie.id,
    name: newMovie.name,
    description: newMovie.description,
    imageUrl: newMovie.imageUrl,
  });

  res.send("Movie created successfully");
};
