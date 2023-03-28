import dotenv from "dotenv";
dotenv.config();

import express from "express";
<<<<<<< HEAD
import { IMovie } from "./data/movies";
import * as moviesData from "./data/movies";
const cors = require("cors");
=======
import { router as index, movieRoutes } from "./routes";
import cors from "cors";
>>>>>>> 3e82ad2cb96c2ffda76aa9cf83b93c328ceec576

const app = express();

app.use(
  cors({
    methods: ["GET", "PUT", "DELETE", "POST"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
// app.use("/");
const port = process.env.PORT || 8008;
=======
app.use("/", index, movieRoutes);

const port = process.env.PORT;
>>>>>>> 3e82ad2cb96c2ffda76aa9cf83b93c328ceec576
const run = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

run();
