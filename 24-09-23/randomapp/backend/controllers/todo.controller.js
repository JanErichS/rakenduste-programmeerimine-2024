import crypto from "crypto";
const todos = [

];

export function create(req, res) {
  const { name } = req.body;

  if (!name || name === "") {
    return res
      .status(418)
      .send({ type: "Error", message: "Must include a name (not coffee)" });
  }

  const newtodo = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: new Date().getTime(),
    updatedAt: null,
    deleted: false,
  };

  // console.log(name);

  todos.push(newtodo);
  res.send(newtodo);
}

export function read(req, res) {
  return res.send(todos);
}

export function update(req, res) {
  const { id, name, deleted = false } = req.body;

  todos
    .filter((todo) => todo.id === id)
    .forEach((todo) => {
      name ? (todo.name = name) : {};
      todo.updatedAt = new Date().getTime();
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
