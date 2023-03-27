import express from "express";
const cors = require("cors");

const app = express();

app.use(
  cors({
    methods: ["GET", "PUT", "DELETE", "POST"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/",);

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
