import mongoose, { Model } from "mongoose";

import { User, UserModelDocument } from "./user";
import { Headphone, HeadphoneModelDocument } from "./headphones";
import { TokenModel, TokenModelDocument } from "./token";
mongoose.Promise = global.Promise;

interface Database {
	mongoose: any;
	user: Model<UserModelDocument>;
	headphone: Model<HeadphoneModelDocument>;
	tokenModel: Model<TokenModelDocument>;
}

export const db: Database = {
	mongoose,
	user: User,
	headphone: Headphone,
	tokenModel: TokenModel,
};
