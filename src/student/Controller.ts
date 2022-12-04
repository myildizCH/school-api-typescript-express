import { Request, Response, NextFunction } from "express";
import ClassroomModel from "../classroom/models/classroom";
import StudentModel, { Student } from "./models/student";
import { StudentService } from "./Services";

const studentService = new StudentService();

const Create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fullName, age, gender, classroomId } = req.body;
    console.log(fullName);
    let classroom = await ClassroomModel.findById(classroomId);
    console.log(classroom);
    let studentCount = await StudentModel.find({ classroomId }).count();

    new StudentModel({
      fullName,
      age,
      gender,
      classroomId,
      studentNo: classroom.name + "-" + Number(studentCount + 1),
    }).save((err, data) => {
      if (err) res.json({ status: false, error: err });
      res.json({ status: true, data: data });
    });
  } catch (error) {
    return error;
  }
};

const List = async (req: Request, res: Response, next: NextFunction) => {
  let data = await StudentModel.find({}).lean();

  if (data.length > 0) res.json({ success: true, data: data });
  res.json({ success: false, message: "Not found" });
};

export { Create, List };
