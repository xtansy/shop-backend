import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { mongoDbConnect } from "./core/mongo";
import { headphonesRoute, tokenRoute, userRoute } from "./routes";

const app = express();

app.use(
	cors({
		origin: "*",
	})
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoDbConnect();

headphonesRoute(app);
userRoute(app);
tokenRoute(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
