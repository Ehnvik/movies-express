import { Router } from "express";
import { getMovieById, getMovies } from "../controller/movieController";

const movieRoutes = Router();

movieRoutes.get("/", getMovies);
movieRoutes.get("/:id", getMovieById);

export default movieRoutes;
