import { Request, Response } from "express";
const JobSchema = require("../models/JobSchema");

export const getAllJobs = async (req: Request, res: Response) => {
  const myData = await JobSchema.find({});
  res.status(200).json({ myData });
};

export const Temp = async (req: Request, res: Response) => {
  const myData = await JobSchema.find({});
  res.status(200).json({ myData });
};

export const getAllJobsTesting = async (req: Request, res: Response) => {
  const myData = await JobSchema.find({});
  res.status(200).json({ myData });
};
