import { Schema, model, connect } from "mongoose";
// import mongoose from "mongoose";
import env from "../../../env";

connect(env.MONGO_URI);

export class Classroom {
  name: string;
  schoolId: Schema.Types.ObjectId;
}

const schema = new Schema<Classroom>(
  {
    name: { type: String, required: true, unique: true },
    schoolId: { type: Schema.Types.ObjectId },
  },
  { timestamps: true }
);

const ClassroomModel = model<Classroom>("Classroom", schema);
export default ClassroomModel;
