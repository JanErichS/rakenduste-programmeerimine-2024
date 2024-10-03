import { Router } from "express";
const router = Router();
import todos from "../controllers/todo.controller.js";
import { middleware } from "../middleware/todo.middleware.js";

router.get("/", todos.read);
router.post(
  "/",
  middleware.content,
  middleware.title,
  middleware.priority,
  todos.create,
);
router.put("/", todos.update);
router.delete("/", todos.delete);

export default router;
