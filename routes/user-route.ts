import { Express } from "express-serve-static-core";
import {
	register,
	index,
	deleteAll,
	logout,
} from "../controllers/user-controller";

export const userRoute = (app: Express) => {
	app.get("/user/index", index);

	app.post("/user/register", register);
	app.post("/user/logout", logout);

	app.delete("/user/deleteAll", deleteAll);
};
