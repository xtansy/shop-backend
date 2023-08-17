import { Schema, model } from "mongoose";
import { Document } from "mongoose";

interface HeadphoneModel {
    title: string;
    img: string;
    price: number;
    rate: number;
}

export type HeadphoneModelDocument = HeadphoneModel & Document;

export const Headphone = model<HeadphoneModelDocument>(
    "Headphones",
    new Schema<HeadphoneModel>(
        {
            title: {
                required: true,
                type: String,
            },
            img: {
                required: true,
                type: String,
            },
            price: {
                required: true,
                type: Number,
            },
            rate: {
                required: true,
                type: Number,
            },
        },
        {
            versionKey: false,
        }
    )
);
