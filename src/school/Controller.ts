import { Request, Response, NextFunction } from "express";
import SchoolModel from "./models/school";

const Create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    new SchoolModel(req.body).save((err, data) => {
      if (err) res.json({ status: false, error: err });
      res.json({ status: true, data: data });
    });
  } catch (error) {
    return error;
  }
};

export { Create };
