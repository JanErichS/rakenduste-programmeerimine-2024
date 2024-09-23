import express from "express";
import catsRoutes from "./routes/cats.routes.js";
import cors from "cors";
const app = express();
const PORT = 3033;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Yello World!");
});

app.get("/post/:postID", (req, res) => {
  res.statusCode(418);
  res.send(req.params);
});

app.post("/post/:postID/:name", (req, res, next) => {
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.use(express.json());

app.use("/cats", catsRoutes);
