import { Router } from "express";
import movieRoutes from "./movieRoutes";

const router = Router();

router.use("/movies", movieRoutes);

export { router, movieRoutes };
