import { Schema, model, connect } from "mongoose";
import env from "../../../env";
connect(env.MONGO_URI);

export class Student {
  fullName: string;
  classroomId: Schema.Types.ObjectId;
  studentNo?: string;
  gender: string;
  age: number;
}

const schema = new Schema<Student>(
  {
    fullName: { type: String, required: true },
    classroomId: { type: String, required: true },
    studentNo: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

const StudentModel = model<Student>("Student", schema);
export default StudentModel;
