import { Router } from "express";
import routeHandler from "../middleware/route-handler";
import createUser from "../services/user/create-user";
import login from "../services/user/login";
import tokenVerification from "../middleware/tokenVerification";
import me from "../services/user/me";
import changeRole from "../services/user/changeRole";
import changeUser from "../services/user/changeUser";
import checkValidEmail from "../services/user/validationSchemas/checkValidEmail"

const router = Router();

router.post("/api/v1/user/login", routeHandler(login));
router.post("/api/v1/user/register", routeHandler(createUser));
router.post("/api/v1/user/email", routeHandler(checkValidEmail));
router.patch("/api/v1/user/changeUser", routeHandler(changeUser));
router.get("/api/v1/user/me", tokenVerification, routeHandler(me));
router.post("/api/v1/user/:userId/makeTeacher", routeHandler(changeRole));

export default router;
