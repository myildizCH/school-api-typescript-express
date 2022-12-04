import { Request, Response, NextFunction } from "express";
import ClassroomModel from "./models/classroom";

const Create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    new ClassroomModel(req.body).save((err, data) => {
      if (err) res.json({ status: false, error: err });
      res.json({ status: true, data: data });
    });
  } catch (error) {
    return error;
  }
};

export { Create };
