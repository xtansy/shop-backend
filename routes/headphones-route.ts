import { Express } from "express-serve-static-core";
import { index, post } from "../controllers/headphones-controller";
import { authMiddleware } from "../middleware";

export const headphonesRoute = (app: Express) => {
	app.get("/headphones/index", authMiddleware, index);
	app.post("/headphones/post", post);
};
