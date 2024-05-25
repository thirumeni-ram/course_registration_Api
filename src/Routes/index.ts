// import { Router } from "express";

// const router = Router();

// // Define routes here
// router.post("/add/courseOffering", (req, res) => {
//   // Implementation goes here
//   res.json({ message: "Course offering added" });
// });

// router.get("/", (req, res) => {
//   res.json({ message: "WELCOME" });
// });

// router.post("/add/register/:course_id", (req, res) => {
//   // Implementation goes here
//   res.json({ message: "Registration attempt" });
// });

// router.post("/allot/:course_id", (req, res) => {
//   // Implementation goes here
//   res.json({ message: "Allotment done" });
// });

// router.post("/cancel/:registration_id", (req, res) => {
//   // Implementation goes here
//   res.json({ message: "Cancellation attempted" });
// });

// export default router;
// routes/index.ts
import { Router } from "express";
import courseOfferingRouter from "./courseOfferingRouter";
// import registrationRouter from "./registrationRouter";
// import allotmentRouter from "./allotmentRouter";
// import cancellationRouter from "./cancellationRouter";

const router = Router();

router.use("/add/courseOffering", courseOfferingRouter);
// router.use("/register", registrationRouter);
// router.use("/allot", allotmentRouter);
// router.use("/cancel", cancellationRouter);

export default router;
