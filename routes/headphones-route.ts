import { Express } from "express-serve-static-core";
import { index, post } from "../controllers/headphones-controller";

export const headphonesRoute = (app: Express) => {
    app.get("/headphones/index", index);
    app.post("/headphones/post", post);
};
