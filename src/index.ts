import { Express, Request, Response } from "express";
const express = require("express");
const app: Express = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  //   res.send("Hi, I am Live Now");
  res.json({ msg: "I am Saxx" });
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Yes I am connected to ${PORT} Port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
