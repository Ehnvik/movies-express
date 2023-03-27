import { Router } from "express";
import { getMovies } from "../controller/movieController";

const movieRoutes = Router();

movieRoutes.get("/", getMovies);

export default movieRoutes;
