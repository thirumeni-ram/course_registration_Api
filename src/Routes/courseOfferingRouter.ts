// routes/courseOfferingRouter.ts
import { Router } from "express";
import { addCourseOffering } from "../Controllers/courseOfferingController";

const router = Router();

router.post("/", addCourseOffering);
router.get("/", (req, res) => {
  res.send("It's working");
});

export default router;
