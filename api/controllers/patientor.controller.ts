import { Request, Response } from "express";
import patients from "../data/patients";
import { NonSensitivePatientType } from "../types";

export const getAllPatients = async (req: Request, res: Response) => {
	console.log("Serving all pateints");
	const safePatientsData: NonSensitivePatientType[] = patients.map(
		({ ssn, ...safe }) => safe
	);

	res.json(safePatientsData);
};

export const createPatient = async (req: Request, res: Response) => {
	console.log("Creating a pateint");

	res.send("Patient created");
};
