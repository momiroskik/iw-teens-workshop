import { Router } from "express";
import routeHandler from "../middleware/route-handler";
import students from "../services/student/students";
import grades from "../services/student/student-grades";
import studentReport from "../services/student/student-report";
import updateSubjectGrade from "../services/student/updateSubjectGrade";
import tokenVerification from "../middleware/tokenVerification";
import teacherOnly from "../middleware/teacherOnly";

const router = Router();

router.get("/api/v1/students", routeHandler(students));
router.get("/api/v1/student/report", routeHandler(studentReport));
router.get("/api/v1/student/:userId", routeHandler(grades));
router.post(
  "/api/v1/student/:userId/:subjectId",
  tokenVerification,
  teacherOnly,
  routeHandler(updateSubjectGrade)
);

export default router;
