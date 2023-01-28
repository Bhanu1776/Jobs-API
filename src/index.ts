const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
import { Express, Request, Response } from "express";
import process from "process";
const express = require("express");
const app: Express = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const job_routes = require("./routes/AppRoutes");

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "I am Root" });
});

//* Middleware (To set router)
app.use("/api/jobs", job_routes);

const start = async () => {
  try {
    await connectDB(process.env.DATABASE);
    app.listen(PORT, () => {
      console.log(`Yes I am connected to ${PORT} Port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
