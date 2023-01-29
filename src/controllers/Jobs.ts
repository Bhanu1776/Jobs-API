import { Request, Response } from "express";
const JobSchema = require("../models/JobSchema");

export const getAllJobs = async (req: Request, res: Response) => {
  const { category, title, sort } = req.query;

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

  // let myArray:any = sort;
  // let splitArray = [];

  // for (let i = 0; i < myArray.length; i++) {
  //   splitArray.push(myArray[i].split(" "));
  // }
  // console.log(splitArray);

  let apiData = JobSchema.find(queryObject);

  if (sort) {
    let sortSafe: any = sort;
    let sortFix = sortSafe.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  const myData = await apiData;
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
