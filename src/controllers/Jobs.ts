import { Request, Response } from "express";
const JobSchema = require("../models/JobSchema");

export const getAllJobs = async (req: Request, res: Response) => {
  const { category, title, sort, select } = req.query;

  // type Obj = {
  //   title: any;
  //   description: any;
  //   price: any;
  //   category: any;
  // };

  // var queryObject: Obj = {
  //   title: undefined,
  //   description: undefined,
  //   price: undefined,
  //   category: undefined,
  // };

  // if (category) {
  //   queryObject.category = category;
  // }
  // if (title) {
  //   queryObject.title = { $regex: title, $options: "i" };
  // }

  // let myArray: any = sort;
  // let splitArray = [];

  // for (let i = 0; i < myArray.length; i++) {
  //   splitArray.push(myArray[i].split(",").join(" "));
  // }
  // console.log(splitArray);

  let apiData = JobSchema.find(req.query);

  // if (sort) {
  //   let sortFix = splitArray.split(",").join(" ");
  //   apiData = apiData.sort(sortFix);
  // }

  // if (select) {
  //   // let selectFix = select.replace(",", " ");
  //   let selectFix = select.split(",").join(" ");
  //   apiData = apiData.select(selectFix);
  // }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

export const Temp = async (req: Request, res: Response) => {
  const myData = await JobSchema.find(req.query);
  res.status(200).json({ myData });
};

export const getAllJobsTesting = async (req: Request, res: Response) => {
  const myData = await JobSchema.find(req.query);
  res.status(200).json({ myData });
};
