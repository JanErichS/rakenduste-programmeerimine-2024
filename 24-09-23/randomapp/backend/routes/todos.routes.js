import { Router } from "express";
const router = Router();
import todos from "../controllers/todo.controller.js";

router.get("/", todos.read);
router.post("/", todos.create);
router.put("/", todos.update);
router.delete("/", todos.delete);

export default router;
