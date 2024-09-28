import crypto from "crypto";
import { filterDeleted } from "../utils/utils.js";
const todos = [
  {
    id: crypto.randomUUID(),
    todoTitle: "Todo 1",
    priority: 0,
    content: "Todo 1 content",
    completed: false,
    createdAt: 1727099012754,
    updatedAt: null,
    deleted: false,
  },
  {
    id: crypto.randomUUID(),
    todoTitle: "Todo 2",
    priority: 1,
    content: "Todo2 content",
    completed: false,
    createdAt: 1727093012754,
    updatedAt: null,
    deleted: false,
  },
];

export function create(req, res) {
  const { todoTitle, content, priority } = req.body;

  if (!todoTitle || todoTitle === "") {
    return res.send({ type: "Error", message: "Must include a title" });
  }
  if (content === "" || content === null) {
    return res.send({ type: "Error", message: "Must include content" });
  }

  const newtodo = {
    id: crypto.randomUUID(),
    todoTitle,
    priority,
    content,
    createdAt: new Date().getTime(),
    updatedAt: null,
    deleted: false,
  };

  todos.push(newtodo);
  res.send(newtodo);
}

export function read(req, res) {
  return res.send(filterDeleted(todos));
}

export function update(req, res) {
  const {
    id,
    todoTitle,
    content,
    priority,
    completed = false,
    deleted = false,
  } = req.body;

  todos
    .filter((todo) => todo.id === id)
    .forEach((todo) => {
      todoTitle ? (todo.todoTitle = todoTitle) : {};
      todo.updatedAt = new Date().getTime();
      todo.completed = completed;
      todo.priority = priority;
      todo.content = content;
      todo.deleted = deleted;
    });

  res.send(todos);
}

const _delete = (req, res) => {
  const { id } = req.body;

  todos
    .filter((todo) => todo.id === id)
    .forEach((todo) => {
      todo.deleted = true;
    });

  res.send(todos);
};

export default {
  delete: _delete,
  create,
  read,
  update,
};
