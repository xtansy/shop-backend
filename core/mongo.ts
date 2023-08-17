import { Error } from "mongoose";

import { db } from "../models";
import { dbConfig } from "../config";
const { USERNAME, PASSWORD } = dbConfig;

export const mongoDbConnect = () => {
    db.mongoose.set("strictQuery", false);
    db.mongoose
        .connect(
            "mongodb+srv://admin:admin@cluster0.pc9j6.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("Successfully connect to MongoDB.");
        })
        .catch((err: Error) => {
            console.error("Connection error", err);
            process.exit();
        });
};
