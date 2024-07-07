import { Request, Response } from "express";
import patients from "../data/patients";
import {
	gender,
	NonSensitivePatientType,
	PatientEntry,
	PatientType,
} from "../types";
import NewPatientEntry from "../utils/newPatientEntry";

export const getAllPatients = async (req: Request, res: Response) => {
	console.log("Serving all patients");
	const safePatientsData: NonSensitivePatientType[] = patients.map(
		({ ssn, ...safe }) => safe
	);

	res.json(safePatientsData);
};

export const createPatient = async (
	req: Request<
		{},
		{},
		{
			name: string;
			dateOfBirth: string;
			ssn: string;
			gender: gender;
			occupation: string;
		}
	>,
	res: Response
) => {
	console.log("Creating a patient");
	try {
		const entry: PatientEntry = NewPatientEntry(req.body);

		const newPatient: PatientType = { ...entry, id: Date.now().toString() };

		patients.push(newPatient);

		return res.status(201).json(newPatient);
	} catch (error: any) {
		console.log(error.message);

		return res.status(400).json({ message: error.message });
	}
};
