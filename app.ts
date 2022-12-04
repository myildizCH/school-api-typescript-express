import express from "express";

const app = express();
app.use(express.json());

import indexRouter from "./index";

app.use("/", indexRouter);

app.listen(3000, () => console.log("Listening port 3000"));
