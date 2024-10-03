import { Router } from "express";
const router = Router();
import jwt from "../controllers/jwt.controller.js";

router.get("/", jwt.signToken);
router.post("/", jwt.verifyToken);

export default router;
