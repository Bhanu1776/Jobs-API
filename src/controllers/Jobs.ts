import { Request, Response } from "express";
const JobSchema = require("../models/JobSchema");

export const getAllJobs = async (req: Request, res: Response) => {
  const { category, title } = req.query;

  type Obj = {
    title: any;
    description: any;
    price: any;
    category: any;
  };

  const queryObject: Obj = {
    title: undefined,
    description: undefined,
    price: undefined,
    category: undefined,
  };

  if (category) {
    queryObject.category = category;
  }
  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  const myData = await JobSchema.find(queryObject);
  res.status(200).json({ myData });
};

export const Temp = async (req: Request, res: Response) => {
  const myData = await JobSchema.find(req.query);
  res.status(200).json({ myData });
};

export const getAllJobsTesting = async (req: Request, res: Response) => {
  const myData = await JobSchema.find(req.query);
  res.status(200).json({ myData });
};
