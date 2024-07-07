export interface DiagnosisType {
	code: string;
	name: string;
	latin?: string;
}

export enum gender {
	Male = "male",
	Female = "female",
	Other = "other",
}

export interface PatientType {
	id: string;
	name: string;
	dateOfBirth: string;
	ssn: string;
	gender: gender;
	occupation: string;
}

export type NonSensitivePatientType = Omit<PatientType, "ssn">;

export type PatientEntry = Omit<PatientType, "id">;
