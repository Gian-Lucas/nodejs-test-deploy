import { Request, Response, Express } from "express";

const express = require("express");
const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
