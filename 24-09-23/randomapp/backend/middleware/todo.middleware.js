import { body } from "express-validator";
import { title } from "process";

const todoRouteMiddlewareTitle = (req, res, next) => {
  if (req.method === "POST") {
    body("todoTitle")
      .isString()
      .not()
      .isEmpty()
      .withMessage("Must include a title");
  }
  next();
};

const todoRouteMiddlewarePriority = (req, res, next) => {
  if (req.method === "POST") {
    body("priority").isNumeric().withMessage("Priority must be a number");
  }
  next();
};

const todoRouteMiddlewareContent = (req, res, next) => {
  if (req.method === "POST") {
    body("content")
      .isString()
      .not()
      .isEmpty()
      .withMessage("Must include content");
  }
  next();
};

export const middleware = {
  content: todoRouteMiddlewareContent,
  title: todoRouteMiddlewareTitle,
  priority: todoRouteMiddlewarePriority,
};
/*
Priority check (not negative)
Title is present
Title not in use
*/
