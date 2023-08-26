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
		const { title, img, price, rate, type } = req.body;
		const headphoneItem = { title, img, price, rate, type };
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

export const deleteAll = async (req: Request, res: Response) => {
	try {
		await headphone.deleteMany({});
		res.json({
			message: "sucess",
			data: "All headphones has been deleted",
		});
	} catch (error) {
		res.status(403).json({
			message: "Cannot delete all headphones",
			data: error,
		});
	}
};
