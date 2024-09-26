import { Router } from "express";
const router = Router();
import cats from "../controllers/cats.controller.js";
import {
	catsRouteMiddleware,
	catsGetRouteMiddleware,
} from "../middleware/cats.middleware.js";

router.use(catsRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, cats.read);
router.post("/", cats.create);
router.put("/", cats.update);
router.delete("/", cats.delete);

export default router;
