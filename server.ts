import express from "express";
import cors from "cors";

import { mongoDbConnect } from "./core/mongo";
import { headphonesRoute } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoDbConnect();
headphonesRoute(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
