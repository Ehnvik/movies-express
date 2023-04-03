import { movies } from "../data/movies";
import { Request, Response } from "express";
import { IMovie } from "../models/IMovie";

export const getMovies = (req: Request, res: Response): void => {
  res.json(movies);
};

export const getMovieById = (req: Request, res: Response) => {
  const movie = movies.find((m) => m.id === +req.params.id);
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

  // movies.push({
  //   id: newMovie.id,
  //   name: newMovie.name,
  //   description: newMovie.description,
  //   imageUrl: newMovie.imageUrl,
  // });

  movies.push(newMovie);

  res.send("Movie created successfully");
  //   res.sendStatus(201);
};

export const deleteMovie = (req: Request, res: Response) => {
  const i = movies.findIndex((m) => m.id === +req.params.id);

  if (i !== -1) {
    movies.splice(i, 1);
    res.send("Movie deleted successfully");
  } else {
    res.status(404).send("Movie not found");
  }
};

export const updateMovie = (req: Request, res: Response) => {
  const i = movies.findIndex((c) => c.id === +req.params.id);

  if (i !== -1) {
    movies[i].name = req.body.name;
    movies[i].description = req.body.description;
    movies[i].imageUrl = req.body.imageUrl;
    res.send("Movie updated successfully");
  } else {
    res.status(404).send("Movie not found");
  }
};
