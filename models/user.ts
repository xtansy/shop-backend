import { Schema, model } from "mongoose";
import { Document } from "mongoose";

interface UserModel {
    login: string;
    password: string;
}

export type UserModelDocument = UserModel & Document;

export const User = model<UserModelDocument>(
    "UsersShop",
    new Schema<UserModel>(
        {
            login: {
                required: true,
                type: String,
            },
            password: {
                required: true,
                type: String,
            },
        },
        {
            versionKey: false,
        }
    )
);
