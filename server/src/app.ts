import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { router as index, movieRoutes } from "./routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    methods: ["GET", "PUT", "DELETE", "POST"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", index, movieRoutes);

const port = process.env.PORT;
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
