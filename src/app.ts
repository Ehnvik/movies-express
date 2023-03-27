require("dotenv").config();
import express from "express";
const apiRoutes = require("./routes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    methods: ["GET", "PUT", "DELETE", "POST"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", apiRoutes);

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
