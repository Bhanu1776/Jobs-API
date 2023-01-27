import { Request, Response } from "express";

export const getAllJobs = async (req: Request, res: Response) => {
  res.status(200).json({ msg: "I am getAllJobs" });
};

export const getAllJobsTesting = async (req: Request, res: Response) => {
  res.status(200).json({ msg: "I am getAllJobsTesting" });
};
