import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getMovieById,
  getMovies,
  updateMovie,
} from "../controller/movieController";

const movieRoutes = Router();

movieRoutes.get("/", getMovies);
movieRoutes.get("/:id", getMovieById);
movieRoutes.post("/", createMovie);
movieRoutes.delete("/:id", deleteMovie);
movieRoutes.patch("/:id", updateMovie);

export default movieRoutes;
