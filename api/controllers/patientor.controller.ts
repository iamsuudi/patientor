import { Request, Response } from "express";

export const getAllPatients = async (req: Request, res: Response) => {
	console.log("Serving all pateints");

	res.send("All Pateints");
};

export const createPatient = async (req: Request, res: Response) => {
	console.log("Creating a pateint");

	res.send("Patient created");
};
