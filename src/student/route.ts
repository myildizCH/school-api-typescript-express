import { Router } from "express";
import { Create, List } from "./Controller";

const router = Router();

router.post("/create", Create);
router.get("/list", List);

export default router;
