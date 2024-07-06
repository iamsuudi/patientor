import { Request, Response } from "express";
import diagnosis from "../data/diagnoses";

export const getAllDiagnosis = async (req: Request, res: Response) => {
	console.log("Serving all diagnosis");

	res.json(diagnosis);
};
