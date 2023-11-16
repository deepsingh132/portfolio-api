// initializing installed dependencies
import express, { Express, Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";
import { getPinnedRepos } from "./controller";

// initializing dotenv
dotenv.config();

const app: Express = express();
app.use(cors());

// defining the server port
const port = process.env.PORT || 5000;

// API request
app.get(
  "/api/v1/github/deepsingh132",
  (req: Request, res: Response) => {
    console.log("Received request for pinned repos");
    const pinnedRepos = getPinnedRepos();
    pinnedRepos.then((data: any) => {
      res.send(data);
    });
  }
);

// listening for requests
app.listen(port, () => console.log(`Server is running on ${port}`));