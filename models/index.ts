import mongoose, { Model } from "mongoose";

import { User, UserModelDocument } from "./user";
import { Headphone, HeadphoneModelDocument } from "./headphones";
mongoose.Promise = global.Promise;

interface Database {
    mongoose: any;
    user: Model<UserModelDocument>;
    headphone: Model<HeadphoneModelDocument>;
}

export const db: Database = {
    mongoose,
    user: User,
    headphone: Headphone,
};
