import { gender, PatientEntry } from "../types";

function isString(text: unknown): text is string {
	return typeof text === "string" || text instanceof String;
}

function isDate(param: string): boolean {
	return Date.parse(param) ? true : false;
}

function isGender(param: string): param is gender {
	return Object.values(gender)
		.map((v) => v.toString())
		.includes(param);
}

function parseOccupation(param: unknown): string {
	if (!param || !isString(param)) {
		throw new Error(`Incorrect or missing occupation: ${param}`);
	}

	return param;
}

function parseGender(param: unknown): gender {
	if (!param || !isString(param) || !isGender(param)) {
		throw new Error(`Incorrect or missing gender: ${param}`);
	}

	return param;
}

function parseSSN(param: unknown): string {
	if (!param || !isString(param)) {
		throw new Error(`Incorrect or missing SSN: ${param}`);
	}

	return param;
}

function parseDate(param: unknown): string {
	if (!param || !isString(param) || !isDate(param)) {
		throw new Error(`Incorrect or missing dateOfBirth: ${param}`);
	}

	return param;
}

function parseName(name: unknown): string {
	if (!name || !isString(name)) {
		throw new Error(`Incorrect or missing name`);
	}

	return name;
}

export default function NewPatientEntry(object: PatientEntry): PatientEntry {
	const newPatient: PatientEntry = {
		name: parseName(object.name),
		dateOfBirth: parseDate(object.dateOfBirth),
		ssn: parseSSN(object.ssn),
		gender: parseGender(object.gender),
		occupation: parseOccupation(object.occupation),
	};

	return newPatient;
}
