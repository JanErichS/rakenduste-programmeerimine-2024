import crypto from "crypto";
const cats = [
  {
    id: "fb6debd8-a684-4945-97ee-ef104e7b421b",
    name: "Kiisumiisu",
    createdAt: 1727099012754,
    updatedAt: null,
    deleted: false
  },
  {
    id: "299dcb4e-5a7f-4f17-927c-e5f161d554a7",
    name: "Miisukiisu",
    createdAt: 1727099315253,
    updatedAt: null,
    deleted: false
  }
];

export function create(req, res) {
  const { name } = req.body;

    if (!name || name === "") {
			return res
				.status(418)
				.send({ type: "Error", message: "Must include a name (not coffee)" });
		}

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: new Date().getTime(),
    updatedAt: null,
    deleted: false
  };

  // console.log(name);

  cats.push(newCat);
  res.send(newCat);
}

export function read(req, res) {
  return res.send(cats);
}

export function update(req, res) {
  const { id, name } = req.body;

  cats
    .filter((cat) => cat.id === id)
    .forEach((cat) => {
      name ? (cat.name = name) : {};
      cat.updatedAt = new Date().getTime();
    });

  res.send(cats);
}

const _delete = (req, res) => {
  const { id } = req.body;
  cats
    .filter((cat) => cat.id === id)
    .forEach((cat) => {
      cat.deleted = true;
    });

  res.send(cats);
};

export default {
  delete: _delete,
  create,
  read,
  update
};
