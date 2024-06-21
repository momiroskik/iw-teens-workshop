import { Router } from "express";
import routeHandler from "../middleware/route-handler";
import createUser from "../services/user/create-user";
import login from "../services/user/login";

const router = Router();

router.post("/api/v1/user/login", routeHandler(login));
router.post("/api/v1/user/register", routeHandler(createUser));

export default router;
