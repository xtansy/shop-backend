import { Request, Response } from "express";
import { db } from "../models";

const { headphone } = db;

export const index = async (req: Request, res: Response) => {
	try {
		const headphones = await headphone.find({}).exec();
		res.json({
			message: "success",
			data: headphones,
		});
	} catch (error) {
		res.json({
			message: "error",
			data: JSON.stringify(error),
		});
	}
};

export const post = async (req: Request, res: Response) => {
	try {
		const { title, img, price, rate } = req.body;
		const headphoneItem = { title, img, price, rate };
		const response = new headphone(headphoneItem);
		await response.save();
		res.json({
			message: "success",
			data: response,
		});
	} catch (error) {
		res.json({
			message: "error",
			data: JSON.stringify(error),
		});
	}
};
