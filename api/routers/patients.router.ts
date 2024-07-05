import express from "express";
import {
	createPatient,
	getAllPatients,
} from "../controllers/patientor.controller";

const patientRouter = express.Router();

patientRouter.get("/patients", getAllPatients);
patientRouter.post("/patients", createPatient);

export default patientRouter;
