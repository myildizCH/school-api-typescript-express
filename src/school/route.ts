import { Router } from "express";
import { Create } from "./Controller";

const router = Router();
router.post("/", Create);

export default router;
