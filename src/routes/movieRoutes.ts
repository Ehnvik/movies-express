import { Router } from "express";
import {
  createMovie,
  getMovieById,
  getMovies,
} from "../controller/movieController";

const movieRoutes = Router();

movieRoutes.get("/", getMovies);
movieRoutes.get("/:id", getMovieById);
movieRoutes.post("/", createMovie);

export default movieRoutes;
