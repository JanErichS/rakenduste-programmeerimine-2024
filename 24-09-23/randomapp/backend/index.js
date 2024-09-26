import express from "express";
import catsRoutes from "./routes/cats.routes.js";
import exampleRoutes from "./routes/examples.routes.js";
import morgan from "morgan";
import cors from "cors";
const app = express();
const PORT = 3033;

app.use(cors());
app.use(express.json());
app.use("/cats", catsRoutes);
app.use("/examples", exampleRoutes);
app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send("Yello World!");
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});