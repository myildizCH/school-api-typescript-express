import { Schema, model, connect } from "mongoose";
import env from "../../../env";
connect(env.MONGO_URI);

export class School {
  name: string;
}

const schema = new Schema<School>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const SchoolModel = model<School>("School", schema);
export default SchoolModel;
