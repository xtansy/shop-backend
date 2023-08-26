import { Express } from "express-serve-static-core";
import { index, post, deleteAll } from "../controllers/headphones-controller";
import { authMiddleware } from "../middleware";

export const headphonesRoute = (app: Express) => {
	app.get("/headphones/index", index);
	app.post("/headphones/post", post);

	app.delete("/headphones/deleteAll", deleteAll);
};
