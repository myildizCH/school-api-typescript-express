import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: true,
    message: "Hello World! This is just a beginning for this app 😊",
  });
});

export default router;
