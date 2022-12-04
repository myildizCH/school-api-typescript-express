import express from "express";

const app = express();
app.use(express.json());

import indexRouter from "./index";
import classroomRouter from "./src/classroom/route";
import indexSchool from "./src/school/route";
import indexStudent from "./src/student/route";

//Routes
app.use("/", indexRouter);
app.use("/classroom", classroomRouter);
app.use("/school", indexSchool);
app.use("/student", indexStudent);

app.listen(3000, () => console.log("Listening port 3000"));
