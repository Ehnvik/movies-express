import express from "express";
import { IMovie } from "./data/movies";
import * as moviesData from "./data/movies";
const cors = require("cors");

const app = express();

app.use(
  cors({
    methods: ["GET", "PUT", "PATCH", "DELETE", "POST"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/");
app.get("/movies", (req,res)=>{
  const movies= moviesData.getAllMovies();
  res.send(movies);
})

app.post("/new-movie", (req,res)=>{
  const newMovie: IMovie = {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  }
  moviesData.addMovie(newMovie);
  let lastMovie = moviesData.movies.slice(-1)[0];

  res.send(JSON.stringify(lastMovie.id));
})

app.get("/movies/:id", (req, res)=> {
  const movie = moviesData.getMovieById(+req.params.id);
  res.send(movie);
})

app.put("/movies/:id/update", (req,res)=>{
  let i = +req.params.id;
  moviesData.updateMovie(i, {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  })
  res.send(moviesData.movies[i]);
})

app.delete("/movies/:id/delete", (req,res)=>{
  moviesData.deleteMovieById(+req.params.id);
  res.send(moviesData.movies);
})
const port = process.env.PORT || 8008;
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
