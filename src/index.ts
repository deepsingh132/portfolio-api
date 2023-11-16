import { Request, Response } from "express";
const express = require("express");
const { getPinnedRepos } = require("./controller");
const cors = require("cors");
const dotenv = require("dotenv");

// initializing dotenv
dotenv.config();

// initializing express
const app = express();
app.use(cors());

// defining the server port
const port = process.env.PORT || 5000;

// defining the routes
app.get(
  "/api/v1/github/pinned-repos",
  (req: Request, res: Response) => {
    console.log("Received request for pinned repos");
    getPinnedRepos()
      .then((repos: any) => {
        res.status(200).json({ repos });
      })
      .catch((error: any) => {
        console.error(error);
        res.status(500).send({ error: error.message });
      });
  }
);

// listening for requests
app.listen(port, () => console.log(`Server is running on ${port}`));

module.exports = app;