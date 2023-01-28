import { Express, Request, Response } from "express";
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
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Yes I am connected to ${PORT} Port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
